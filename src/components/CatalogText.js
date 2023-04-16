import {useEffect} from 'react';
const CatalogText = () => {
    
    // const handleMouseOver = () => {
        
    // }
    // handleMouseOver()

    useEffect(()=>{
        const card1 =document.getElementsByClassName('translucent')[0];
        const card2 =document.getElementsByClassName('translucent')[1];
        const card3 =document.getElementsByClassName('translucent')[2];
        
        // function setTempClass(temp){
        //     temp.setAttribute('class',`${card1.classList[0]} cardTemp`)
        // }
        // setTempClass(card1)
        // setTempClass(card2)
        // setTempClass(card3)
        
        setTimeout(()=>{
            card1.setAttribute('class', `${card1.classList[0]} card1`)
        }, 500)
        setTimeout(()=>{
            card2.setAttribute('class', `${card2.classList[0]} card2`)
        }, 750)
        setTimeout(()=>{
            card3.setAttribute('class', `${card3.classList[0]} card3`)
        }, 1000)
        


        function applyHover(card, className){
            const updateClass = card.classList[0];
            const cardClass = `${card.classList[0]} ${className}`;
            // const cardClassDetails = cardClass.join(', ').toString()
            // console.log(cardClass)
            function handleMouseOver(){
                card.setAttribute('class', updateClass);
                card.style.transition = '0.2s ease-in';
            }
            function handleMouseOut(){
                card.setAttribute('class', cardClass);
                setTimeout(() => {
                    card.style.transition = '0.5s ease-in';
                }, 2000);
            }

            card.addEventListener('mouseover', handleMouseOver)
            card.addEventListener('mouseout', handleMouseOut)
        }    
        applyHover(card1, 'card1')
        applyHover(card2, 'card2')
        applyHover(card3, 'card3')
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