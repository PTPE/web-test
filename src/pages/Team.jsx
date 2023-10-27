import { forwardRef } from "react";

const team = [
  {
    name: "專業PM",
    title: "需要講人話嗎",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihillaudantium, non sit omnis natus dolorem unde culpa quo optio saepe.",
  },
  {
    name: "創意前端",
    title: "技術帶來更好的互動感受",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihillaudantium, non sit omnis natus dolorem unde culpa quo optio saepe.",
  },
  {
    name: "硬底子後端",
    title: "技術帶來更好的互動感受",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihillaudantium, non sit omnis natus dolorem unde culpa quo optio saepe.",
  },
];

const Team = forwardRef((props, ref) => {
  return (
    <div
      className="flex flex-col items-center p-10 gap-16 min-h-screen md:gap-60 team"
      ref={ref}
    >
      <div className="text-center">
        <h1 className="font-vt text-6xl">TEAM</h1>
        <h6 className="text-[8px] text-gray-400">解決方案的完整團隊</h6>
      </div>
      <div className="flex gap-12 flex-col md:flex-row justify-center">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`md:w-[20%] ${i === 0 ? "mt-[-24px]" : ""} ${
              i === 2 ? "mt-6" : ""
            }`}
          >
            <div className="bg-zinc-400/20 p-4 ">
              <h2 className="text-xl relative">
                <div className="w-6 h-[1px] bg-white absolute left-[-28px] top-[13px] " />
                {member.name}
              </h2>
              <div className="h-20 w-20 bg-orange-400 rounded-full my-5 mx-auto" />
              <p>{member.title}</p>
              <p>{member.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
Team.displayName = "Team";

export default Team;
