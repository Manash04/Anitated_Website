import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center gap-5 bg-zinc-900 px-32">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full  bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className=" absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-yellow-500 ">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full  bg-[#203a37] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className=" absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-yellow-500 ">
            &copy;2019
          </button>
        </div>
        <div className="card relative w-full rounded-xl h-full  bg-[#203a37] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className=" absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-yellow-500 ">
            &copy;2019
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
