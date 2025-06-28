



// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import Slider from "react-slick";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// // Gradient and animation configurations
// const projectConfigs = [
//   { gradient: "from-red-400 via-orange-300 to-white", textColor: "text-red-700", accentBg: "bg-red-100", accentText: "text-red-800", motion: { initial: { x: -100 }, animate: { x: 0 } } },
//   { gradient: "from-green-400 via-lime-300 to-white", textColor: "text-green-700", accentBg: "bg-green-100", accentText: "text-green-800", motion: { initial: { y: 100 }, animate: { y: 0 } } },
//   { gradient: "from-blue-400 via-sky-300 to-white", textColor: "text-blue-700", accentBg: "bg-blue-100", accentText: "text-blue-800", motion: { initial: { scale: 0.5 }, animate: { scale: 1 } } },
//   { gradient: "from-pink-400 via-pink-200 to-white", textColor: "text-pink-700", accentBg: "bg-pink-100", accentText: "text-pink-800", motion: { initial: { y: -80 }, animate: { y: 0 } } },
//   { gradient: "from-yellow-300 via-yellow-100 to-white", textColor: "text-yellow-700", accentBg: "bg-yellow-100", accentText: "text-yellow-800", motion: { initial: { x: 100 }, animate: { x: 0 } } },
//   { gradient: "from-teal-400 via-cyan-200 to-white", textColor: "text-teal-700", accentBg: "bg-teal-100", accentText: "text-teal-800", motion: { initial: { rotate: 5 }, animate: { rotate: 0 } } },
//   // { gradient: "from-purple-400 via-indigo-300 to-white", textColor: "text-purple-700", accentBg: "bg-purple-100", accentText: "text-purple-800", motion: { initial: { opacity: 0 }, animate: { opacity: 1 } } },
//   // { gradient: "from-blue-500 via-cyan-300 to-white", textColor: "text-blue-800", accentBg: "bg-blue-100", accentText: "text-blue-900", motion: { initial: { y: 120 }, animate: { y: 0 } } },
// ];

// // Image sets
// const imageGroups = [
//   ["/src/assets/uyir1.jpg", "/src/assets/uyir2.jpeg", "/src/assets/uyir3.jpg"],
//   ["/src/assets/blood1.jpg", "/src/assets/Blood2.jpg", "/src/assets/Blood3.jpg"],
//   ["/src/assets/Rail3.jpg", "/src/assets/Rail1.jpg", "/src/assets/rail2.jpg"],
//   ["/src/assets/f1.jpg", "/src/assets/f2.jpg", "/src/assets/f3.jpg"],
//   ["/src/assets/ecom1.jpg", "/src/assets/ecom2.jpg", "/src/assets/ecom3.jpg"],
//   ["/src/assets/intern1.png", "/src/assets/intern 3.jpg", "/src/assets/intern2.jpg"],
//   // ["/images/project7-1.jpg", "/images/project7-2.jpg", "/images/project7-3.jpg"],
//   // ["/images/project8-1.jpg", "/images/project8-2.jpg", "/images/project8-3.jpg"],
// ];

// // Project details
// const projectDetails = [
//   { heading: "Passenger Safety At Bus Stop", description: "Utilizing web development to create a real-time bus tracking system -that ensures precise bus alignment at designated stops", features: ["📡 Smart Passenger Information Systems:", "🤖 Arrival Transport Details and Bus Timings", "📲 Data Collection & Community Engagement"], tech: ["Windows", "Arduino ide", "ESP 32", "LCD Display", "FID Reader", "IR Sensor","C++"] },
//   { heading: "blood Donation", description: "  Developed a Blood Donation Website to connect donors with recipients and streamline theprocess of blood requests and registrations.The platform features donor registration, blood bank listings,and real-time availability updates", features: ["🌾 patients or hospitals to register and request plasma donations.", "🚀 Donors can register with their personal and medical details", "📈 verifying users and monitoring donation activities"], tech: ["REACT", "Tailwind ", "Bootstrap", "Rest API", "Firebase", " Studio CodeSQL", "Motion"] },
//   { heading: "AI Powered complaint management for Railways", description: "Implementing AI-powered complaint management forrailways revolutionizes how passenger issues are handled by enabling real-time tracking and automatedresponse systems.", features: ["🔋 Image & Video Analysis", "📊 Urgency Detection & AI Chatbots", "💡 AI Complaint Resolution Dashboard"], tech: ["Html", "Css", "JS", "Bootstrap", "Python","vercel","NLP Libraries"] },
//   { heading: "Food Delivery Website ", description: "Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.", features: ["🚦 Order your favourite food here ", "📹 elevate your dining experience,", "📍 menu featuring a delectable array of dishes"], tech: ["React js","Node JS","Express","Mongo DB"," Axios"] },
//   { heading: "ecommerce", description: "E-Commerce platform (“The Web Application for Seamless online Shopping With a clean, user-friendly interface and advanced search functionalities, customers ", features: ["🌪️ User has to register their basic details to get access with this application service ", "📢 user has to login by using their unique user’s name and password.", "🧑‍🦯 In this module, admin can add, update, alter and delete the product that are previously provided or stored in the data. "], tech: ["React js", "Firebase", "tailwind css", "Node.js" ,"Reduxtoolkit","API (backend ,Auth,firestore),"] },
//   { heading: "INTERNSHIP ", description: "To develop the webpage of job requirement portal ,used car portal,online cosmetic shop using html, css, bootsrap, php and run the program inapache and mysql engine using xampp software", features: ["👁️ •	High performance ", "📚 •	Advanced company search by keywords such as region, city, category, status", "🔐 The authorized person to access user module for security"], tech: ["Html", "Css", "Bootstrap", "Php", " My sql", "Xampp"] },
//   // { heading: "MediChain", description: "A blockchain-based solution for secure, shareable medical records.", features: ["🔗 Immutable patient records", "👨‍⚕️ Role-based access control", "⚖️ HIPAA compliance layer"], tech: ["Solidity", "React", "IPFS", "Node.js", "Metamask"] },
//   // { heading: "AquaTrack", description: "Smart water management for homes and industries using IoT and analytics.", features: ["💧 Real-time water level tracking", "📉 Leak detection alerts", "📊 Usage analytics dashboard"], tech: ["IoT", "React", "Node.js", "Chart.js", "Firebase"] },
// ];

// // Slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   pauseOnHover: true,
// };

// const CuratedWork = ({ config, shapeIndex }) => {
//   const { gradient, textColor, accentBg, accentText, motion: motionConfig } = config;
//   const detail = projectDetails[shapeIndex];

//   return (
//     <motion.div
//       initial={{ opacity: 0, ...motionConfig.initial }}
//       whileInView={{ opacity: 1, ...motionConfig.animate }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 1 }}
//       className="bg-gray-200   rounded-3xl shadow-xl overflow-hidden p-6"
//     >
//       <motion.div className={`bg-gradient-to-b ${gradient} rounded-xl p-4 mb-4`}>
//         <h3 className="text-lg font-medium text-gray-800 mb-2">{detail.heading}</h3>
//         <Slider {...sliderSettings}>
//           {imageGroups[shapeIndex].map((url, idx) => (
//             <motion.div key={idx}>
//               <img src={url} alt={`Slide ${idx + 1}`} className="w-full h-56 object-cover rounded-xl shadow " />
//             </motion.div>
//           ))}
//         </Slider>
//       </motion.div>

//       <motion.h2
//         className={`text-2xl font-bold mb-2  ${textColor}`}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {detail.heading} <span className="text-black">Project</span>
//       </motion.h2>

//       <motion.p
//         className="text-base mb-4"
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {detail.description}
//       </motion.p>

//       <motion.ul
//         className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {detail.features.map((item, idx) => (
//           <li key={idx}>{item}</li>
//         ))}
//       </motion.ul>

//       <motion.div
//         className="flex flex-wrap gap-2 mb-4"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         {detail.tech.map((tech, i) => (
//           <span key={i} className={`px-3 py-1 text-xs rounded-full font-semibold shadow ${accentBg} ${accentText}`}>
//             {tech}
//           </span>
//         ))}
//       </motion.div>

//       <motion.a
//         href="https://github.com/yourusername/project"
//         target="_blank"
//         rel="noopener noreferrer"
//         className={`inline-flex items-center gap-2 ${textColor} font-semibold hover:underline`}
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <FaGithub className="text-xl" /> View on GitHub
//       </motion.a>
//     </motion.div>
//   );
// };


// const CuratedWorkGallery = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <motion.h1
//         className="text-4xl font-bold text-center mb-12 text-purple-700"
//         initial={{ y: -100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1 }}
//       >
//         Curated Projects
//       </motion.h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {projectConfigs.map((config, index) => (
//           <CuratedWork key={index} config={config} shapeIndex={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CuratedWorkGallery;

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Slider from "react-slick";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Project configurations
const projectConfigs = [
  { gradient: "from-red-400 via-orange-300 to-white", textColor: "text-red-700", accentBg: "bg-red-100", accentText: "text-red-800", motion: { initial: { x: -100 }, animate: { x: 0 } } },
  { gradient: "from-green-400 via-lime-300 to-white", textColor: "text-green-700", accentBg: "bg-green-100", accentText: "text-green-800", motion: { initial: { y: 100 }, animate: { y: 0 } } },
  { gradient: "from-blue-400 via-sky-300 to-white", textColor: "text-blue-700", accentBg: "bg-blue-100", accentText: "text-blue-800", motion: { initial: { scale: 0.5 }, animate: { scale: 1 } } },
  { gradient: "from-pink-400 via-pink-200 to-white", textColor: "text-pink-700", accentBg: "bg-pink-100", accentText: "text-pink-800", motion: { initial: { y: -80 }, animate: { y: 0 } } },
  { gradient: "from-yellow-300 via-yellow-100 to-white", textColor: "text-yellow-700", accentBg: "bg-yellow-100", accentText: "text-yellow-800", motion: { initial: { x: 100 }, animate: { x: 0 } } },
  { gradient: "from-teal-400 via-cyan-200 to-white", textColor: "text-teal-700", accentBg: "bg-teal-100", accentText: "text-teal-800", motion: { initial: { rotate: 5 }, animate: { rotate: 0 } } },
];

