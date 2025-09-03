import { title, copywrite, cards, more } from "./heroSecurity.config";
import beach from '../../../assets/sections-image/beachClient.jpg'

/*function HeroSecurity() {
  return (
    <section className="flex items-center justify-center text-gray-100 body-font bg-(--pc) lg:h-(--dh) px-(--sdp) lg:px-(--dp) py-10">
      <div className="container text-(--sc)">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 uppercase">
            {title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            {copywrite}
          </p>
        </div>
        <div className="flex flex-wrap">
          {cards.map((item, index) => (
            <div
              key={index}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-4 py-2 border-l-2 border-gray-200 border-opacity-20"
            >
              <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
                {item.title}
              </h2>
              <p className="leading-relaxed text-base text-gray-200 mb-4">
                {item.text}
              </p>
              <a
                href="#"
                className="inline-flex items-center"
              >
                {more}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/


export default function HeroSecurity() {

  return (
    <section className="h-(--dh) px-(--dp) py-10 bg-(--pc) text-(--bc) flex justify-between items-center">
      <img src={beach} alt="" className="w-1/3 rounded-xl"/>
      <div className="w-2/3">
        <h1 className="text-(--sc) font-bold text-2xl uppercase mb-">{title}</h1>
        <p className="">{copywrite}</p>
        <div>
          {cards.map((card) => {
            return(
              <div></div>
            )
          })}
        </div>
      </div>
      
    </section>
  )
}