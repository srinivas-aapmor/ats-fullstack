// context/UserContext.js

import { createContext, useContext, useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axios';

// 1. Create Context
const UserContext = createContext({
    user: { name: '', email: '', role: '', access: [] },
    setUser: () => { },
    loading: true
});

// 2. Provider Component
export function UserProvider({ children }) {
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
                const res = await axiosInstance.get('auth/me', {
                    withCredentials: true
                });
                if (res.data.logginIn) {
                    const u = res.data.user;
                    setUser({
                        name: u.FullName,
                        email: u.Email,
                        role: u.SpaceName,
                        access: u.Access || []
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

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}

// 3. Custom Hook
export function useUser() {
    return useContext(UserContext);
}

export default UserContext;
