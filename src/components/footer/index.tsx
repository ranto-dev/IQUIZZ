import { FaCopyright } from "react-icons/fa6";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-full text-center pt-[4rem] h-[30vh] flex flex-col justify-center  bg-amber-50">
      <div className="rounded-t-full  bg-amber-600  h-full flex gap-1 items-center justify-center text-lg text-white">
        {" "}
        <FaCopyright /> Copyright - {date} All reserved, by{" "}
        <a className="underline font-bold" href="http://ranto-dev.netlify.app">ranto andrianandraina</a>
      </div>
    </div>
  );
}
