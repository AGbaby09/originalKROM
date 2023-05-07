const Foot = () => {
    return ( 
        <footer>
            {/* <img src="" alt=""/> */}
            <section id="socials" className="foot">
                <i class='bx bxl-snapchat' title="Snapchat Profile"></i>
                <i class='bx bxl-twitter'title="Twitter Profile" ></i>
                <i class='bx bxl-instagram' title="Instagram Profile"></i>
            </section>
            <section id="contacts" className="foot">
                <h3>CONTACT US</h3>
                <a href="/"><i class='bx bxs-send' ></i> kromclub@gmail.com</a>
                <p><i class='bx bxs-phone-call'></i> +233 24 123 4567</p>
                <p><i class='bx bx-current-location' ></i> Odorkor, Accra-Ghana</p>
                
            </section>
            <section id="subscribe" className="foot">
                <h3>SUBSCRIBE</h3>
                <p>Enter your email to get notified about our new merchandises weekly</p>
                <span id="mailTo">
                    <input type="email" placeholder="Email"></input>
                    <i class='bx bx-mail-send' title="send mail"></i>
                </span>
            </section>
        </footer>
    );
}
 
export default Foot;