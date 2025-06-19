import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import UserContext from "../context/UserContext";
import Loader from '../helpers/Loader'


export default function AppLoader() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext);
    // const { user, } = userContext ? userContext.user || userContext : {};
    // console.log(user)
    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    useEffect(() => {
        async function checkLogin() {
            try {
                const response = await axiosInstance('auth/me')

                if (response.data.logginIn) {
                    console.log('user is logged in', response.data.user)
                    // setUser({
                    //     name: response.data.user.FullName,
                    //     // email: response.data.user.email,
                    //     role: response.data.user.SpaceName,
                    //     access: response.data.user.Access
                    // })


                    navigate('/home')

                }
                else {
                    navigate('/login')
                }


            } catch (error) {
                console.log('user not loddd in', error)
                navigate('/login')
            }
        }
        checkLogin()
    }, [])

    return (

        <div>
            <Loader />
        </div>

    );
}