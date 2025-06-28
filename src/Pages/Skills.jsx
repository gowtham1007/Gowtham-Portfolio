


// import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// // Sample logos with emojis (replace with icons/images)
// const techStack = [
//   { name: "Figma", icon: "🎨" },
//   { name: "React", icon: "⚛️" },
//   { name: "Node.js", icon: "🟢" },
//   { name: "Tailwind", icon: "💨" },
//   { name: "JavaScript", icon: "📜" },
//   { name: "XD", icon: "🖌️" },
//   { name: "Next.js", icon: "⛳" },
//   { name: "AI", icon: "🧠" },
//   { name: "Express", icon: "🚂" },
//   { name: "MongoDB", icon: "🍃" }
// ];

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: 4,
//   slidesToScroll: 2,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: { slidesToShow: 3 }
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 2 }
//     },
//     {
//       breakpoint: 480,
//       settings: { slidesToShow: 1 }
//     }
//   ]
// };

// const TechOrbit = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden flex flex-col items-center justify-center px-4 py-16">
      
//       {/* Central Glowing Orb with Three.js */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] -z-10 opacity-60">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[2, 5, 2]} />
//           <OrbitControls enableZoom={false} autoRotate />
//           <Sphere args={[1, 100, 200]} scale={2.5}>
//             <MeshDistortMaterial
//               color="#8b5cf6" // Purple glow
//               distort={0.4}
//               speed={2}
//               roughness={0.1}
//               emissive="#c084fc"
//               emissiveIntensity={0.6}
//             />
//           </Sphere>
//         </Canvas>
//       </div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, y: -60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//           I’m currently looking to join a{" "}
//           <span className="text-purple-600">cross-functional</span> team
//         </h1>
//         <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
//           that values improving people’s lives through accessible design
//         </p>
//       </motion.div>

//       {/* Orbiting Skills */}
//       <div className="relative flex flex-wrap gap-6 justify-center items-center mb-16">
//         {techStack.map((tech, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="rounded-full w-20 h-20 bg-white border-2 border-purple-200 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition duration-500"
//           >
//             <div className="text-2xl">{tech.icon}</div>
//             <div className="text-xs mt-1 text-purple-600 font-semibold">{tech.name}</div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Carousel for More Skills */}
//       <div className="w-full max-w-5xl z-10">
//         <Slider {...sliderSettings}>
//           {techStack.map((tech, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.1 }}
//               className="px-4"
//             >
//               <div className="bg-white rounded-full shadow-md border border-purple-300 p-6 text-center">
//                 <div className="text-3xl mb-2">{tech.icon}</div>
//                 <p className="text-sm font-medium text-gray-700">{tech.name}</p>
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default TechOrbit;



// import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';

// // Sample icons (replace with real icons / images)
// const skills = [
//     { name: "Figma", icon: "🎨" },
//     { name: "ReactJS", icon: "⚛️" },
//     { name: "NodeJS", icon: "🟢" },
//     { name: "Tailwind", icon: "💨" },
//     { name: "JS", icon: "🟡" },
//     { name: "XD", icon: "✏️" },
//     { name: "NextJS", icon: "⛳" },
//     { name: "AI", icon: "🎭" },
//     { name: "Express", icon: "🚂" },
// ];

