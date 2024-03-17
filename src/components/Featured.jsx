import { motion } from "framer-motion";
import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer  relative w-1/2 h-[75vh] bg-zinc-400 rounded-xl">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  Z-[9] leading-none tracking-tighter text-6xl">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl scale-50 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              ></img>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh] bg-zinc-500 rounded-xl ">
            <div className="w-full h-full rounded-xl  overflow-hidden">
              <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  Z-[9] leading-none tracking-tighter text-6xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span >{item}</motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
