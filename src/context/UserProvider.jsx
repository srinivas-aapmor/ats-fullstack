import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import { axiosInstance } from '../utils/axios';
import Loader from '../helpers/Loader'

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: '',
        access: []
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await axiosInstance.get('auth/me', { withCredentials: true });
                // console.log(res.data.logginIn)
                if (res.data.logginIn) {
                    const userData = res.data.user;
                    // console.log(userData.FullName)   
                    setUser({
                        name: userData.FullName,
                        email: userData.Email,
                        role: userData.SpaceName,
                        access: userData.Access || []
                    });
                }
            } catch (err) {
                console.log('User not logged in');
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    if (loading) return <div><Loader /></div>;
    // console.log(user)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}