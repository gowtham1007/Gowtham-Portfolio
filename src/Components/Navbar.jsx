


// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import Logo from '../assets/name.png';
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsHeroVisible(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     const section = document.querySelector("#hero");
//     if (section) observer.observe(section);
//     return () => section && observer.unobserve(section);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   if (!isHeroVisible) return null;

//   const navItems = [
//     { href: "#hero", label: "Home", glow: "255,255,255" },
//     { href: "#about", label: "About", glow: "0,255,255" },
//     { href: "#experience", label: "Experience", glow: "100,255,255" },
//     { href: "#projects", label: "Projects", glow: "0,200,255" },
//   ];


//   return (
//     <motion.nav
      
//       className="absolute top-0 w-full z-50 bg-gradient-to-r from-purple-800 to-indigo-900 backdrop-blur-md shadow-md"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo with cool hover animation */}
//         <motion.div
//           whileHover={{ scale: 1.1, rotate: 3 }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="cursor-pointer"
//           onClick={(e) => handleLinkClick(e, "#hero")}
//         >
//           <img
//             src={Logo}
//             alt="Gowtham R Logo"
//             className="h-12 w-auto"
//           />
//         </motion.div>

//         {/* Desktop Navigation */}
//         <motion.div
//           className="hidden md:flex space-x-6 text-lg font-medium"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             visible: {
//               transition: {
//                 staggerChildren: 0.15,
//               },
//             },
//           }}
//         >
//           {navItems.map((item) => (
//             <motion.a
//               key={item.href}
//               href={item.href}
//               onClick={(e) => handleLinkClick(e, item.href)}
//               variants={{
//                 hidden: { opacity: 0, y: -10 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               whileHover={{ scale: 1.1 }}
//               className={`relative px-4 py-1 rounded-md text-cyan-300 transition duration-300
//                 hover:text-white hover:border hover:border-cyan-400
//                 hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]`}
//             >
//               {item.label}
//             </motion.a>
//           ))}
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.1 }}
//             className="ml-4 px-4 py-1 rounded-md bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md transition duration-300"
//           >
//             Contact
//           </motion.a>
//         </motion.div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden text-white mt-2">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={34} /> : <Menu size={34} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             key="mobileMenu"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="md:hidden flex flex-col items-center bg-gradient-to-r from-purple-800 to-indigo-900 overflow-hidden py-6 space-y-4"
//           >
//             {navItems.map((item) => (
//               <motion.a
//                 key={item.href}
//                 href={item.href}
//                 onClick={(e) => handleLinkClick(e, item.href)}
//                 whileTap={{ scale: 0.96 }}
//                 className={`w-4/5 text-center px-4 py-3 rounded-xl text-cyan-300 font-medium transition-all duration-300
//                   hover:text-white hover:border hover:border-cyan-400
//                   hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]`}
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//             <motion.a
//               href="#contact"
//               whileTap={{ scale: 0.96 }}
//               className="w-4/5 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md hover:scale-105 transition duration-300"
//             >
//               Contact
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from '../assets/name.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.querySelector("#hero");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  useEffect(() => { 
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (!isHeroVisible) return null;

  const navItems = [
    { href: "#hero", label: "Home", glow: "255,255,255" },
    { href: "#about", label: "About", glow: "0,255,255" },
    { href: "#experience", label: "Experience", glow: "100,255,255" },
    { href: "#projects", label: "Projects", glow: "0,200,255" },
  ];

  return (
    <motion.nav className="absolute top-0 w-full z-50 bg-gradient-to-r from-purple-800 to-indigo-900 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
          onClick={(e) => handleLinkClick(e, "#hero")}
        >
          <img
            src={Logo}
            alt="Gowtham R Logo"
            className="h-12 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-6 text-lg font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              className={`relative px-4 py-1 rounded-md text-cyan-300 transition duration-300
                hover:text-white hover:border hover:border-cyan-400
                hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]`}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="ml-4 px-4 py-1 rounded-md bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md transition duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white mt-2">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
              hidden: {},
            }}
            className="md:hidden flex flex-col items-center bg-gradient-to-r from-purple-800 to-indigo-900 overflow-hidden py-6 space-y-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.05 }}
                className={`w-4/5 text-center px-4 py-3 rounded-xl text-cyan-300 font-medium transition-all duration-300
                  hover:text-white hover:border hover:border-cyan-400
                  hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.05 }}
              className="w-4/5 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md hover:scale-105 transition duration-300"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
