import bannerImage from "../assets/banner-image.jpeg";

export default function Header() {
  return (
    <div>
      <div className="relative w-full h-full">
        <img
          src={bannerImage}
          alt="Image banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute  inset-0 bg-[#212121] opacity-50"></div>

        <div className="absolute top-5 inset-0 flex items-center justify-center z-10">
          <div className="flex flex-col">
            <p className="text-2xl text-center text-white font-semibold">
              Connaîs-tu réellement Madagascar ?
            </p>
            <p className="text-white text-sm text-center flex flex-col gap-2 p-4">
              Testez votre culture malgache avec un quiz fun, instructif et
              ultra stylé ! 🇲🇬
              <div>
                <button
                  className="rounded-2xl shadow-md text-white px-5 py-2 font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
                  }}
                >
                  Démarrer un quizz
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
