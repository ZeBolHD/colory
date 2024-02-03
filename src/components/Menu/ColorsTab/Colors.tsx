import { useSelector } from "react-redux";

import { selectColors } from "@/redux/selectors";
import Color from "./Color";
import { useAppDispatch } from "@/redux/store";
import { selectColor } from "@/redux/colors/slice";

const Colors = () => {
  const dispatch = useAppDispatch();
  const { colors } = useSelector(selectColors);

  const handleColorClick = (color: string) => {
    dispatch(selectColor(color));
  };

  return (
    <div className="w-1/2 mt-6">
      <p>Colors:</p>
      <div className="w-full mt-4 grid grid-cols-6 gap-4">
        {colors.map((color, index) => {
          const onClick = () => handleColorClick(color);
          return <Color color={color} size={8} key={index} onClick={onClick} />;
        })}
      </div>
    </div>
  );
};

export default Colors;
