import {useEffect} from 'react';
const CatalogText = () => {
    
    

    useEffect(()=>{
        const card1 =document.getElementsByClassName('translucent')[0];
        const card2 =document.getElementsByClassName('translucent')[1];
        const card3 =document.getElementsByClassName('translucent')[2];
        
        
        
        setTimeout(()=>{
            card1.setAttribute('class', `${card1.classList[0]} card1`)
        }, 500)
        setTimeout(()=>{
            card2.setAttribute('class', `${card2.classList[0]} card2`)
        }, 750)
        setTimeout(()=>{
            card3.setAttribute('class', `${card3.classList[0]} card3`)
        }, 1000)
        
    }, [])

    
    return ( 
        <>
            <div className="leftSide">
                <div className="text1">
                    <h1>Obiaa Bε didi</h1>
                </div>
                <div className="text2">
                <p>A network of indiviuals turning ideas into reality</p>
                </div>
            </div>
            <div className="rightSide">
                <div className="translucent cardTemp"></div>
                <div className="translucent cardTemp"></div>
                <div className="translucent cardTemp"></div>
            </div>
        </>
    );
}
 
export default CatalogText;