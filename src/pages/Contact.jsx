import { Form } from "react-router-dom";

export const contactData = async({ request }) => {
    try {
        const res = await request.formData();
        // console.log(res);
        
        const data = Object.fromEntries(res);
        console.log(data);

        return null;
    } catch (error) {
        console.log(error);
    }
};

export const Contact = () => {
  return (
    <>
        <section className="container ">
            <h2 className="section-common--heading">contact us</h2>
            <p className="section-common--subheading">Get in touch with us. We are always here to help you.</p>

            <div className="section-contact" style={{marginTop: "8rem"}}>
                <div className=" grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST" action="/contact">
                            <div className="grid grid-two-cols mb-3">
                                <div>
                                    <label htmlFor="username">full name</label>
                                    <input type="text" name="username" id="username" required autoComplete="off" placeholder="enter full name" />
                                </div>

                                <div>
                                    <label htmlFor="email">email address</label>
                                    <input type="email" name="email" id="email" required autoComplete="off" placeholder="abc@gmail.com" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message " cols="30" rows="10" placeholder="we are always here to help you."></textarea>
                            </div>

                            <div className="mt-3">
                                <button type="submit" className="btn contact-btn">send message</button>
                            </div>
                        </Form>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1696124215167!5m2!1sen!2sin"
                            style={{width: "100%", height: "auto", border: "0", allowfullscreen: "", loading: "lazy"}}>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};