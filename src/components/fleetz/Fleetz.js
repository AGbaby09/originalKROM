import { useEffect } from 'react'
import './Fleetz.css'
const Fleetz = () => {

    const img = document.getElementById('fleetzHead')
    
    useEffect(()=>{
        // console.log(img.classList)
    }, [])
    const scrollTO = ()=>{
        img.style.top = '-100%';
    }
    
    return (  
        <main id="fleetz">
            <section id='fleetzHead' className=' '>
                <h1>KROM FLEETZ</h1>
                <button onClick={scrollTO}>Buy a car</button>
            </section>
            <section id='taskbar'>

            </section>
        </main>
    );
}
 
export default Fleetz;