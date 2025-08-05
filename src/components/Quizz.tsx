import { useState } from "react";

export default function Quizz() {
  const [btnStartContainer, setBtnStartContainer] = useState(false);

  const handlePlaying = () => {
    setBtnStartContainer(!btnStartContainer);
  };

  return (
    <div className="h-[70vh] p-2 flex flex-col justify-center items-center">
      <div className={`${btnStartContainer}`}>
        <button
          onClick={handlePlaying}
          className="rounded-sm px-5 py-2 text-white text-md bg-amber-300"
        >
          {btnStartContainer == false ? "Start quizz" : "Cancel"}
        </button>
      </div>
      {btnStartContainer && (
        <div className="h-full  w-full relative -top-4 -z-1">
          <div className="flex py-10 justify-center items-center rounded-2xl shadow-2xl ">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      )}
    </div>
  );
}
