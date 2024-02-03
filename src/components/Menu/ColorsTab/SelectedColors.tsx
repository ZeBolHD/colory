import { useSelector } from "react-redux";

import { selectColors } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { removeColor } from "@/redux/colors/slice";

import Color from "./Color";

const SelectedColors = () => {
  const dispatch = useAppDispatch();
  const { selectedColors } = useSelector(selectColors);

  const handleColorClick = (index: number) => {
    dispatch(removeColor(index));
  };

  return (
    <div className="w-full flex">
      <p>Selected Colors:</p>
      <div className="ml-2 flex gap-2">
        {selectedColors.map((color, index) => {
          const onClick = () => handleColorClick(index);

          return (
            <Color color={color} size="sm" key={index} onClick={onClick} />
          );
        })}
      </div>
    </div>
  );
};

export default SelectedColors;
