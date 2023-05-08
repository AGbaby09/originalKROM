import { useEffect } from 'react';
import './Burner.css'
const Burner = () => {
    useEffect(()=>{
        let letters = document.getElementsByClassName('letter')
        console.log(letters)
        // let i=0;
        // setInterval(()=>{
        //     letters[i].style.color='red'; 
        //     i++;
        // }, 3000)
    }, [])
    
    return ( 
        <main id="bbBurners">
            <section id='section1'>
                <h1>
                    <span className='letter'>B</span>
                    <span className='letter'>B</span>
                </h1>
            </section>
        </main>
    );
}
 
export default Burner;