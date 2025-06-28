// import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-900 overflow-hidden flex flex-col items-center justify-center px-6 py-20">

//       {/* Animated Background Corners */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//         className="absolute top-0 left-0 w-64 h-64 bg-purple-700 opacity-10 rounded-tr-full shadow-2xl"
//       />
//       <motion.div
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ repeat: Infinity, duration: 10 }}
//         className="absolute top-0 right-0 w-48 h-48 bg-purple-300 opacity-10 rounded-bl-full shadow-2xl"
//       />
//       <motion.div
//         animate={{ x: [0, 10, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 15 }}
//         className="absolute bottom-0 left-0 w-72 h-72 bg-gray-300 opacity-10 rounded-tr-full shadow-xl"
//       />
//       <motion.div
//         animate={{ y: [0, -20, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 18 }}
//         className="absolute bottom-0 right-0 w-60 h-60 bg-gray-400 opacity-10 rounded-tl-full shadow-xl"
//       />

//       {/* Experience Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 1 }}
//         className="max-w-5xl w-full z-10"
//       >
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2 }}
//           className="text-5xl md:text-6xl font-bold text-center text-purple-700 mb-16 font-sans tracking-tight drop-shadow-md"
//         >
//           Work Experience
//         </motion.h2>

//         {/* Project Trainee */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2 }}
//           className="mb-16"
//         >
//           {/* Added logo */}
//           <div className="flex items-center gap-4 mb-4">
//             <img
//               src="data:image/jpeg;base64,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"
//               alt="KS Globals Logo"
//               className="w-24 h-24 object-contain"
//             />
//           </div>

//           <h3 className="text-3xl font-semibold text-gray-800 font-mono">
//             Project Trainee – Fullstack Developer - KS Globals
//           </h3>
//           <p className="text-sm text-gray-600 italic">October 2024 - May 2025</p>
//           <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//             Assisted in development and testing of web projects, collaborating
//             with senior developers to troubleshoot and implement solutions.
//             Gained proficiency in:
//           </p>
//           <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1">
//             <li>HTML, CSS, JavaScript, React.js, Redux, Node.js</li>
//             <li>Strapi, Firebase, Excel/VS Code</li>
//             <li>Canva, GitHub</li>
//           </ul>
//         </motion.div>

//         {/* Campus Executive */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, delay: 0.3 }}
//         >
//           <div className="flex items-center gap-4 mb-4">
           
//             <img
//               src="data:image/png;base64,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"
//               alt="KANALABS Logo"
//               className="w-24 h-24 object-contain"
//             />
//           </div>
//           <h3 className="text-3xl font-semibold text-gray-800 font-mono">
//             Campus Executive – KANALABS
//           </h3>
//           <p className="text-sm text-gray-600 italic">June 2023 - June 2024</p>
//           <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//             Organized three major promotional events attracting 500+ students,
//             promoted student engagement in co-curriculars through leadership and
//             public speaking.
//           </p>
//           <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1">
//             <li>Event coordination and planning</li>
//             <li>Community outreach and engagement strategies</li>
//           </ul>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Experience;



// Experience.tsx
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Stars radius={100} depth={50} count={5000} factor={4} fade />
    <OrbitControls autoRotate enableZoom={false} enablePan={false} />
  </>
);

