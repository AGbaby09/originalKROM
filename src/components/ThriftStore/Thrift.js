import './Thrift.css'
import {useEffect} from 'react';
const Thrift = () => {
    
    useEffect(()=>{
        let icons = document.querySelectorAll('.avatar');

        window.addEventListener('DOMContentLoaded', ()=>{
            for(let i=0;i<icons.length;i++){
                icons[i].style.animation = 'bounce-top 0.9s both';
                icons[i].style.animationDelay= `${i/2}s`;
            }
        })   
        
    }, [])

    return ( 
        <main id="thriftStore">
            <section id='section1'>
                <div id='top'>
                    <div id="logoBanner">
                        <h3 class="word1">KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM</h3>
                        <h3 class="word2">THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT</h3>
                    </div>
                    <h1>THRiFT</h1>
                    <div id="logoBanneR">
                        <h3 class="word1">KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM</h3>
                        <h3 class="word2">THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT KROM THRIFT</h3>
                    </div>
                </div>
                <main>
                    <article>
                        <h2>Accra's finest thrift store</h2>
                        <p>One of One backpacks and accessories. All items are one of one unless stated</p>
                    </article>
                    <div class="socialIcons">
                        <div class="avatar">
                            <img alt="" src="https://img.icons8.com/windows/32/null/nike.png"/>
                        </div>
                        <div class="avatar">
                            <img alt="" src="https://img.icons8.com/ios-filled/50/null/adidas-trefoil.png"/>
                        </div>
                        <div class="avatar">
                            <img alt="" src="https://img.icons8.com/ios/50/null/air-jordan.png"/>
                        </div>
                        <div class="avatar">
                            <img alt="" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/null/external-puma-a-german-multinational-company-designs-and-manufactures-athletic-and-casual-footwear-apparel-and-accessories-fashion-filled-tal-revivo.png"/>
                        </div>
                        <div class="avatar">
                            <img alt="" src="https://img.icons8.com/ios-filled/50/null/naruto-sign.png"/>
                        </div>
                    </div>
                </main>
                <section>
                    
                </section>
            </section>
        </main>
    );
}
 
export default Thrift;