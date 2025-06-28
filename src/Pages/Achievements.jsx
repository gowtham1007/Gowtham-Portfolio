// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { motion } from 'framer-motion';
// // import { useEffect, useRef, useState } from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick-theme.css';
// // import 'slick-carousel/slick/slick.css';
// // import * as THREE from 'three';

// // const achievements = [
// //   {
// //     title: 'Hackathon Finalist And Participation',
// //     description: 'Won first place in a national-level hackathon.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Hackathon+1',
// //       'https://via.placeholder.com/300x200?text=Hackathon+2',
// //       'https://via.placeholder.com/300x200?text=Hackathon+3'
// //     ]
// //   },
// //   {
// //     title: 'Robotics Champion',
// //     description: 'Led a robotics team to victory at a regional competition.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Robotics+1',
// //       'https://via.placeholder.com/300x200?text=Robotics+2'
// //     ]
// //   },
// //   {
// //     title: 'Tech Talk Speaker',
// //     description: 'Spoke at a major conference on modern JavaScript frameworks.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Talk+1',
// //       'https://via.placeholder.com/300x200?text=Talk+2'
// //     ]
// //   },
// //   {
// //     title: 'Open Source Contributor',
// //     description: 'Contributed to multiple open-source projects on GitHub.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Open+Source+1',
// //       'https://via.placeholder.com/300x200?text=Open+Source+1'
// //     ]
// //   },
// //   {
// //     title: 'Innovation Award',
// //     description: 'Received an award for innovation in AI research.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Innovation+1',
// //       'https://via.placeholder.com/300x200?text=Innovation+2'
// //     ]
// //   },
// //   {
// //     title: 'Community Builder',
// //     description: 'Organized developer meetups and community events.',
// //     images: [
// //       'https://via.placeholder.com/300x200?text=Community+1',
// //       'https://via.placeholder.com/300x200?text=Community+2'
// //     ]
// //   },
// // ];

// // const motions = [
// //   { x: -100, y: 0 },
// //   { x: 100, y: 0 },
// //   { x: 0, y: -100 },
// //   { x: 0, y: 100 },
// //   { x: -50, y: -50 },
// //   { x: 50, y: 50 },
// // ];

// // const cardVariants = {
// //   hidden: (i) => ({
// //     opacity: 0,
// //     x: motions[i % motions.length].x,
// //     y: motions[i % motions.length].y,
// //     scale: 0.9
// //   }),
// //   visible: (i) => ({
// //     opacity: 1,
// //     x: 0,
// //     y: 0,
// //     scale: 1,
// //     transition: {
// //       delay: i * 0.2,
// //       type: 'spring',
// //       stiffness: 80,
// //       damping: 15
// //     }
// //   })
// // };

// // const sliderSettings = {
// //   dots: true,
// //   infinite: true,
// //   speed: 1000,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   autoplay: true,
// //   autoplaySpeed: 3000,
// //   pauseOnHover: true,
// // };

// // function ThreeBackground() {
// //   const mountRef = useRef(null);

