import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

// Animation variant for fade-in + movement
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-300 via-gray-100 to-white text-gray-900 p-6 shadow-2xl min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated Background Circles */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.1, transition: { duration: 2 } },
        }}
        className="absolute w-[400px] h-[400px] bg-purple-400 rounded-full top-[-100px] left-[-100px] animate-pulse"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.1, transition: { duration: 2, delay: 0.5 } },
        }}
        className="absolute w-[350px] h-[350px] bg-gray-300 rounded-full top-[-100px] right-[-100px] animate-ping"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.1, transition: { duration: 2, delay: 1 } },
        }}
        className="absolute w-[350px] h-[350px] bg-purple-200 rounded-full bottom-[-100px] left-[-100px] animate-ping"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.1, transition: { duration: 2, delay: 1.5 } },
        }}
        className="absolute w-[400px] h-[400px] bg-gray-400 rounded-full bottom-[-120px] right-[-120px] animate-pulse"
      />

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="max-w-3xl mx-auto mt-12 text-gray-900 p-8"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold mb-8 text-center text-purple-700 tracking-wide drop-shadow-md"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-800 mb-6 leading-loose tracking-wide indent-6 bg-opacity-80 backdrop-blur-md rounded-lg p-4"
        >
          Hi, I'm Gowtham R, a passionate frontend developer based in the Coimbatore. I'm in my final year of Computer Science at{" "}
          <strong>Hindusthan College of Engineering and Technology, Coimbatore</strong>, and I bring over two years of hands-on experience in modern web development.
          <br /><br />
          My expertise includes <strong>HTML, CSS, JavaScript, React.js, Bootstrap, TailwindCSS, and Framer Motion</strong>, and I thrive on building beautiful, responsive user interfaces that are both functional and delightful to use.
          <br /><br />
          Whether it's crafting personal projects or collaborating in team environments, I strive to deliver clean, efficient code with thoughtful design principles.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          CONTACT
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
