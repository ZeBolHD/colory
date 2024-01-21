import { useSelector } from "react-redux";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { selectPattern } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { setOpacity } from "@/redux/pattern/slice";

const OpacityRange = () => {
  const { opacity } = useSelector(selectPattern);
  const dispatch = useAppDispatch();

  const handleOpacity = (value: number) => {
    dispatch(setOpacity(value));
  };

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="opacity" className="text-base">
        Opacity:
      </Label>
      <Slider
        id="opacity"
        defaultValue={[opacity]}
        step={0.1}
        max={1}
        min={0}
        onValueChange={([opacity]) => handleOpacity(opacity)}
        className="mr-3 w-[135px]"
      />
      <p className="text-base w-5 text-center">{opacity}</p>
    </div>
  );
};

export default OpacityRange;
