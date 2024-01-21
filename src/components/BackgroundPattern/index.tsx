import { selectPattern } from "@/redux/selectors";

import { useSelector } from "react-redux";

const BackgroundPattern = () => {
  const { pattern, blur, zoom } = useSelector(selectPattern);

  const blurStyleValue = `blur(${blur}px)`;
  const zoomStyleValue = `${zoom}`;

  const gradient = `linear-gradient(${45}deg, #ee7752, #e73c7e, yellow, #23d5ab)`;

  return (
    <div
      className="w-full h-vh overflow-hidden absolute inset-0 -z-10 transition-all duration-1000
      animate-[gradient_10s_ease-in-out_infinite]"
      style={{ background: gradient, backgroundSize: "400% 400%" }}
    >
      <div className="w-full h-full invert">
        <div
          className="w-full h-full absolute bg-white"
          style={{
            backgroundImage: `url('/${pattern}.svg')`,
            backgroundSize: "200px",
            filter: blurStyleValue,
            transform: zoomStyleValue,
            scale: zoomStyleValue,
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundPattern;
