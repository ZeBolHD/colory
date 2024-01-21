import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { setMask } from "@/redux/pattern/slice";
import { selectPattern } from "@/redux/selectors";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

const MaskToggle = () => {
  const { mask } = useSelector(selectPattern);
  const dispatch = useAppDispatch();

  const handleMask = (value: boolean) => {
    dispatch(setMask(value));
  };

  return (
    <div className="flex items-center">
      <Label className="text-base">Mask:</Label>
      <Switch checked={mask} onCheckedChange={handleMask} className="ml-9" />
    </div>
  );
};

export default MaskToggle;
