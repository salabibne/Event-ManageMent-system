import Navbar from "../Navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-[#008080] font-extrabold text-4xl m-4 text-center">About Code Event</h2>

            <h2 className="text-slate-600 text-lg">Welcome to Code Event, your premier destination for all things related to tech and programming events!

                At Code Event, we are passionate about fostering a thriving tech community by connecting tech enthusiasts, professionals, and learners with a wide range of exciting events. Whether you're a seasoned developer looking to stay up-to-date with the latest trends or a novice coder eager to learn, we have something for everyone.

                Our platform offers a curated selection of coding workshops, hackathons, webinars, and conferences designed to empower you with valuable skills and knowledge. We believe that learning is a lifelong journey, and our events are tailored to accommodate all levels of expertise.</h2>
            <br></br>

            <h2 className=" font-medium text-xl border-b-2 mb-2 p-2 text-teal-700"> Why Choose Code Event?</h2>

            <h2 className="font-semibold">Diverse Event Selection:</h2>
            <p>From hands-on coding workshops to inspiring tech talks, we offer a diverse range of events that cater to your specific interests and goals</p>

            <h2 className="font-semibold">Expert Instructors:</h2>
            <p>Our events are led by industry experts who are passionate about sharing their knowledge and helping you succeed.</p>

            <h2 className="font-semibold">Community Engagement:</h2>
            <p>Code Event provides a platform for networking, collaboration, and building lasting connections with like-minded individuals.</p>

            <h2 className="font-semibold">Stay Informed:</h2>
            <p> Stay ahead of the curve with the latest technologies and programming languages by attending our cutting-edge events.</p>

            <p className="p-6 text-center text-xl font-semibold text-teal-700">Join us on this exciting journey of continuous learning, innovation, and community building. Let's code together and shape the future of technology!
            </p>

        </div>
    );
};

export default About; 