// const SkillsPurpleCloud = () => {

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 2,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: { slidesToShow: 4 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: { slidesToShow: 3 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 2 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: { slidesToShow: 1 }
//             }
//         ]
//     };

//     return (
//         <div className="relative py-20 px-6 bg-gradient-to-br from-whitee-300 to-gray-900 min-h-screen flex flex-col items-center justify-center overflow-hidden text-gray-700">
            
//             {/* 3D Purple Glow Background */}
//             <div className="absolute inset-0 -z-10 opacity-30">
//                 <Canvas>
//                     <ambientLight intensity={0.6} />
//                     <directionalLight position={[2, 5, 2]} />
//                     <OrbitControls enableZoom={false} autoRotate />
//                     <Sphere args={[1, 100, 200]} scale={4}>
//                         <MeshDistortMaterial
//                             color="#8B5CF6" // purple
//                             distort={0.6}
//                             speed={2}
//                             roughness={0}
//                         />
//                     </Sphere>
//                 </Canvas>
//             </div>

//             {/* Title */}
//             <motion.h1
//                 className="text-4xl md:text-6xl font-extrabold text-center mb-4"
//                 initial={{ opacity: 0, y: -60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//             >
//                 I'm currently looking to join a <span className="text-purple-400 underline">cross-functional</span> team
//             </motion.h1>

//             <motion.p
//                 className="text-lg text-center text-gray-900 max-w-2xl mb-12"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.2 }}
//             >
//                 that values improving people’s lives through accessible design
//             </motion.p>

//             {/* Skill Icons - Carousel */}
//             <div className="w-full max-w-5xl mb-16">
//                 <Slider {...sliderSettings}>
//                     {skills.map((skill, index) => (
//                         <motion.div
//                             key={index}
//                             className="p-4"
//                             whileHover={{ scale: 1.2, rotate: 10 }}
//                             whileTap={{ scale: 0.95 }}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                         >
//                             <div className="rounded-full w-24 h-24 flex items-center justify-center border-3 border-purple-600 bg-gray-300 shadow-lg mx-auto hover:bg-purple-800 transition duration-500">
//                                 <div className="text-2xl">{skill.icon}</div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </Slider>
//             </div>

//             {/* Center Glowing Icon */}
//             <motion.div
//                 className="rounded-full w-48 h-48 bg-gray-200 shadow-2xl flex items-center justify-center text-6xl border-5 border-purple-500 relative z-10"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 1, delay: 1 }}
//             >
//                 Skills
//             </motion.div>

//             {/* Glowing Rings */}
//             <motion.div
//                 className="absolute border border-red-600 rounded-full w-[600px] h-[600px] opacity-20 animate-pulse"
//                 style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//             />
//             <motion.div
//                 className="absolute border border-red-600 rounded-full w-[800px] h-[800px] opacity-10 animate-pulse"
//                 style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//             />
//             <motion.div
//                 className="absolute border border-red-600 rounded-full w-[1000px] h-[1000px] opacity-5 animate-pulse"
//                 style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//             />
//         </div>
//     );
// };

// export default SkillsPurpleCloud;



import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const techStack = [
    
{ name: "Html", imgUrl:  "data:image/png;base64,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" },
{ name: "React", imgUrl: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
{ name: "React vite", imgUrl: "https://media.licdn.com/dms/image/v2/D4D12AQFZkbeVaofxzQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1708033784779?e=2147483647&v=beta&t=TiTmdsfykZ1prp3uYoNpkKbniJH9PzomSvD-0eco9WQ" },
{ name: "Css", imgUrl: "data:image/png;base64,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" },
  { name: "JavaScript", imgUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
   { name: "node.js", imgUrl: "data:image/png;base64,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" },
  { name: "Tailwind", imgUrl: "data:image/png;base64,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" },
  { name: "Redux", imgUrl: "data:image/png;base64,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" },
  { name: "Bootstarp", imgUrl: "data:image/jpeg;base64,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" },
  { name: "Motion", imgUrl: "data:image/png;base64,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" },
{ name: "REST API ", imgUrl: "data:image/png;base64,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" },
{ name: "mysql", imgUrl: "data:image/png;base64,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" },
{ name: "Firebase", imgUrl: "data:image/png;base64,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" },
{ name: "Python", imgUrl: "data:image/jpeg;base64,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" },
{ name: "GitHub", imgUrl: "data:image/png;base64,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" },
{ name: "Excel", imgUrl: "data:image/jpeg;base64,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" },
{ name: "Tableau", imgUrl: "data:image/png;base64,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" },
{ name: "Figma", imgUrl: "data:image/png;base64,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" },






];

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
};

const TechOrbit = () => {
  const controls = useAnimation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2 } // slower open
    }).then(() => {
      setShowContent(true);
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }} // full page slow open
      className="relative min-h-screen bg-gradient-to-b from-gray-300 via-white to-gray-300 overflow-hidden flex flex-col items-center justify-center px-4 py-16"
    >

      {/* Central Glowing Orb */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[320px] h-[320px] -z-10 opacity-70"
      >
        <Canvas>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 2]} />
          <OrbitControls enableZoom={false} autoRotate />
          <Sphere args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial
              color="#B0BEC5"
              distort={0.5}
              speed={1.5}
              roughness={0.2}
              emissive="#ECEFF1"
              emissiveIntensity={0.7}
            />
          </Sphere>
        </Canvas>
      </motion.div>
<motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }} // triggers once, halfway into viewport
        className="text-center mb-6"
      >
        <h2 className="text-xl md:text-5xl font-bold text-purple-600 tracking-wide uppercase">
          Skills
        </h2>
      </motion.div>

      {/* Section Title & Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          I’m currently looking to join a{" "}
          <span className="text-purple-600">cross-functional</span> team
        </h1>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          that values improving people’s lives through accessible design
        </p>
      </motion.div>

      {/* Big Image Boxes */}
      {showContent && (
  <div className="relative w-full max-w-6xl mx-auto mb-14 space-y-4">

    {/* Row 1 - 6 items */}
    <div className="flex justify-center flex-wrap gap-4 ">
      {techStack.slice(0, 6).map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-purple-400 shadow-lg hover:scale-105 hover:border-purple-600 transition-all duration-500"
        >
          <img
            src={tech.imgUrl}
            alt={tech.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>

    {/* Row 2 - 12 items */}
    <div className="flex justify-center flex-wrap gap-6 py-2">
      {techStack.slice(6, 18).map((tech, index) => (
        <motion.div
          key={index + 6}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-purple-400 shadow-lg hover:scale-105 hover:border-purple-600 transition-all duration-500"
        >
          <img
            src={tech.imgUrl}
            alt={tech.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>

  </div>
)}

      {/* Carousel */}
      
      {showContent && (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-4 py-10 z-10 "
      >
        <Slider {...sliderSettings}>
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group px-28"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 border-[3px] border-purple-500 bg-white/20 backdrop-blur-xl rounded-xl shadow-xl transition-all duration-500 group-hover:shadow-purple-400 hover:rotate-1 hover:scale-105 overflow-hidden">
                <motion.img
                  src={tech.imgUrl}
                  alt={tech.name}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105  text-gray-700"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-center mt-2 text-sm font-medium text-gray-700 dark:text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    )
}
    </motion.div>
  );
};

export default TechOrbit;