// //   useEffect(() => {
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //     const renderer = new THREE.WebGLRenderer({ alpha: true });
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     if (mountRef.current) {
// //       mountRef.current.appendChild(renderer.domElement);
// //     }

// //     const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
// //     const material = new THREE.MeshStandardMaterial({ color: 0x888888, wireframe: true });
// //     const knot = new THREE.Mesh(geometry, material);
// //     scene.add(knot);

// //     const light = new THREE.PointLight(0xffffff, 1);
// //     light.position.set(25, 50, 25);
// //     scene.add(light);

// //     camera.position.z = 40;

// //     const animate = () => {
// //       requestAnimationFrame(animate);
// //       knot.rotation.x += 0.01;
// //       knot.rotation.y += 0.01;
// //       renderer.render(scene, camera);
// //     };
// //     animate();

// //     return () => {
// //       if (mountRef.current && renderer.domElement) {
// //         mountRef.current.removeChild(renderer.domElement);
// //       }
// //     };
// //   }, []);

// //   return <div className="absolute inset-0 -z-10" ref={mountRef}></div>;
// // }

// // export default function AchievementsPage() {
// //   const [isInView, setIsInView] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setIsInView(true), 100);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="relative min-h-screen p-10 bg-gray-100 overflow-hidden">
// //       <ThreeBackground />
// //       <div className="relative z-10">
// //         <h1 className="text-5xl font-bold text-center text-purple-700 mb-16">Achievements</h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
// //           {achievements.map((item, i) => (
// //             <motion.div
// //               key={i}
// //               custom={i}
// //               initial="hidden"
// //               animate={isInView ? 'visible' : 'hidden'}
// //               variants={cardVariants}
// //               className="bg-white rounded-3xl shadow-xl overflow-hidden p-6"
// //             >
// //               <motion.div className="bg-gradient-to-b from-indigo-200 via-white to-white rounded-xl p-4 mb-4">
// //                 <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
// //                 <Slider {...sliderSettings}>
// //                   {item.images.map((img, idx) => (
// //                     <motion.div key={idx}>
// //                       <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-56 object-cover rounded-xl shadow" />
// //                     </motion.div>
// //                   ))}
// //                 </Slider>
// //               </motion.div>
// //               <motion.p
// //                 className="text-base text-gray-600"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.8 }}
// //               >
// //                 {item.description}
// //               </motion.p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import 'bootstrap/dist/css/bootstrap.min.css';
// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
// import * as THREE from 'three';
// import A2 from '../assets/A2.jpeg';
// import A3 from '../assets/A3.jpeg';
// import C1 from '../assets/c1.jpeg';
// import C2 from '../assets/c2.jpeg';
// import C3 from '../assets/c3.jpeg';
// import Ct from '../assets/ct (1).jpeg';
// import Ct1 from '../assets/ct (2).jpeg';
// import Ct2 from '../assets/ct (3).jpeg';
// import Ct3 from '../assets/ct (4).jpeg';
// import Ct4 from '../assets/ct (5).jpeg';
// import Ct5 from '../assets/ct (6).jpeg';
// import Ct6 from '../assets/ct (7).jpeg';
// const achievements = [
//   {
//     title: 'Hackathon Finalist And Participation',
//     description: 'To attending the Hackathon in the event 2 Hackathona as participation ,1 hackathon as 1 place in clg level , 1 has a finalist of hacakathon.',
//     images: [
//       'https://media.licdn.com/dms/image/v2/D5622AQFS9xs6PAbJxg/feedshare-shrink_1280/B56ZTr96MgHQAo-/0/1739125678275?e=1753920000&v=beta&t=23SrVyqpLTVq8TezSMoGA0u17kX7KYuSfj-uis_Fek8',
//       A2,
//       A3
//     ]
//   },
//   {
//     title: 'Oragnising events',
//     description: 'Being a campus executive of company to organisng events in college around 300-400 students',
//     images: [
//       C1,
//       C2,
// C3
//     ]
//   },
//   {
//     title: 'Certifications',
//     description: 'I have completed the certications of course , exams etc around 25 certifications.',
//     images: [
//       'https://media.licdn.com/dms/image/v2/D5622AQFcH2bz975lZg/feedshare-shrink_800/B56Zcm2fpVHEAk-/0/1748703512791?e=1753920000&v=beta&t=Y-mbaXrlfA8uxT98bTLW2PIX4CZWDtNQg6iICY0-vrk',
//       'https://media.licdn.com/dms/image/v2/D5622AQHYW3ZCP2GE2Q/feedshare-shrink_800/feedshare-shrink_800/0/1720034154550?e=1753920000&v=beta&t=eOhXu-mpI_xOZTwsYo2eWNAFz0wNB89qD32GEHiYv5s',
//       'https://media.licdn.com/dms/image/v2/D562DAQEW-L7zf12iHg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1713451061126?e=1751562000&v=beta&t=285H_uwA8x4sF0f1BSyGAbLFVkHNGpjJNLa1j_bokiQ',
//       'https://media.licdn.com/dms/image/v2/D562DAQE9dhl8d7DQng/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1715974669237?e=1751562000&v=beta&t=AsL3Jb0pWW2MEGgIm0ccibzGbcZE9TVmTL5gnNdYrb4',
//       'https://media.licdn.com/dms/image/v2/D562DAQFppCiMZI12TA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1713639284588?e=1751562000&v=beta&t=JiS2_5Un8MMz5BJcYHhpG1DhMnPIjFrc9C4qc6Bk_1U',
//     ]
//   },
//   {
//     title: 'Workshops',
//     description: 'I have Participated  the  workshop and events, etc around 20 certifications.',
//     images: [
//       Ct,
//       Ct1,
//       Ct2,
//       Ct3,
// Ct4,
// Ct5,
// Ct6,
//     ]
//   },
 
// ];

// const motions = [
//   { x: -100, y: 0 },
//   { x: 100, y: 0 },
//   { x: 0, y: -100 },
//   { x: 0, y: 100 },
//   { x: -50, y: -50 },
//   { x: 50, y: 50 },
// ];

// const cardVariants = {
//   hidden: (i) => ({
//     opacity: 0,
//     x: motions[i % motions.length].x,
//     y: motions[i % motions.length].y,
//     scale: 0.9
//   }),
//   visible: (i) => ({
//     opacity: 1,
//     x: 0,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.2,
//       type: 'spring',
//       stiffness: 80,
//       damping: 15
//     }
//   })
// };

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

// function ThreeBackground() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     if (mountRef.current) {
//       mountRef.current.appendChild(renderer.domElement);
//     }

//     const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
//     const material = new THREE.MeshStandardMaterial({ color: 0x888888, wireframe: true });
//     const knot = new THREE.Mesh(geometry, material);
//     scene.add(knot);

//     const light = new THREE.PointLight(0xffffff, 1);
//     light.position.set(25, 50, 25);
//     scene.add(light);

//     camera.position.z = 40;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       knot.rotation.x += 0.01;
//       knot.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div className="absolute inset-0 -z-10" ref={mountRef}></div>;
// }

// export default function AchievementsPage() {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsInView(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-tr from-gray-400 via-white to-gray-400 text-gray-900 overflow-hidden flex flex-col items-center justify-center px-6 py-20">
//       <ThreeBackground />
//       <div className="relative z-10">
//         <motion.h1
//           className="text-5xl font-bold text-center text-purple-700 mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Achievements
//         </motion.h1>
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
//           {achievements.map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               initial="hidden"
//               animate={isInView ? 'visible' : 'hidden'}
//               variants={cardVariants}
//               className="bg-gray-300 rounded-3xl shadow-xl overflow-hidden p-6"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <motion.div
//                 className="bg-gradient-to-b from-indigo-200 via-white to-white rounded-xl p-6 mb-4"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
//                 <Slider {...sliderSettings}>
//                   {item.images.map((img, idx) => (
//                     <motion.div key={idx}>
//                       <img
//                         src={img}
//                         alt={`Slide ${idx + 1}`}
//                         className="w-full h-56 object-cover rounded-xl shadow"
//                       />
//                     </motion.div>
//                   ))}
//                 </Slider>
//               </motion.div>
//               <motion.p
//                 className="text-base text-gray-600"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 {item.description}
//               </motion.p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import * as THREE from 'three';

import A2 from '../assets/A2.jpeg';
import A3 from '../assets/A3.jpeg';
import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
import C3 from '../assets/c3 .jpeg';
import Ct from '../assets/ct (1).jpeg';
import Ct1 from '../assets/ct (2).jpeg';
import Ct2 from '../assets/ct (3).jpeg';
import Ct3 from '../assets/ct (4).jpeg';
import Ct4 from '../assets/ct (5).jpeg';
import Ct5 from '../assets/ct (6).jpeg';
import Ct6 from '../assets/ct (7).jpeg';

const achievements = [
  {
    title: 'Hackathon Finalist And Participation',
    description: 'To attending the Hackathon in the event 2 Hackathona as participation ,1 hackathon as 1 place in clg level , 1 has a finalist of hacakathon.',
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQFS9xs6PAbJxg/feedshare-shrink_1280/B56ZTr96MgHQAo-/0/1739125678275?e=1753920000&v=beta&t=23SrVyqpLTVq8TezSMoGA0u17kX7KYuSfj-uis_Fek8',
      A2,
      A3
    ]
  },
  {
    title: 'Oraganising events',
    description: 'Being a campus executive of company to organisng events in college around 300-400 students',
    images: [C1, C2, C3]
  },
  {
    title: 'Certifications',
    description: 'I have completed the certications of course , exams etc around 25 certifications.',
    images: [
      'https://media.licdn.com/dms/image/v2/D5622AQFcH2bz975lZg/feedshare-shrink_800/B56Zcm2fpVHEAk-/0/1748703512791?e=1753920000&v=beta&t=Y-mbaXrlfA8uxT98bTLW2PIX4CZWDtNQg6iICY0-vrk',
      'https://media.licdn.com/dms/image/v2/D5622AQHYW3ZCP2GE2Q/feedshare-shrink_800/feedshare-shrink_800/0/1720034154550?e=1753920000&v=beta&t=eOhXu-mpI_xOZTwsYo2eWNAFz0wNB89qD32GEHiYv5s',
      'https://media.licdn.com/dms/image/v2/D562DAQEW-L7zf12iHg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1713451061126?e=1751562000&v=beta&t=285H_uwA8x4sF0f1BSyGAbLFVkHNGpjJNLa1j_bokiQ',
      'https://media.licdn.com/dms/image/v2/D562DAQE9dhl8d7DQng/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1715974669237?e=1751562000&v=beta&t=AsL3Jb0pWW2MEGgIm0ccibzGbcZE9TVmTL5gnNdYrb4',
      'https://media.licdn.com/dms/image/v2/D562DAQFppCiMZI12TA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1713639284588?e=1751562000&v=beta&t=JiS2_5Un8MMz5BJcYHhpG1DhMnPIjFrc9C4qc6Bk_1U',
    ]
  },
  {
    title: 'Workshops',
    description: 'I have Participated the workshop and events, etc around 20 certifications.',
    images: [Ct, Ct1, Ct2, Ct3, Ct4, Ct5, Ct6]
  },
];