// Images for each project
const imageGroups = [
  ["/src/assets/uyir1.jpg", "/src/assets/uyir2.jpeg", "/src/assets/uyir3.jpg"],
  ["/src/assets/blood1.jpg", "/src/assets/Blood2.jpg", "/src/assets/Blood3.jpg"],
  ["/src/assets/Rail3.jpg", "/src/assets/Rail1.jpg", "/src/assets/rail2.jpg"],
  ["/src/assets/f1.jpg", "/src/assets/f2.jpg", "/src/assets/f3.jpg"],
  ["/src/assets/ecom1.jpg", "/src/assets/ecom2.jpg", "/src/assets/ecom3.jpg"],
  ["/src/assets/intern1.png", "/src/assets/intern 3.jpg", "/src/assets/intern2.jpg"],
];

// Project details
const projectDetails = [
  {
    heading: "Passenger Safety At Bus Stop",
    description: "Real-time bus tracking system ensuring precise bus alignment at stops.",
    features: ["📡 Smart Passenger Info", "🤖 Arrival Timings", "📲 Data Collection"],
    tech: ["Windows", "Arduino IDE", "ESP 32", "LCD Display", "RFID Reader", "IR Sensor", "C++"],
  },
  {
    heading: "Blood Donation",
    description: "Connect donors with recipients via a real-time platform.",
    features: ["🌾 Plasma Requests", "🚀 Donor Registration", "📈 Activity Monitoring"],
    tech: ["React", "Tailwind", "Bootstrap", "Firebase", "REST API"],
  },
  {
    heading: "AI Complaint System - Railways",
    description: "AI-powered complaint resolution for faster service in railways.",
    features: ["🔋 Image Analysis", "📊 AI Chatbots", "💡 Complaint Dashboard"],
    tech: ["HTML", "CSS", "JS", "Bootstrap", "Python", "NLP Libraries"],
  },
  {
    heading: "Food Delivery Website",
    description: "Delectable menu with a seamless ordering experience.",
    features: ["🚦 Order Tracking", "📹 Experience Dining", "📍 Variety of Dishes"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Axios"],
  },
  {
    heading: "E-commerce Platform",
    description: "Modern online shopping experience with admin panel.",
    features: ["🌪️ User Registration", "📢 Login System", "🧑‍🦯 Admin Product Management"],
    tech: ["React", "Firebase", "Tailwind CSS", "Redux Toolkit", "Node.js"],
  },
  {
    heading: "Internship Projects",
    description: "Developed portals for jobs, cars, and cosmetics using PHP stack.",
    features: ["👁️ High Performance", "📚 Advanced Search", "🔐 Role-based Access"],
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "XAMPP"],
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

// Component for each project card
const CuratedWork = ({ config, shapeIndex }) => {
  const { gradient, textColor, accentBg, accentText, motion: motionConfig } = config;
  const detail = projectDetails[shapeIndex];

  return (
    <motion.div
      initial={{ opacity: 0, ...motionConfig.initial }}
      whileInView={{ opacity: 1, ...motionConfig.animate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="bg-gray-200 rounded-3xl shadow-xl overflow-hidden p-6"
    >
      <motion.div className={`bg-gradient-to-b ${gradient} rounded-xl p-4 mb-4`}>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{detail.heading}</h3>
        <div className="overflow-hidden rounded-xl">
          <Slider {...sliderSettings}>
            {imageGroups[shapeIndex].map((url, idx) => (
              <motion.div key={idx}>
                <img
                  src={url}
                  alt={`Slide ${idx + 1}`}
                  className="w-full max-w-full h-48 sm:h-56 object-cover rounded-xl shadow"
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>

      <motion.h2
        className={`text-2xl md:text-3xl font-bold mb-2 ${textColor}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {detail.heading} <span className="text-black">Project</span>
      </motion.h2>

      <motion.p
        className="text-base mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {detail.description}
      </motion.p>

      <motion.ul
        className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {detail.features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </motion.ul>

      <motion.div
        className="flex flex-wrap gap-2 mb-4 break-words max-w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {detail.tech.map((tech, i) => (
          <span key={i} className={`px-3 py-1 text-xs rounded-full font-semibold shadow ${accentBg} ${accentText}`}>
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/gowtham1007"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${textColor} font-semibold hover:underline`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FaGithub className="text-xl" /> View on GitHub
      </motion.a>
    </motion.div>
  );
};

// Gallery section
const CuratedWorkGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 text-purple-700"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Curated Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectConfigs.map((config, index) => (
          <CuratedWork key={index} config={config} shapeIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default CuratedWorkGallery;
