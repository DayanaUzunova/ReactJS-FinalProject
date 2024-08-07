import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');  
    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            setError('Both email and password are required!');
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(trimmedEmail)) {
            setError('Please enter a valid email address!');
            return;
        }

        if (trimmedPassword.length < 6) {
            setError('Password must be at least 6 characters long!');
            return;
        }

        setError('');  

        try {
            await login(trimmedEmail, trimmedPassword);
            navigate('/');
        } catch (err) {
            if (err.message.includes('Invalid email or password')) {
                setError('The email or password is incorrect. Please try again.');
            } else {
                setError('Wrong email address or password!');
            }
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Enter your email here.."
                        required
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Enter your password here.."
                        required
                    />

                    {error && (
                        <p aria-live="assertive">
                            <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                        </p>
                    )}

                    <input
                        type="submit"
                        className="btn submit"
                        value="Login"
                    />

                    <p className="field">
                        <span>If you don`t have a profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}