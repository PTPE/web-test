import { forwardRef } from "react";

const service = [
  {
    name: "1 創意的策略",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrumeum, similique odio fuga laboriosam maiores sed fugiat modialiquam rem id.",
    img: "https://fakeimg.pl/200x150/",
  },
  {
    name: "2 客製的互動",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrumeum, similique odio fuga laboriosam maiores sed fugiat modialiquam rem id.",
    img: "https://fakeimg.pl/200x150/",
  },
  {
    name: "3 整合的服務",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrumeum, similique odio fuga laboriosam maiores sed fugiat modialiquam rem id.",
    img: "https://fakeimg.pl/200x150/",
  },
];

const Service = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col items-center p-10 gap-16 service" ref={ref}>
      <div className="text-center">
        <h1 className="font-vt text-6xl">SERVICE</h1>
        <h6 className="text-[8px] text-gray-400">行銷的MARTECH解決方案</h6>
      </div>

      {service.map((service) => (
        <div
          className="text-gray-400 flex flex-col md:flex-row md:justify-center md:gap-20"
          key={service.name}
        >
          <div className="md:w-[20%]">
            <h2 className="text-lg">{service.name}</h2>
            <div className="flex flex-row gap-3 mb-6">
              <div className="w-[2px] bg-white" />
              <p>{service.content}</p>
            </div>
          </div>
          <img src={service.img} className="m-auto md:m-0" alt={service.name} />
        </div>
      ))}
    </div>
  );
});

Service.displayName = "Service";

export default Service;
