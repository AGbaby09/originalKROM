import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Login.css'
const Login = () => {
    return ( 
        <main id='loginPage'>
            <form id='loginForm'>
                <h1>LOGIN</h1>
                <div>
                    <label>EMAIL</label>
                    <input className='input' type='email'></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input className='input' type='password'></input>
                </div>
                <div>
                    <input id='submit' type='submit' value='LOGIN'></input>
                </div>
                <div>
                    <p>Don't have an account? <Link to='/SignUp'>Sign Up</Link></p>
                </div>
            </form>
        </main>
    );
}

export default Login;
