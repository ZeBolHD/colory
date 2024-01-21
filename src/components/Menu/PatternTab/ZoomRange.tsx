import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { setZoom } from "@/redux/pattern/slice";
import { selectPattern } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

const ZoomRange = () => {
  const { zoom } = useSelector(selectPattern);
  const dispatch = useAppDispatch();

  const handleZoom = (value: number) => {
    dispatch(setZoom(value));
  };

  return (
    <div className="flex items-center justify-between">
      <Label htmlFor="zoom" className="text-base">
        Zoom:
      </Label>
      <Slider
        id="zoom"
        defaultValue={[zoom]}
        step={0.1}
        max={4}
        min={1}
        onValueChange={([zoom]) => handleZoom(zoom)}
        className="ml-5 w-[135px]"
      />
      <p className="text-base w-5">{zoom}</p>
    </div>
  );
};

export default ZoomRange;
