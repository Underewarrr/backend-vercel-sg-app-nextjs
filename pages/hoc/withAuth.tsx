import axios from 'axios';
import Router from 'next/router';
import { useEffect, useState } from 'react';


const withAuth = (WrappedComponent) => {
const WithAuth = (props) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const result = window.localStorage.getItem('email');
        setEmail(result)
        console.log('localstorage result', result)
        const getUserInfo = async () => {
            try {
              const { data } = await axios.post(
                "/api/user/get",
                { email: result },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
                );
                setUser(data)    
                console.log('data message', data.message)
                window.localStorage.setItem('id', data.message.id);
                window.localStorage.setItem('balance', data.message.balance);
                window.localStorage.setItem('email', data.message.email);
                window.localStorage.setItem('hasPremium', data.message.hasPremium);
                window.localStorage.setItem('role', data.message.role);
                window.localStorage.setItem('username', data.message.username);
                return data;
              } catch (error) {
                console.log(error)
              }
        }
        getUserInfo()
        setLoading(false);
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!email) {
        Router.push('/user/login');
        return null;
    }

    return <WrappedComponent {...props} />;
};

WithAuth.getInitialProps = async (ctx) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : {};

       return { ...wrappedComponentInitialProps };
    };

   return WithAuth;
};

export default withAuth;