import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        const email = values.email.trim();
        const password = values.password.trim();
        const confirmPassword = values['confirm-password'].trim();

        if (password.length < 6 || confirmPassword.length < 6) {
            return setError('Password must be at least 6 characters long!');
        }

        if (/\s/.test(password) || /\s/.test(confirmPassword)) {
            return setError('Password cannot contain spaces!');
        }

        if (password !== confirmPassword) {
            return setError('Passwords do not match!');
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

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

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                        placeholder="Enter your password here.."
                        required
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        value={values['confirm-password']}
                        onChange={changeHandler}
                        placeholder="Confirm your password here.."
                        required
                    />

                    {error && (
                        <p>
                            <span style={{ fontSize: '18px', color: 'red' }}>{error}</span>
                        </p>
                    )}

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have a profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}