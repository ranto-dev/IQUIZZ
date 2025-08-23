export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-full text-center pt-[2rem] h-[25vh] lg:pt-[4rem] lg:h-[30vh] flex flex-col justify-center  bg-amber-50">
      <div className="rounded-t-4xl lg:rounded-t-full  bg-amber-600 h-full flex flex-col lg:flex-row gap-1 items-center justify-center p-2 text-sm lg:text-lg text-white">
        <span>
          <span>Copyright - {date} All reserved</span>,
        </span>
        <a className="underline font-bold" href="http://ranto-dev.netlify.app">
          by ranto andrianandraina
        </a>
      </div>
    </div>
  );
}