const Experience = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-200 text-gray-900 overflow-hidden flex flex-col items-center justify-center px-6 py-20">

      {/* Three.js Animated Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      {/* Animated Background Corners */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute top-0 left-0 w-64 h-64 bg-purple-700 opacity-10 rounded-tr-full shadow-2xl z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-0 right-0 w-48 h-48 bg-purple-300 opacity-10 rounded-bl-full shadow-2xl z-10"
      />
      <motion.div
        animate={{ x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-gray-300 opacity-10 rounded-tr-full shadow-xl z-10"
      />
      <motion.div
        animate={{ y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 18 }}
        className="absolute bottom-0 right-0 w-60 h-60 bg-gray-400 opacity-10 rounded-tl-full shadow-xl z-10"
      />

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full z-20"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-bold text-center text-purple-700 mb-16 font-heading tracking-tight drop-shadow-md"
        >
          Work Experience
        </motion.h2>

        {/* Project Trainee */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALwAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUDAf/EAEAQAAEDAwMCAggEAgYLAAAAAAEAAgMEBREGEiExQRNRBxQiYXGBkaEyQlKxI9EVJDZzksEWFzNTYmN0suHw8f/EABgBAQEBAQEAAAAAAAAAAAAAAAAFBAED/8QAIREBAAMBAAIBBQEAAAAAAAAAAAECAwQREiEFEyIxUZH/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEXzK+Z4QZIvMSAkgOBcOoC+l+MknAQZovMO3dHD5LLJQZIsN3OO+FkEH1ERAREQEREBERAREQEREBERAREQEPRfFiTxjIQQ28aunirZIKFjAyJxaXvGdx92Oy6Fjvct6oqmIBsVWxvHlznBHzUU1JZqm31cs3hufSySEtlaOmT0P1P2+CkOjbTUULZ6usZ4T5GtDWE8gZJyf5LsTK10YcsckTSfl5WGhrYrq1zoZogw/xC4YB/n91ztb3Kd9ydReI9sLGN9jPDic8+9TmqrYKSnfPVTMZCwFznHsFFq3T8+o5XXGoe6iL27YITHlwZ2c8ce0cnjtx3Wn7kXv7WjwwcE546e2v6cbR9xqIbxBTskJhnJa6MnI6Hke/j6KwLrV+pW6oqQAXRsJDT3Pb7ri6e0tBaJ/WJZjUVABDXFu1rfgMnn6roXmbxYnW+Fni1FSwtDT0Y3oXuPYD7novO3rN48fp3v2z119s4QN90uL5/GdWTb854eQM/AcKfacr5Ljao5pyPFBLHkdyO6jc2kZofafWwthHLnlpyB346fddS23i1UEUdHAZGxM4Ejh1PXnv9lt6pz2pH2Y/wAYscdb+ZiEmUd1zfKvT9hdXUTIXzCVjMTAkcnyByu8yQOaHtdlpGVDvSz/AGPf/wBRF+6mOsPR5q646lnr47jHSR+rNjLfAY5udxd1y4/pUj1DfKSwW59dXSYYOGMb+KR36Wj/ANwAVV/owutJZKe+19fLsijZC0Bo5e728NaO7vd8+i5NXU3fX2o2CJnJJEcQOWUzOMkn6ZPUnA8gglen9car1FdBR0FHbWMzufK6KRwhZ5k7xk+Q7/tItZa3p9NbKdkXrVc9u7wgdrWt55J+XRdXTNgo9PW5tJSNy4ndLMR7UrvMqnPSNHNHrK5iZuHvcx7SR+JmxuMfD9wUG/N6UNRPeXNNFEB+VsBx9SSupYvShdJq2CmrqCCq8V7Y2im9h+ScdCSD8OFItKaw0uy2QUkE0VtMbAHQzjYAR1y8+yfjlSEWmy11ZS3WOmpJZ4nboqmLHXGOo/F365wg6yIiAiIgIiICIiDVrpnQUskjOoHCj7KydjxIJHkjqHHqpM9jXsLHDLT1C0WWqnbIH+04Do0u4U3sw20vE0t4hpx0pWsxaGtqLmxvcf1xE/42qJ+km51MdRTW+N744DH4km04D+cAfLHT3rsa1vdLT0clC14fVO2kxt/IAQck9un7fFYVMFo1xQAxzvjqIOOmHRk+Y7g4+x5Vbm0pXSPdpwpOda63r+PmVf2OUR3egAYHNNTGS3tkkDKumolEFNJKW5DGFxA74GVBYfR9JRbammuPiVkLw+LfFiMkcgOAycdsgqR0mpKCSmcy4yR0NRF7M9PUPDTGfn1aex7hauq1NbROcOd+ld7RbJDqm6V1VN48lRMHHkNZIQG+4BSrRb/Ho6mSTL5zMA+Vxy5wwMDJ8srmx6epbi4y2m5wS027HskP2+7IPK6tqidYXGlqS0wTv3R1GMDdgDaR26cFe3TplbKK5x8odK6Uv+bc1LHJJaZRECXAgkDyzyoMNwPY89cKyzJGTt3NJPbzXPqKaipZGzClidI4/i2jgrLl2V58594+Fnl764Umvjy9LHFLFa6dsxO4MHB7KOeln+x7/wC/j/dS6B4lia4DAcM4UQ9LRxpF4P8Av4+/vWWbe35QxWt72myobTbKu818VDQRGSaV2cfla3uXH9Pv79OvB6MUl10TqQ4Gypp3bXszhk0Z7Z7tOBjy+IUs9CzR63dz/wAuENPzepZrrSseo7fvhDWXGAEwPI/Fn8jvcfsTnpkE47FkvFLfLZFXULsxSDDgerHd2kdiP/I4wtbUemrXqGENuMTvEYMMmidtkZk9j3HuIIVQ6M1JUaUvD2VbXimkfsq6cj2oyD+IDzbjHv6dcFdnV9Zqik1FNeaI1EdC9jfVp6b+LC6IfhJ4I5yT7Q/MccINu4+iacbn2y6ROA/CyqjLcfFzf5KHNfedHXuRkb30tZFtL2Ndujl75OOoIPx69Cu7H6VL+1mwi2vd+p0Tgfs8D7Ll0ltv2trs6ocx73SkCSqczbFGAMccAceQ5/dBeNprhcbVR14bsbUwMl2+W5oP+a3VqW6kit1DTUcGRFTxNiYD1w0Y/wAltoCIiAiIgIiIPi+EcYWSIKa1XDNT3+rE/BfL4jSRwW8dPt9F1/RvTzyXaWdoPq7Ii1zuznEg4+g/bzViVlvo65gZWU0U7QcgSMDh91nDTQ08Qjp4mRsb0awYAXjGXi/ss6/Vpvy/Y9fn+vhlhEgiMjdx6DPKp70lyP8A9KZGvbtxCzZ/xN5yfrn6KwZ6Kp9bf7Di4v3B/ZbV/wBNW7UEEYuDHCVgwyaM7Xt/n81u4OiuOvtePhG+mdtq62m9VW+j6rni1ZRR0xOJdzJG/qYGu6/MA/8A1W5qDH9DVeW5/hEY/wA1zdP6as2nJCad2aiTjxJ3gvI8gOn0AW9cZnVjnW6kDXOkb/GkxkRMPHzJ7D59lo696bbxesfD2+odFN7TNP4r7bznv591PdOyvrrRE6qG8tcW5P5gD1WmNIU24H1qfZ3Hs5+uFIaanipYWQwt2xsGGgHoFzs6MtqRWISeXDSszN3oGgDAGE7E8eazUK9IdbWufaLHb5jTvus5ZJOw8tjbt3Y/xZ+SnxHhvSn+kaAVJpjWUwqTx4Xit3/TOVnPUwU0JlqZooohwXyODRz7yoy30d6XZQinfb92G8zOldvJ/VkHr38lytbQUcHoufT26rNbSxmNrJ3SiUyYk5O7vznp07dF11YIAcAQcg85XlPPDTxGSoljiiH5nkNA+JKUQ/qUH92P2VeaftkOu7jX3m+ufPR09U6Cko9xDWAAHJx3wR9/cgnsDqCuHjU5pajBwZI9r+fisqmvoaRwZV1dPA5wJDZZWtyPmVA9X6dg0pSN1HpjNFPTPYJoWvJjmY5wbggnzI+We+Fq64qrTPqjTldeWB1skpHPkaWl3Dmkt6c9S3ogsaluFHVucKSrgnLc58KQOx8cLaLsAkkYHOT0VPPdpqu1JZRoxvq9VHVNdNMXOjZ4Y6jDupI446jj4Tf0iXSWksXqNEf6/dJBSwNB59rhx+nGe2QUEkpayCqYZKaeKePON0Tg4A/JHVcDJ2076iNs7xlkZcNzvgO/RQXSkB0nq2bTjpC+iroGz0r3d5WjD/mdpPu2t81sX0D/AFraaOOfVpv+yRBN93mfstV10oGVHqzq6lFR3iMzQ76Lyv8AFVzWWujtri2rdA9sO1207yOMHtyqqsMejGUDbbqi3z0NzBPiSz727nEnBBBwMDHUAcd0FyglFpWalp6K10lLRSeJTRxtax5O7ePPPfKIN9ERAREQYYHVeVVI6OmkkYC5zWFzR54C98BC0EYwkfEuTHmFWyyOnf40ry97+S4jJUt0W7NvmG3AbKR8eAvSp0tSSzl8cksQccljCOvuXXoKOGhpxDAMMBz55KodPTlfL1rCXy8mue3taWzgIskU9VFF9bafqL1TUlTbJWxXO3zeNTPd0J4y0/HAPyUoXwtB6hBB/wDSfUroTSv0fV+ukbSWy/ws467sYx7s/Nc+46euVL6J2WU0xmrWvBMUPtkZm3fYHlWRgeSYCCG23VN2fLSUsulLjDG57I3TPPDASBuPs9OcrSFBfNHXauntNAbpZ62QzOp437ZYHnyHcfI9B0xzPyARhMAdkFeXKLUGtzDQT2ySz2drw+okncPFlxyGtbxj5jHfPGD7asgraHV1iuVBaamtgoqeRpZA3pkFoGfmFPdoTAznugrPUX9OazbR0MOnKi3CKYSOrKl4BiHT2eB5jp5dFvXGyV2qNYzyVL6+3UFuiEdLNEfDdI9x5c0ke4jI8mqfbR5JgZB8kFb6k0ZX0dNFdbZdLrc7jQStlgiq5vF4yM7RjvxkdwCF66kkuY1VYb9SWWtqWQ0ji+FjPaYXtcNp8iNysMtBGMJgIIgy/X+7UlZFQ2Ke3VjIt0L63/ZuduGW9OuM4XHvV11DebXPaqvRk3rkrfDbP4gMUbiPxtdjAweevzVj4CbR5IONpG2TWbTtDQVcgfNCzDyOgJOdo9wzhF2cDyRB9REQEREBERBiBgd0x7lkvmEH1ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
              alt="KS Globals Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 font-heading">
            Project Trainee – Fullstack Developer - KS Globals
          </h3>
          <p className="text-sm text-gray-600 italic font-paragraph">
            October 2024 - May 2025
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed font-paragraph">
            Assisted in development and testing of web projects, collaborating
            with senior developers to troubleshoot and implement solutions.
            Gained proficiency in:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 font-paragraph">
            <li>HTML, CSS, JavaScript, React.js, Redux, Node.js</li>
            <li>Strapi, Firebase, Excel/VS Code</li>
            <li>Canva, GitHub</li>
          </ul>
        </motion.div>


 {/* Project Trainee */}
        <motion.div
         initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
            src="data:image/jpeg;base64,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"
              alt="ATS"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 font-heading">
            Intern – Fullstack Developer - Accent Techo soft
          </h3>
          <p className="text-sm text-gray-600 italic font-paragraph">
           07/July/2024 - 24/July/2024
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed font-paragraph">
            Assisted in web development and testing of web projects, collaborating
            with senior developers to troubleshoot and implement solutions.
            Gained proficiency in:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 font-paragraph">
            <li>HTML, CSS, JavaScript, Bootstrap</li>
            <li>Mysql,Apache</li>
           

          </ul>
        </motion.div>


        {/* Campus Executive */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src="data:image/jpeg;base64,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"
              alt="KANALABS Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 font-heading">
            Campus Executive – KANALABS
          </h3>
          <p className="text-sm text-gray-600 italic font-paragraph">
            June 2023 - June 2024
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed font-paragraph">
            Organized three major promotional events attracting 500+ students,
            promoted student engagement in co-curriculars through leadership and
            public speaking.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-800 space-y-1 font-paragraph">
            <li>Event coordination and planning</li>
            <li>Community outreach and engagement strategies</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
