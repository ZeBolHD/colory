import { selectPattern } from "@/redux/selectors";
import { useSelector } from "react-redux";

const BackgroundPattern = () => {
  const { pattern } = useSelector(selectPattern);

  return (
    <div className="w-full h-full bg-white absolute inset-0 -z-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url('/${pattern}.svg')`,
          backgroundSize: "15rem",
          backgroundColor: "#45D0FC",
        }}
      />
    </div>
  );
};

export default BackgroundPattern;