const motions = [
  { x: -100, y: 0 },
  { x: 100, y: 0 },
  { x: 0, y: -100 },
  { x: 0, y: 100 },
  { x: -50, y: -50 },
  { x: 50, y: 50 },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: motions[i % motions.length].x,
    y: motions[i % motions.length].y,
    scale: 0.9
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  })
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x888888, wireframe: true });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(25, 50, 25);
    scene.add(light);

    camera.position.z = 40;

    const animate = () => {
      requestAnimationFrame(animate);
      knot.rotation.x += 0.01;
      knot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="absolute inset-0 -z-10" ref={mountRef}></div>;
}

export default function AchievementsPage() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-400 via-white to-gray-400 text-gray-900 overflow-hidden flex flex-col items-center justify-center px-6 py-20">
      <ThreeBackground />
      <div className="relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center text-purple-700 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="bg-gray-300 rounded-3xl shadow-xl overflow-hidden p-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="bg-gradient-to-b from-indigo-200 via-white to-white rounded-xl p-6 mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-gray-800 mb-4">{item.title}</h3>
                <Slider {...sliderSettings}>
                  {item.images.map((img, idx) => (
                    <motion.div key={idx} className="flex items-center justify-center">
                      <img
                        src={img}
                        alt={`Slide ${idx + 1}`}
                        className="w-full max-h-[400px] object-contain rounded-xl shadow"
                      />
                    </motion.div>
                  ))}
                </Slider>
              </motion.div>
              <motion.p
                className="text-base text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
