export default function HambergerMenuIcon({ handleOpen }) {
  return (
    <div
      className={`flex flex-col gap-[3px] justify-center h-5 md:hidden absolute top-4 right-2 self-end`}
      onClick={() => handleOpen((prev) => !prev)}
    >
      <>
        <div className="w-[20px] h-[3px] bg-white " />
        <div className="w-[20px] h-[3px] bg-white " />
        <div className="w-[5px] h-[3px] bg-white self-end" />
      </>
    </div>
  );
}
