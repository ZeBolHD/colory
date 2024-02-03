import { Button } from "@/components/ui/button";
import { randomizeColors } from "@/redux/colors/slice";
import { useAppDispatch } from "@/redux/store";

const RandomizeButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(randomizeColors());
  };

  return (
    <Button className="text-[16px]" onClick={handleClick}>
      Randomize
    </Button>
  );
};

export default RandomizeButton;
