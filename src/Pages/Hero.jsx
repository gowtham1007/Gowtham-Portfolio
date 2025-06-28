

// import { motion } from 'framer-motion';
// import profileImage from "../assets/Screenshot_63.jpg"; // replace with your image path

// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-r from-gray-400 via-gray-200 to-white min-h-screen flex items-center justify-center px-6 md:px-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
//             <span className="text-purple-500">Welcome</span> to my <br /> 
//             Portfolio Website
//           </h1>
//           <p className="text-gray-700 mb-6 text-lg">
//             Hello I am Gowtham R, Professional Full-stack Developer. This is my portfolio site where I am presenting my projects and services. Let’s Explore.
//           </p>
//           <a
//             href="/src/assets/Gowtham R Resume.pdf.pdf"
//             className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition"
//             download
//           >
//             <i className="bi bi-download mr-2"></i> Download CV
//           </a>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center md:justify-end"
//         >
//           <div className="relative flex justify-center mt-10">
//   <motion.div
//     initial={{ opacity: 0, scale: 0.8 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 1 }}
//     className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_30px_rgba(128,0,255,0.5)] bg-gray-900/40 backdrop-blur-md"
//   >
//     <img
//       src={profileImage}
//       alt="Profile"
//       className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
//     />
//     {/* Optional Glow Overlay */}
//     <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl animate-pulse pointer-events-none" />
//   </motion.div>
//             <div className="absolute top-2 right-2 text-purple-400 text-2xl animate-bounce">
//               ✨
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CVFile from '../assets/Gowtham R Resume.pdf.pdf';
import profileImage from "../assets/Screenshot_63.jpg"; // Replace with your image path
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-400 via-gray-200 to-white min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            <span className="text-purple-500">Welcome</span> to my <br /> 
            Portfolio Website
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
            Hello I am Gowtham R, Professional Full-stack Developer. This is my portfolio site where I am presenting my projects and services. Let’s Explore.
          </p>
          <a
  href={CVFile}
  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition"
  download
>
  <i className="bi bi-download mr-2"></i> Download CV
</a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mt-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_30px_rgba(128,0,255,0.5)] bg-gray-900/40 backdrop-blur-md"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
            
            <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl animate-pulse pointer-events-none" />
            
            <div className="absolute top-2 right-2 text-purple-400 text-2xl animate-bounce">
              ✨
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 mt-4"
          >
            <motion.a
              href="https://github.com/gowtham1007"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 p-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gowtham1008/"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 p-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/gowtham._.1008?igsh=MXhqamlqaWtua2Rzcw=="
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 p-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition duration-300 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    
  );
};

export default HeroSection;




