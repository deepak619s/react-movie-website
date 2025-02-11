import { NavLink } from "react-router-dom";

export const Footer = () => {
    return(
        <>
            {/* <!-- ========== Start footer Section ========== --> */}
            <footer className="section-footer">
                <div className="footer-container container">
                    <div className="content_1">
                        <h3 style={{color: "#fff", marginBottom: "20px"}}>ECOMMERCE</h3>
                        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
                    </div>

                    <div className="content_2">
                        <h4>SHOPPING</h4>
                        <NavLink to="#">Computer Store</NavLink>
                        <NavLink to="#">Laptop Store</NavLink>
                        <NavLink to="#">Accessories</NavLink>
                        <NavLink to="#">Sales & Discount</NavLink>
                    </div>

                    <div className="content_3">
                        <h4>Experience</h4>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="" target="_blank">Payment Method</NavLink>
                        <NavLink to="" target="_blank">Delivery</NavLink>
                        <NavLink to="" target="_blank">Return and Exchange</NavLink>
                    </div>

                    <div className="content_4">
                        <h4>NEWSLETTER</h4>
                        <p>Be the first to know about new<br />arrivals, sales & promos!</p>
                        <div className="f-mail">
                            <input type="email" placeholder="Your Email" />
                            <i className="bx bx-envelope"></i>
                        </div>
                        <hr />
                    </div>
                </div>

                <div className="f-design">
                    <div className="f-design-txt">
                        <p>2025 | Design and Code by Deepak Sinha</p>
                    </div>
                </div>
            </footer>
            {/* <!-- ========== End footer Section ========== --> */}
        </>
    )
};