import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Login.css'
const Login = () => {
    return ( 
        <main id='loginPage'>
            <form id='loginForm'>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input className='input' type='email'></input>
                </div>
                <div>
                    <label>Password</label>
                    <input className='input' type='password'></input>
                </div>
                <div>
                    <input id='submit' type='submit' value='Login'></input>
                </div>
                <div>
                    <p>Don't have an account? <Link to='/SignUp'>Sign Up</Link></p>
                </div>
            </form>
        </main>
    );
}

export default Login;
