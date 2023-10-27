import { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cases = [
  {
    img: "https://fakeimg.pl/300x150/",
    title: "BMW官網",
    url: "BMW.com",
  },
  {
    img: "https://fakeimg.pl/300x150/",
    title: "BMW官網",
    url: "BMW.com",
  },
  {
    img: "https://fakeimg.pl/300x150/",
    title: "BMW官網",
    url: "BMW.com",
  },
  {
    img: "https://fakeimg.pl/300x150/",
    title: "BMW官網",
    url: "BMW.com",
  },
  {
    img: "https://fakeimg.pl/300x150/",
    title: "BMW官網",
    url: "BMW.com",
  },
];

const ShowReel = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className="flex flex-col items-center md:py-10 justify-around min-h-screen showreel"
      ref={ref}
    >
      <div className="text-center">
        <h1 className="font-vt text-6xl">SHOWREEL</h1>
        <h6 className="text-[8px] text-gray-400">精彩案例</h6>
      </div>
      <div className="hidden md:flex flex-row w-screen bg-gray-300/20 ">
        <button
          className="arrow-left arrow text-4xl px-8 text-orange-600 disabled:text-orange-900"
          onClick={() => {
            currentSlide === 0
              ? setCurrentSlide(cases.length - 1)
              : setCurrentSlide((prev) => prev - 1);
          }}
        >
          &#5176;
        </button>
        <Swiper
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          modules={[Pagination, Navigation]}
          className="flex items-center p-10 gap-16 md:flex-row md:w-[100%] md:justify-center mySwiper"
        >
          {cases.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-[300px]">
                <img
                  src={item.img}
                  className={`w-[300px] h-[150px] ${
                    i === currentSlide ? "border-2 border-orange-600" : ""
                  }`}
                />
                <div className="flex justify-between text-[8px] text-gray-400 ">
                  <span>——{item.title}</span>
                  <span>{item.url}🔗</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="arrow-right arrow text-4xl px-8 text-orange-600 disabled:text-orange-900"
          onClick={() =>
            currentSlide === cases.length - 1
              ? setCurrentSlide(0)
              : setCurrentSlide((prev) => prev + 1)
          }
        >
          &#5171;
        </button>
      </div>

      {cases.map((item, i) => (
        <div key={i} className="md:hidden">
          <img src={item.img} className="m-auto" />
          <div className="flex justify-between w-full text-[8px] text-gray-400 md:w-[300px] md:m-auto">
            <span>——{item.title}</span>
            <span>{item.url}🔗</span>
          </div>
        </div>
      ))}

      <button className="px-16 py-2 bg-white text-black rounded-full font-bold relative">
        更多精彩案例
        <div className="absolute text-gray-500 text-6xl right-[-25px] top-[-10px]">
          &#8640;
        </div>
      </button>
    </div>
  );
});

ShowReel.displayName = "ShowReel";

export default ShowReel;
