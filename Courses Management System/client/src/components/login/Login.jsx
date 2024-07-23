export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">

                <div className="container">
                    <h1>Login</h1>
                    <label className="inputs" htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Place your email here" />
                    <label className="inputs" htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don`t have a profile click<a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}