import { Link } from 'react-router-dom/cjs/react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return ( 
        <main id='signUpPage'>
            <form id='signUpForm'>
                <h1>SIGN UP</h1>
                <div>
                    <label>FIRSTNAME</label>
                    <input className='input' type='text'></input>
                </div>
                <div>
                    <label>LASTNAME</label>
                    <input className='input' type='text'></input>
                </div>
                <div>
                    <label>EMAIL</label>
                    <input className='input' type='email'></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input className='input' type='password'></input>
                </div>
                <div>
                    <label>CONFIRM PASSWORD</label>
                    <input className='input' type='password'></input>
                </div>
                <div>
                    <input id='submit' type='submit' value='SIGN UP'></input>
                </div>
                <div>
                    <p>Already have an account? <Link to='/Login'>Login</Link></p>
                </div>
            </form>
        </main>
    );
}

export default SignUp;
