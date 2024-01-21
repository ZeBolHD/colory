import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { setBlur } from "@/redux/pattern/slice";
import { selectPattern } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

const BlurRange = () => {
  const { blur } = useSelector(selectPattern);
  const dispatch = useAppDispatch();

  const handleBlur = (value: number) => {
    dispatch(setBlur(value));
  };

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="blur" className="text-base">
        Blur:
      </Label>
      <Slider
        id="blur"
        defaultValue={[blur]}
        step={0.1}
        max={4}
        min={0}
        onValueChange={([blur]) => handleBlur(blur)}
        className="ml-5 w-[135px]"
      />
      <p className="text-base w-5">{blur}</p>
    </div>
  );
};

export default BlurRange;
