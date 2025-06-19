import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { axiosInstance } from "../utils/axios";
import UserContext from "../context/UserContext";
import Loader from '../helpers/Loader'

export default function LoginCallback() {

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    // const { user, } = userContext ? userContext.user || userContext : {};
    // console.log(user)
    const REDIRECT_URL = encodeURIComponent(import.meta.env.VITE_REDIRECT_URL);

    useEffect(() => {
        const run = async () => {
            const params = new URLSearchParams(window.location.search)
            const token = params.get('token')
            if (token) {
                try {
                    const res = await axiosInstance.post(
                        'auth/callback',
                        { token },
                        {
                            // withCredentials: true,
                            headers: {
                                'Content-Type': "application/json"
                            }
                        }
                    );

                    const userData = res.data.user;
                    // console.log("Decoded token from backend:", userData);

                    setUser({
                        name: userData.FullName,
                        email: userData.Email,
                        role: userData.SpaceName,
                        access: userData.Access || []
                    });

                    navigate('/home');
                } catch (err) {
                    console.error("Failed to store token in cookie or decode:", err);
                    window.location.href = `https://authxui-uat.vercel.app/?redirect_uri=${REDIRECT_URL}&domain=${import.meta.env.VITE_DOMAIN}`;
                }
            } else {
                window.location.href = `https://authxui-uat.vercel.app/?redirect_uri=${REDIRECT_URL}&domain=${import.meta.env.VITE_DOMAIN}`;

            };
        }
        run();
    }, [navigate])

    return (
        <div>
            <Loader />
        </div>
    )
}