import { useEffect, useState } from "react";
import Title from "./Title";

const navigation = ["service", "showreel", "team", "contact"];

export default function Navigation({ refs }) {
  const [currentPage, setCurrentPage] = useState("");

  function goToPage(page) {
    page.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `-200px`,
      threshold: 0,
    };

    const targets = Object.values(refs).map((ref) => ref.current);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (entries[0].target.classList.contains("home"))
          setCurrentPage("home");
        if (entries[0].target.classList.contains("service"))
          setCurrentPage("service");
        if (entries[0].target.classList.contains("showreel"))
          setCurrentPage("showreel");
        if (entries[0].target.classList.contains("team"))
          setCurrentPage("team");
        if (entries[0].target.classList.contains("contact"))
          setCurrentPage("contact");
      }
    }, options);
    targets.map((el) => observer.observe(el));
  }, [refs]);

  return (
    <div className="hidden md:flex text-[10px] justify-between items-center fixed w-screen z-30 p-3">
      <Title type="small" />
      <div className="flex gap-3">
        {navigation.map((item) => (
          <nav
            key={item}
            className={`uppercase tracking-widest cursor-pointer relative group hover:text-zinc-500 ${
              currentPage === item ? "text-zinc-500" : ""
            }`}
            onClick={() => goToPage(refs[item].current)}
          >
            {item}
            <div
              className={` absolute w-[15px] h-[4px] group-hover:bg-orange-700 bottom-[-8px]${
                currentPage === item
                  ? "absolute w-[15px] h-[4px] bg-orange-700 bottom-[-8px]"
                  : ""
              }`}
            />
          </nav>
        ))}
      </div>
    </div>
  );
}
