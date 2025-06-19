import { useEffect } from "react";
import Loader from "../helpers/Loader";

export default function NavigatetoAuthX() {
    useEffect(() => {
        const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URL)
        const domain = import.meta.env.VITE_DOMAIN

        const authXUrl = `https://authxui-uat.vercel.app?redirect_uri=${redirectUri}&domain=${domain}`
        window.location.href = authXUrl
    }, [])

    return (
        <div sx={{ minHeight: "100vh" }}>
            <Loader />
        </div>
    )
}