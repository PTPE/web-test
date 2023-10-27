import { forwardRef, useState } from "react";
import HambergerMenuIcon from "../ui/HambergerMenuIcon";
import HambergerMenu from "../ui/HambergerMenu";
import Title from "../ui/Title";

const Home = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center relative h-screen home"
      ref={ref}
    >
      {!isOpen && <HambergerMenuIcon handleOpen={setIsOpen} />}
      {isOpen && (
        <HambergerMenu elements={props.elements} handleOpen={setIsOpen} />
      )}
      <Title type="medium" />
      <div className="absolute bottom-0">
        <span className="text-xs text-gray-500 md:text-sm">SCROLL</span>
        <div className="h-10 w-[1px] bg-gray-500 mx-auto md:h-20" />
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
