import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Education = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-gray-300 via-white to-gray-400 text-gray-900 overflow-hidden flex flex-col items-center justify-center px-6 py-20">

      {/* Flowing Background */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-purple-300 opacity-20 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"
      />
      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-gray-400 opacity-20 rounded-full blur-2xl bottom-[-100px] right-[-100px] z-0"
      />

      {/* Education Section */}
      <div className="relative z-10 max-w-4xl w-full">
        <motion.h2
          className="text-5xl font-bold text-center text-purple-700 mb-12 tracking-tight drop-shadow-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          My Education
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-6 items-start"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
        >
          <motion.img
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEBUQEBAVFRUWERkYFRYVGBcWFRYXFREXFxgYGBYaHCggGBolGxkWITEiJSkrLi4uGB8zODMtNygwLisBCgoKDg0OGxAQGi0lICUrNy01LTcrLi02Ny0uKy0tLTAvLS8tLSstLS4tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAEkQAAICAQIDBAYECggDCQAAAAECAAMRBBIFITEGEyJBFDJRYXGBI0Kz0QdSU2JzdJGSk6EVFjNygqPB0qKy8CU1RFSxtNPh8f/EABsBAQACAwEBAAAAAAAAAAAAAAAEBgIDBQEH/8QAMREBAAIBAgIHBwQDAQAAAAAAAAECAwQRBSEGEhQxMjRxExZBUVJyoUKRscEkM/Ai/9oADAMBAAIRAxEAPwD7ZERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETVXidBZlF1ZZebKGGVA9ozy+cDbxGJqDi2m2d4L6tmcF967M+zdnEk8UoGwG6v6THd5ZRvycDbz8XP2QNrEYmFtbWGKF1DBdxXIyF/GI8h75i0/F9M5C131uT0CurE464APOBt4jEwWcQpVxU1qBz6qFgGPwXqflJGuqy47xfB6/iHg5Z8Xs5e2BmxGJq18V07Ast1ZCqWY7lwqjzPPkPeZi/p7Sf+ap/iL59POBv4jE1/6Ro7zuu9TeMkpuG/AGc7euJOk19Nue6tR8ddjBse446GBnxEgWAkgHJBwR7D7/Z5TBVr6Wdq1tRnX1kDAsvxXOR5QM8ZmPT6lLATW6sASCVIIBHUZHnPeIExEQEREBERAREQEREBERAREkQGJ884OznjfFe7dARVTu3KW5d2fYwn0SVi3aIswBpLZYPyXPhGXDHHkOZED5Vwtl/qZbgjpYOuf/G/z/1nacS4HRrdJpNNd56XdWwPiSxaq9rrz6j75fpfoDUzA0d0uCxGzYMjwk+QyCOczO2lUbj3S93gA4UbN2MAcvDnI5eeRA5fsVrdWbdRpdev0+m09aG7ot6O1hSwfIc/fOH0uxuzQRed/p7ejhedve+lkjYBzzt3/LM+zC6l13AowJ2E8iCd2Np+Zxj3zVrv0VdmxTSlnTaAqt1AxyGepUfMCByHGt68b4S93LOm1CsxwFNhp5rn2k+Ut+OVU3afWo93dpZbXWLV5hW7upQfYQHwD5dZdajUaS2sd41NiFyo3bWUspOQAeRYYPwwfZPa6jS4WsNVhq96J4cFFxllUciBkcxA5bs3ZrPSn0fEq6b39GyuqqGBZV3gG21PIkjI+De+YODIj8f4kjBWB0lAKnByMYIM7TSV0oB3Sou8ZG0Ku7l15Dn1H7Z50w07OzVCsurFXKhdwblkEjnnp/KBxbbv6yuKmRW/oxfWG4Y74+QYGYvwX6xKtHrbHYYTiWoLYI5nw9OfUnkPjO6NNG9mKV7wMsdq7gCDzJxnBAP7DNYWaHu9w7juyu/OE2FQR484wRnHOBxXDtXbouMY1O5a+JIDlyu1dTUmNoweSldqDPsHxm52m4BZbfbrtAwXW6exdvstQUVlqX9xycZ+4jsUXT3AMFrsCnAOFbBHl+b5TDrNfo9Mc2200lz1Yohc/PmYGp2M1xv0i3lChsstYoeqE3NlT7weUvJj0zoyhqypVuYK4KnPPII5GZMQIiIgIiICIiAiIgIiICIiAkiRJECTOY4fwW+t9STsIvvuceNsKHrCr4dvrZHM+z2zqDKXietcv3NLBcAF3xkrnoqjpuPXJzgEcjmaNRqKafHOS87RD2tZtO0Odr7GX+jNW1lYf+jatKu3JBNRLb2OByzgAAchk+6XPEOEXWmm4bQ9WqW7uyxKMBQatpbHJhksDjrge+YjQT1uu/iuP5A4j0c/lbv41n3zhT0m03ylv7NZn7RcIt1VBqBWokF1YHO25SpqbpzwRkn5T1Xw2462nVWCsbdFZU4Uk/SWW02ZXw81+jPv8Q9k1vRz+Vu/jWffHo5/LXfxrPvj3n030ydms1uE9m76XouLKzUvrMpk7WXV3d4CGxyZcAdOYZpCdkH9FSrvdt1W+ym8czVc9jvhV+tVhypB6gYx7Nr0c/lrv41n3x3B/K3fxbPvj3n030ydms98T4NqHsovRkFmnddgJO1q2TZeDy5bgenPmiGZ+EaC+my84QrdrGtzuYlUNKIBjb62U9uMGavo5/LXfxbPvj0c/lrv41n3x7z6b6ZOzWexwfUDWHVqU+lpeu9CTz2tnTlTjnty4P8AemjqeyTinVU0OqpqNPhaj6lVzkm11YDOxjtJX2gkesZt+jn8rd/Gs++SptTxVWuSPq2sXRvcSea/EHl7+kzx9JNNe0RMTDydPaG5wPhL1W6i9yM3tWdi5IUVUisEk4yxxknHQKPLM1X02gGpvfUHTNYzLztKd4FFagV4boo6jHXdLzQaoW1ixQRnqD1Ug4Kn3ggj5TjOOcGt1Gpt7rT8LsIsQ7r1ZtR4FrbDYB8Jxj4GWCtotG8NDoOy9NKi7uBWtZvJCVOHRTsXJ8PJC3rFRy558zLsyk7KcOsorsW2jS0k27gukUrURsUZIIHjyMdPIS8M9HiIiAiIgIiICIiAiIgIiICSsiSvWB6M5ihsta3mb7M/4W2j+Sj9k6ecvputn6xb9qZW+k0/4seqRpvEzREShpyYkRG4x6i9EUvYwVR1ZiAB8zKmztNQPVDt7wu0f8RGZcOgIwwBB6g8wR75xvHOHrTcAnqsu4L+KQcED832fOdDRYsWSJi8Tv6tuClb36tpdTw/iVdwOw8x6ykYYZ6ZHs68/dNi+5UXc7BRy5nkOZwP5kTh9JeanW1fqnmB9ZTyYfzyPeBNnjfEzf4QCKgeQPIuemWHs9gPxPkBvtw+JvG07VbLaW8ZOpV2ciaPA7i+mrZuuzBPmSvhz/KZdNr6rHetH3NXjdjoM55Z8zyOZzr4bVtaI+CLKz4Aed49lw/nUhP85znaNTbqmSzimm0tdbclC1+k+KtCcvacJnyIUnpznRdn/W1H6Zfsa5x/ar0VtZaNRxDSaY1srIhqraxnCKwbUNZksnQbV28gOc+mcNnfSY/Rzcnil2nZx6O620ao6hUO0u1gtOcA4LDl0IOJazmuwjVGhzVqKLibfG2mrFVIbYvhVAT9XBJJJ5/s6WTmDzIkyICIiAiIgIiICIiAiIgJK9ZElesD1OX03W39Yt+1M6icvputv6xb9qZW+k3lq/ckabxM0REoScQTjnE5TtrrzldODgFd7/nDJCr8OTE/ASTpdPOfJ1WeOk5LRWG/xDtLUvKn6VvaOSD4t5/LPynM2Xu7l3bcx6n/ANAB5Aez/UkzUQzIrTu009MUbUh2sOjri598tpWnhmmPfIZp7ES3dXmz/wBI3Clad+1ACMJyLZJPNuvn5Ylp2JT6S0gcgiDl0zlzj/r2yioRrG2Vjcw646L/AHj0X5n9vSdj2ZqqStkrcOwbNrLzXeR0B88AAcv9ZjrJmuC3Lv8A+3czWeyx16lO+XQ9n/Wv/TL9hXNHiOt1a32LVwnvkyMW97TXvyozlXGeR5fKb/Z/1tR+mX7CuU/Frtd6S6aHSvkHLW22hNMxNagbRhydvmAo555y28M8pj9FcyeKVj2S1NtgvNtPcsL8d3uqfb9EhwWqAB6+fMS/mjwdNQKgNUajb9Y0qy159wYkzek9g8yJMiAiIgIiICIiAiIgIiICSvWRJXrA9Tl9N1t/WLftTOonL6brb+sW/amVvpN5av3JGm8TNERn/wC5RIiZnknAnFdvdORbXd5Mmw+5lYsP2gt+yaXaDiXpFuR/ZpyrHt/GfHvIGPcB7TKo0KeqKfiBLnwzgV6bZbW2mY7tmmms9nk3iO57rsmbfgZmr6NX+Iv7oj0ZPxF/YJ1Z4Tv+r8OhPHN426n5WOoosrx3tbJnpuHI5945Z93WYS01WoU8ioI94zOp7McN0t1Pir8dZ2thnAPLKtgHHMfzUzn67SxpMcZLbzHx2hlg4xvyvVz1Wla19ldYdz7uQHtY+Q+Pyn0Pg/D1oqWscyObH8Zj1P8A15ACZdJo66l21Vqg9ijGfj7TM8q+s13to6lOUfy1ajPOWd9tmz2f9bUfpV+wrnMdouGax9XYKa72DMrLams7mlNta7keoeIMdpwQD64PlOo7P+tf+mX7CuUHENDwptXedd6LvLqQXuC2AdygCtWSMdM5GeU+g8M8pj9HFyeKVr2L0ttdVnfK6M1uQll/pLquxVGbPfjOB0zOilN2Y0+hStxoDWazZl+6cOu/YueYJ542y5k5g8yJMiAiIgIiICIiAiIgIiICSvWRJXrA9Tl9N1t/WLftTOonL6brb+sW/amVvpN5av3JGm8TNPGopV1ZGGVYYIyRkHrzHOe4lEraYneE5U/1Z0X5D/Mt/wB0f1Z0X5H/ADLf98tpi1Vm1GbIGFJG7kMgcs/OTKa3VWmKxkt+8sJpWI7nz3j+grr1LogKqAmBvfllAT1aWPZHg+ntW02oW2uoGXsGAUBxyaYuO6G5ry6VaiwNXW240ODkoMjCINuCOktexmktXvFs3UbrFCC2mwbm2Y5M20fL3GXzUafUX0NcdLf+9o57oNbVi+89yw/qzovyP+Zb/vmzw/hNFJLVV7SwAPic5AOfrE+0zZrLBnqsxvQ9QMBlb1WAyceYPvU+6ZJRdVk1WO04s1p9N06sVnnBERIDNs9n/W1H6Vfsa5h1fZqq2y1rgjB7FcEIosUoqAKXOdy5TPl1IORM3Z/1tR+mX7GuaHEtJa11jLxdqBkfRAUEJ4F/HG7n1+c+o8M8pj9HMyeKVrwTQrV3gRqyGtzitFQLhFXBAJy3LJPLr0lnKDsnSyi/df3xN+e8PdAt9Eg5irkOnnzx1l/J7B5kSZEBERAREQEREBERAREQElesiSvWB6nL6brb+sW/amdROX03W39Yt+1MrfSby1fuSNN4maIiUJOJp8YbFLNuC4KneeYr2up7xh5qvrEeYHlNyaXFyRUSCAQyYLeoCLFIL/mA8292ZK0X++nrDHJ4Zba8S5f96af9xP8A5Jg1Wu3NUnp9Nu6+sd0iAO+HDYUhyRjG48uinp1Fql1+P7bTfut/vmlxi+wKhe2hlF9ZYIrd4cOCNniPiyAenQN06z6rvERvLlt3jejYgXVjL1g+EfXQ+snx5Bh71HtM0a7FYBlOQRkEeYMuNDxGu3cEzlcZDKVI3ZwcEdDg8/cZUa6jubNw/srG/csYnl7lY/sY/nSs8e4fGox9oxc5j8wk4MnVnqymIiUfbZNbPZ/1tR+mX7Gucp2s7PVXatrbX0FABVl76qu27UFVXHes5BWrI27V5nb18p1fZ/1tR+mX7GuVfEaNGlupvuShgpVrbNRWSE+jUBRaRg8sHaOY3e8T6jwzymP0czJ4pbXYjR1V0uK20vO4ll0ahKUOxQFAHU4AJJ9s6OUvZh6WrZqEqRC4OKkavrWvNkYAgn245jbLqT2DzIkyICIiAiIgIiICIiAiIgJK9ZElesD1OX03W39Yt+1M6icvputv6xb9qZW+k3lo9UjTeJmiJMoaciYijWP3FZ5kZsbrsQ8vPkWbBwPiT0waqrjwt17cOoTNipussYgJWMKfV6s2GHLl16zrKhRpqwHsVAW5tYyqXcjmSxwCxweXsHLkJZ+E8Fta0Zs8bVjnH9I2bN+mGuezmk7vYunqXw4DCussMefiU5PxlVr+AV6fbfWSWV1T+zpA22WKrZKIpA8855S7bj+iHI6ugH321g/80ruNcU01tYSq+qxu+qIVHDt4bVJICnyAzk8pbtV1ZwW37tv6RK79aDTW93qEb6r/AEb/AByWrJ/xbl/xy+vpV1KMoKsMEHoQeoInP3VBlKnkCOo8vMEfA4PxEtuD602Vjdjep2WD2MPMe4jDD3ETidHtZGTFOC3fHd6S3Z67TupmralxU5JB/snPVvzGP44Hn9YDPUGZpd6rSpYpR1DKeoPxz8iOuZQait6DtsJav6tp8vYLcdD+d0PuPWBxngs1mc2COXxhsxZvhLd7P+tqP0q/YVznO0+q4SdT3esvuzXctjUBL2pawKCrMK0IbljlnHtE6Ps961/6ZfsK5bhZZuGeUx+iNk8UqPsnxOrUC6yliy9/jcd4JxWh9V0UqBnGACPPPOX0wafSqhcrnLvubJJ54A5ZPIYA5DlM8nsHmRJkQEREBERAREQEREBERASV6yJK9YHqcvputn6xb9qZ1E5GjUeO1EVrH9It8KDOM2nG5vVT5mV/pBhvlwVrSN53b8Foi3NuTHp0e7lUdqedvUe8Vj6x/O6DPn0m3p+Cl+epII/JLnu/8RPOz+Q93nLlFwP9PZIfDej0VmMmo/Znk1G/Kr4x2gs/onjyavDGi6vnz3MVKKlgGTlmDqj/AOKdtw7j9OvY6igk1Vk1puUqd5UF2weY5MoH+L2zc7dcL0+qpXT3Judm+jIOGrI9awEeQHLHQkgHrNLg/BatLQdPp8qPEdzHc25h6x8s8h7Ogkjj2tx4sPZ6ztafxDHDSZnrOQ7W2KNZZuKjknXH5MS47AupS7aQfpF6foxKLU8F1VZO6l3OebIDZuPt5eLn7xNzgfB9T36WbGqCsCzP4SVB8S7epz054HPPkJlq/YW4bGOMsco/grv199ndTGl/c2i76hAW0fm58L/FTkfAn2CZIIlM0eqtps0ZK/BMvWLV2dCDIZARgjIPUHoZS8F1Gw+jueWCaifNR9TPtX+Yx7DLzM+m6bUU1GKMle6XNtXqzs1NBw+uncKl2hm3EZJAO0DkD0GAOQ5TbiJviIjlDEiIno8yJMiAiIgIiICIiAiIgIiICSJEkQPU8iseQ88/OehE82CYNdqlrraxs4VcnaCzH4AcyZOr1SVoXsO1R1OCcfslfwztJotTn0bUJdt9bu8vjlnmVHL4QKdNWGZrbD42xywxCKOiA4+ZPmST7Jl9Nr/GP7rfdLDTdqdDZb3FeqRrQSDWuTYMdcoBkY889JPEO1GhosFV+qSpz0VyVLc8eHI8XPlylez9HsefJOS+Sd5SK55rG0QrfTK/xj+633SfTK/af3W+6dLVcrKGB5EZGQR/I8xKkdq9CWZE1KuUOH7sNYFPsZkBCn4mavdfD9c/h72mfkr/AE2v2/8AC33SfTa/xj+633S70vGNPYrNVclgQAsaz3mN3T1czQo7YcOckV6ytyvrBCWK/wB4AeH5zz3Xw/XP4O02+SuvvrYcnKkHKsFbKsOhHL/9BI85f8G1/fV7iMMCVcYIG4ea56qeRHx9uZHDeN6XUb+4vSzuyBZtOdhOcBvYeR/ZNBu2nDAgtOtqCE4Dk+An2Buh851eH8OjRxNa2mYn4NV8nXX8So03afQu1aJqULW/2YyRv5Z8OR4uXPlLedNrIiQYESIiAiIgIiICIiAiIgIiICTIiB6kzyJIgYdePorP0bf8pnyP8B+uNWn1IFF1mbkOalDAYqHI5YYn1niO/unCJvYqQBkDmRjqfKcR+Czs1rOH1XV6mpT3jh1Nbqw8NeMHOCDmBQdhrN3aTWNtK5W07WwGXxVcjg8jJ/DKP+0eG/3x/wC6qlx2e7Ma6njOo4hZSvdXb8BbFLrvKkZHIeXtMfhE7La3WazS3UVJs05yS7hSxFyP4Rz8l88dYHn8OXG7aNHXTUSvfu29hkHZWASuR0ySPkDOw7IcLq0+hoqqUKO5QnAA3MVBZjjqSSZp9s+zC8S0ncv9E4bfWxAbY4BHMA8wQSDz85r9m24lp6E02o0gtNahEtqtTayqMKWD7WU4wDgH4eUC+0HCaqrbra1Cm5lZwAACyLt3cvMjGfhPjHYLjLaW7it61WWFQ5AQAgEXXEFvYvTnz6T7NojqQjPeFLE5WurmFGB4d7Y3nqc4A54A5ZPAdhuyvENFqdVddp0dNRuwqWrkZtd8HIA6Pg/Dzgd5oNBX4r8Ye+msWkYGSqtg/HxkfIThvwz6RKuEU1VqFRNTWqqOgAqtE63hK61tSWvpSmhKdlKLZ3jMxYbmfAGMBQB16mVX4UOA6rXaVNNpq1JF62FncKoCo4wOpz4h5QLLsroq7OG6AuMmvT0Oh81YUgZHyJHznRSo7Kaa2rRUUXJteqlK2wQwJRAuQR5HEtoCQZMiBEREBERAREQEREBERAREQERBEBJEjEQPUmeJOYHqJ5zGYHqJ5zGYHqJ5zGYHqJ5zGYExIkQJnmTiMQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//2Q=='
            alt="Hindusthan Logo"
            className="w-24 h-24 object-contain"
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <div className="space-y-2">
            <motion.h3
              className="text-2xl font-semibold text-gray-800"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
            >
              Hindusthan College of Engineering and Technology
            </motion.h3>

            <motion.p
              className="text-lg text-gray-700 font-medium"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
            >
              B.E. in Computer Science and Engineering
            </motion.p>

            <motion.p
              className="text-sm text-gray-600 italic"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
            >
              October 2022 - May 2026
            </motion.p>

            <motion.p
              className="mt-3 text-gray-700"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.6}
            >
              Pursuing undergraduate education with a focus on modern software development and engineering fundamentals.
            </motion.p>

            <motion.ul
              className="list-disc list-inside mt-3 text-gray-700 space-y-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Participating in coding events and hackathons",
                "Exploring full-stack technologies and cloud solutions",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} custom={0.7 + i * 0.2}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
