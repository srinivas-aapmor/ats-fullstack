import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

import UserContext from "../context/UserContext";
import Loader from '../helpers/Loader';

export default function LoginCallback() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const REDIRECT_URL = encodeURIComponent(import.meta.env.VITE_REDIRECT_URL);

    useEffect(() => {
        const run = async () => {
            const params = new URLSearchParams(window.location.search);
            const token = params.get('token');

            if (token) {
                Cookies.set('token', token, {
                    expires: 7,
                    sameSite: 'Strict',
                    secure: location.protocol === 'https:'
                });

                try {
                    const decoded = jwtDecode(token);
                    console.log(decoded, "decoded");

                    setUser({
                        name: decoded.FullName,
                        email: decoded.Email,
                        role: decoded.SpaceName,
                        access: decoded.Access || []
                    });

                    // ✅ Give time for cookie + state to stabilize
                    setTimeout(() => {
                        navigate('/home');
                    }, 100);

                } catch (err) {
                    console.error("Token decoding failed:", err);
                    window.location.href = `${import.meta.env.VITE_AUTHX_URL}/?redirect_uri=${REDIRECT_URL}&domain=${import.meta.env.VITE_DOMAIN}`;
                }

            } else {
                window.location.href = `${import.meta.env.VITE_AUTHX_URL}/?redirect_uri=${REDIRECT_URL}&domain=${import.meta.env.VITE_DOMAIN}`;
            }
        };

        run();
    }, []);

    return (
        <div>
            <Loader />
        </div>
    );
}
