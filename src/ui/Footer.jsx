export default function Footer({ homeRef }) {
  function goToPage(page) {
    page.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <footer className="w-screen h-20 flex justify-center items-center relative text-[8px]">
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div
        className="absolute md:right-20 right-0 w-10 h-10 border-2 flex items-center justify-center rounded-full cursor-pointer top-[-50px] md:top-auto"
        onClick={() => goToPage(homeRef.current)}
      >
        <span>&uarr;</span>
      </div>
    </footer>
  );
}
