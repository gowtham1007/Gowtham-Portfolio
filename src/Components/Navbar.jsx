
// // import { Menu, X } from "lucide-react";
// // import { useEffect, useState } from "react";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 768) {
// //         setMenuOpen(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const handleLinkClick = (e, id) => {
// //     e.preventDefault();
// //     const section = document.querySelector(id);
// //     if (section) {
// //       section.scrollIntoView({ behavior: "smooth" });
// //     }
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white fixed w-full h-24 shadow-md z-50">
// //       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
// //         <div className="cursor-pointer" onClick={(e) => handleLinkClick(e, "#hero")}>
// //   <img
// //     src="/src/assets/name.png"  // replace with your actual path
// //     alt="Gowtham R Logo"
// //     className="h-12 w-18"
// //   />
// // </div>

// //         {/* Desktop Menu */}
        
// // <div className="hidden md:flex space-x-8 text-lg font-bold">
// //   <a
// //     href="#hero"
// //     onClick={(e) => handleLinkClick(e, "#hero")}
// //     className="relative text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] hover:scale-105"
// //   >
// //     Home
// //   </a>
// //   <a
// //     href="#about"
// //     onClick={(e) => handleLinkClick(e, "#about")}
// //     className="relative text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] hover:scale-105"
// //   >
// //     About
// //   </a>
// //   <a
// //     href="#experience"
// //     onClick={(e) => handleLinkClick(e, "#experience")}
// //     className="relative text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] hover:scale-105"
// //   >
// //     Experience
// //   </a>
// //   <a
// //     href="#projects"
// //     onClick={(e) => handleLinkClick(e, "#projects")}
// //     className="relative text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,0,0.8)] hover:scale-105"
// //   >
// //     Projects
// //   </a>
// //   <a
// //     href="#contact"
// //     onClick={(e) => handleLinkClick(e, "#contact")}
// //     className="relative text-white transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] hover:scale-105"
// //   >
// //     Contact
// //   </a>
// // </div>

// //         {/* Mobile */}
// //         <div className="md:hidden">
// //           <button onClick={() => setMenuOpen(!menuOpen)}>
// //             {menuOpen ? <X size={28} /> : <Menu size={30} />}
// //           </button>
// //         </div>
// //       </div>

// //      <div
// //   className={`md:hidden flex flex-col items-center bg-gradient-to-r from-purple-800 to-indigo-900 transition-all duration-300 overflow-hidden ${
// //     menuOpen ? "max-h-[600px] py-6 space-y-4" : "max-h-0"
// //   }`}
// // >
// //   {[
// //     { href: "#hero", label: "Home" },
// //     { href: "#about", label: "About" },
// //     { href: "#experience", label: "Experience" },
// //     { href: "#projects", label: "Projects" },
// //     { href: "#contact", label: "Contact" },
// //   ].map((item) => (
// //     <a
// //       key={item.href}
// //       href={item.href}
// //       onClick={(e) => handleLinkClick(e, item.href)}
// //       className="w-4/5 text-center px-4 py-3 bg-white/10 text-white rounded-xl shadow-lg border border-white/20 transition-all duration-300 hover:bg-white hover:text-purple-800 hover:scale-105 hover:shadow-purple-400/40"
// //     >
// //       {item.label}
// //     </a>
// //   ))}
// // </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isHeroVisible, setIsHeroVisible] = useState(true);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsHeroVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );

//     const heroSection = document.querySelector("#hero");
//     if (heroSection) {
//       observer.observe(heroSection);
//     }

//     return () => {
//       if (heroSection) {
//         observer.unobserve(heroSection);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   // Hide Navbar when hero is not visible
//   if (!isHeroVisible) return null;

//   return (
//     <nav className="absolute top-0 w-full  z-50 bg-gradient-to-r from-purple-800 to-indigo-900 backdrop-blur-md shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div
//           className="cursor-pointer"
//           onClick={(e) => handleLinkClick(e, "#hero")}
//         >
//           <img
//             src="/src/assets/name.png"
//             alt="Gowtham R Logo"
//             className="h-12 w-auto"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-lg font-medium">
//   {[
//     { href: "#hero", label: "Home", glow: "255,255,255" },
//     { href: "#about", label: "About", glow: "0,255,255" },
//     { href: "#experience", label: "Experience", glow: "100,255,255" },
//     { href: "#projects", label: "Projects", glow: "0,200,255" },
//     // { href: "#contact", label: "Contact", glow: "0,255,255" },
//   ].map((item) => (
//     <a
//       key={item.href}
//       href={item.href}
//       onClick={(e) => handleLinkClick(e, item.href)}
//       className={`relative px-4 py-1 rounded-md text-cyan-300 transition duration-300
//         hover:text-white hover:border hover:border-cyan-400
//         hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]
//         hover:after:content-[''] hover:after:absolute hover:after:-bottom-1
//         hover:after:left-0 hover:after:right-0 hover:after:h-[2px]
//         hover:after:bg-cyan-400`}
//     >
//       {item.label}
//     </a>
//   ))}
//   <a
//     href="#contact"
//     className="ml-4 px-4 py-1 rounded-md bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md hover:scale-105 transition duration-300"
//   >
//     Contact
//   </a>
// </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden text-white mt-2">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={38} /> : <Menu size={38} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//   className={`md:hidden flex flex-col items-center bg-gradient-to-r from-purple-800 to-indigo-900 transition-all duration-300 overflow-hidden ${
//     menuOpen ? "max-h-[600px] py-6 space-y-4" : "max-h-0"
//   }`}
// >
//   {[
//     { href: "#hero", label: "Home", glow: "255,255,255" },
//     { href: "#about", label: "About", glow: "0,255,255" },
//     { href: "#experience", label: "Experience", glow: "255,0,255" },
//     { href: "#projects", label: "Projects", glow: "0,200,255" },
//     // { href: "#contact", label: "Contact", glow: "0,255,0" },
//   ].map((item) => (
//     <a
//       key={item.href}
//       href={item.href}
//       onClick={(e) => handleLinkClick(e, item.href)}
//       className={`w-4/5 text-center px-4 py-3 rounded-xl text-cyan-300 font-medium transition-all duration-300
//         hover:text-white hover:border hover:border-cyan-400
//         hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]
//         hover:after:content-[''] hover:after:block hover:after:mt-1 hover:after:h-[2px] hover:after:bg-cyan-400`}
//     >
//       {item.label}
//     </a>
//   ))}

//   <a
//     href="#contact"
//     className="w-4/5 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#7f00ff] to-[#e100ff] text-white font-semibold shadow-md hover:scale-105 transition duration-300"
//   >
//     Contact
//   </a>
// </div>

//     </nav>
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
    <motion.nav
      
      className="absolute top-0 w-full z-50 bg-gradient-to-r from-purple-800 to-indigo-900 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with cool hover animation */}
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden flex flex-col items-center bg-gradient-to-r from-purple-800 to-indigo-900 overflow-hidden py-6 space-y-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                whileTap={{ scale: 0.96 }}
                className={`w-4/5 text-center px-4 py-3 rounded-xl text-cyan-300 font-medium transition-all duration-300
                  hover:text-white hover:border hover:border-cyan-400
                  hover:drop-shadow-[0_0_10px_rgba(${item.glow},0.8)]`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.96 }}
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
