import Title from "./Title";
const navigation = ["service", "team", "contact"];

export default function HambergerMenu({ handleOpen, elements }) {
  function goToPage(page) {
    page.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="fixed h-screen w-screen bg-black z-10 flex flex-col items-center justify-center gap-5 md:hidden">
      <div
        className="absolute top-3 right-2 self-end text-2xl cursor-pointer"
        onClick={() => handleOpen(false)}
      >
        &#x2715;
      </div>
      <Title type="small" />
      <div className="space-y-5">
        {navigation.map((item) => (
          <nav
            key={item}
            className="uppercase hover:text-zinc-500 relative group cursor-pointer text-center"
            onClick={() => {
              handleOpen(false);
              goToPage(elements[item].current);
            }}
          >
            {item}
            <div className="absolute w-[16px] h-[4px] right-[calc(50%_-_8px)]  group-hover:bg-orange-700 bottom-[-8px]" />
          </nav>
        ))}
      </div>
    </div>
  );
}
