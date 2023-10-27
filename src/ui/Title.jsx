export default function Title({ type }) {
  return (
    <>
      {type === "medium" && (
        <div className="flex items-center justify-center font-vt mt-28">
          <span className="text-9xl md:text-[200px]">&#123;</span>
          <div className="flex flex-col items-center justify-center">
            <span className="text-6xl md:text-9xl">B/G</span>
            <span className="text-3xl">CONNECT</span>
          </div>
          <span className="text-9xl md:text-[200px]"> &#125;</span>
        </div>
      )}
      {type === "small" && (
        <div className="flex items-center justify-center font-vt">
          <span className="text-6xl">&#123;</span>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl">B/G</span>
            <span className="text-lg">CONNECT</span>
          </div>
          <span className="text-6xl"> &#125;</span>
        </div>
      )}
    </>
  );
}
