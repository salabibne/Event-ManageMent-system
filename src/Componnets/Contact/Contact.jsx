import Navbar from "../Navbar/Navbar";


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-[#008080] font-extrabold text-4xl m-4 text-center">Contact US</h2>

            <p className="text-center p-2">


                We're here to assist you with any inquiries or support you may need. Feel free to reach out to us through the following channels:</p>

            <p className="text-center p-2">Email: codesal@event.com</p>

            <p className="text-center p-2">Phone: +1 (123) 456-7890</p>

            <p className="text-center p-2">Office Address:
                123 Tech Plaza,
                Cityville, USA
            </p>

            <p className="text-center p-2">Mailing Address:
            Code Event Inc.
            P.O. Box 456,
            Cityville, USA</p>

            <p className="text-center p-2">Social Media:

            Facebook
            Twitter
            LinkedIn</p>

            <p className="text-center p-2">Support Hours:
            Monday to Friday: 9:00 AM - 6:00 PM (UTC-5)</p>

            <p className="text-center p-2">If you have any questions, feedback, or require assistance with our events or services, please don't hesitate to get in touch. We value your feedback and are committed to providing you with the best possible experience.

            For event-specific inquiries, you can also use the contact form provided on the event's page or reach out to the event organizer directly.

            Thank you for choosing Code Event, and we look forward to hearing from you!</p>


        </div>
    );
};

export default Contact;