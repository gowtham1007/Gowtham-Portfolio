

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import CVFile from '../assets/Gowtham R Resume.pdf.pdf';
// import ProfileImage from '../assets/Screenshot_63.jpg';

// const ContactPage = () => {

// const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "758692e8-02fe-46c1-b7a0-7e5b532b2114");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       Swal.fire({
//   title: "Success!",
//   text: "You Message sent sucessfull!",
//   icon: "success"
// });
//     }
//   };

//   const pageMotion = {
//     initial: { opacity: 0, scale: 0.95 },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
//     },
//   };

//   const fadeInVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { delay: 1, duration: 0.6 },
//     },
//   };

//   return (
//     <motion.div
//       className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-400 to-white text-gray-800 font-sans"
//       initial="initial"
//       animate="animate"
//       variants={pageMotion}
//     >
//       {/* Profile Section */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="flex flex-col justify-center items-center md:w-1/3 px-6 py-12"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_30px_rgba(128,0,255,0.5)] bg-gray-900/40 backdrop-blur-md"
//         >
//           <img
//             src={ProfileImage}
//             alt="Profile"
//             className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
//           />
//           <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl animate-pulse pointer-events-none" />
//           <div className="absolute top-2 right-2 text-purple-400 text-2xl animate-bounce">✨</div>
//         </motion.div>

//         <motion.h2 className="text-3xl font-bold mb-1 mt-6" variants={fadeInVariant}>
//           Gowtham R
//         </motion.h2>
//         <motion.p className="mb-4 text-2xl text-gray-200" variants={fadeInVariant}>
//           Fullstack Developer
//         </motion.p>

//         <motion.div className="flex justify-center gap-5 mb-6 text-xl" variants={fadeInVariant}>
//           <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="hover:text-purple-300 cursor-pointer transition size-9" />
//           </a>
//           <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="hover:text-purple-300 cursor-pointer transition size-9" />
//           </a>
//           <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="hover:text-purple-300 cursor-pointer transition size-9" />
//           </a>
//         </motion.div>

//         <motion.a
//           href={CVFile}
//           download="Gowtham_R_CV.pdf"
//           className="btn btn-light shadow-md px-4 bg-gray-400 inline-block mt-2"
//           whileHover={{ scale: 1.05 }}
//           variants={fadeInVariant}
//         >
//           Download CV
//         </motion.a>
//       </motion.div>

//       {/* Contact Section */}
//       <motion.div
//         className="w-full md:w-2/3 bg-white p-10 shadow-inner flex flex-col justify-center"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInVariant}
//       >
//         <motion.h2
//           className="text-4xl font-extrabold text-center text-purple-500 mb-16 drop-shadow"
//           variants={fadeInVariant}
//         >
//           CONTACT ME
//         </motion.h2>

//         <motion.div
//           className="flex justify-between mb-6 text-gray-700 px-1 text-base md:text-lg"
//           variants={fadeInVariant}
//         >
//           <div><strong>Email:</strong> gowtham1008r@gmail.com</div>
//           <div><strong>Phone:</strong> 6369548380</div>
//         </motion.div>
//  <form onSumit={onSubmit}>
//         <motion.form className="space-y-6" variants={fadeInVariant}>
         
//           <motion.input
//             type="text"
//             placeholder="Your name" name='name'
//             className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//             required
//             variants={fadeInVariant}
//           />
//           <motion.input
//             type="email"
//             placeholder="Your email" name='email'
//             className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//             required
//             variants={fadeInVariant}
//           />
//           <motion.textarea
//             rows="4"
//             placeholder="Your message" name='message'
//             className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
//             required
//             variants={fadeInVariant}
//           />
//           <motion.button
//             type="submit"
//             className="btn btn-dark px-6 py-2 mt-4 shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             variants={fadeInVariant}
//           >
//             Send
//           </motion.button>
//         </motion.form>
// </form>
//         <motion.p className="text-center mt-10 text-sm text-gray-500" variants={fadeInVariant}>
//           Made with <span className="text-red-500">❤️</span> by Gowtham R
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ContactPage;


import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Swal from 'sweetalert2';
import CVFile from '../assets/Gowtham R Resume.pdf.pdf';
import ProfileImage from '../assets/Screenshot_63.jpg';

const ContactPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '758692e8-02fe-46c1-b7a0-7e5b532b2114');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Your message was sent successfully!',
        icon: 'success',
      });
      event.target.reset();
    }
  };

  const pageMotion = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-400 to-white text-gray-800 font-sans"
      initial="initial"
      animate="animate"
      variants={pageMotion}
    >
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col justify-center items-center md:w-1/3 px-6 py-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_0_30px_rgba(128,0,255,0.5)] bg-gray-900/40 backdrop-blur-md"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl animate-pulse pointer-events-none" />
          <div className="absolute top-2 right-2 text-purple-400 text-2xl animate-bounce">✨</div>
        </motion.div>

        <motion.h2 className="text-3xl font-bold mb-1 mt-6" variants={fadeInVariant}>
          Gowtham R
        </motion.h2>
        <motion.p className="mb-4 text-2xl text-gray-200" variants={fadeInVariant}>
          Fullstack Developer
        </motion.p>

        <motion.div className="flex justify-center gap-5 mb-6 text-xl" variants={fadeInVariant}>
          <a href="https://www.linkedin.com/in/gowtham1008/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-300 cursor-pointer transition size-9" />
          </a>
          <a href="https://github.com/gowtham1007" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-300 cursor-pointer transition size-9" />
          </a>
          <a href="https://instagram.com/gowtham._.1008/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-purple-300 cursor-pointer transition size-9" />
          </a>
        </motion.div>

        <motion.a
          href={CVFile}
          download="Gowtham_R_CV.pdf"
          className="btn btn-light shadow-md px-4 bg-gray-400 inline-block mt-2"
          whileHover={{ scale: 1.05 }}
          variants={fadeInVariant}
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="w-full md:w-2/3 bg-white p-10 shadow-inner flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariant}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-purple-500 mb-16 drop-shadow"
          variants={fadeInVariant}
        >
          CONTACT ME
        </motion.h2>

        <motion.div
          className="flex justify-between mb-6 text-gray-700 px-1 text-base md:text-lg"
          variants={fadeInVariant}
        >
          <div><strong>Email:</strong> gowtham1008r@gmail.com</div>
          <div><strong>Phone:</strong> 6369548380</div>
        </motion.div>

        <form onSubmit={onSubmit} className="space-y-6">
          <motion.input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            required
            variants={fadeInVariant}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            required
            variants={fadeInVariant}
          />

           <motion.input
            type="Mobile Number"
            name="Mobile Number"
            placeholder="Your Mobile number"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            required
            variants={fadeInVariant}
          />
          <motion.textarea
type="Message"
            name="message"
            placeholder="Your message"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
            required
            variants={fadeInVariant}
          />
          <motion.button
            type="submit"
            className="btn btn-dark px-6 py-2 mt-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInVariant}
          >
            Send
          </motion.button>
        </form>

        <motion.p className="text-center mt-10 text-sm text-gray-500" variants={fadeInVariant}>
          Made with <span className="text-red-500">❤️</span> by Gowtham R
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
