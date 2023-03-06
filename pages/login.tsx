import { connect } from 'react-redux'
import { login } from '../store/actions/authActions';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';


const Login = ({ login, user }: any) => {
    const [formData, setFormData] = useState({ username: null, password: null });
    const router = useRouter();

    const handleChange = (e: any) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        login(formData)
    }

    useEffect(() => {
        if (Object.keys(user).length) {
            setFormData({ username: null, password: null })
            router.push('/')
        }
    }, [user])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={handleChange} value={formData.username || ''} required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} value={formData.password || ''} required />
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { login })(Login);
