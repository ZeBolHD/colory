import { useSelector } from "react-redux";
import { selectPattern } from "@/redux/selectors";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pattern } from "@/types";
import { useAppDispatch } from "@/redux/store";
import { setPattern } from "@/redux/pattern/slice";

const PatternSelect = () => {
  const { pattern } = useSelector(selectPattern);
  const dispatch = useAppDispatch();

  const patterns = (Object.keys(Pattern) as (keyof typeof Pattern)[]).map(
    (key) => [key, Pattern[key]]
  );

  const handleSelect = (pattern: Pattern) => {
    dispatch(setPattern(pattern));
  };

  return (
    <div className="flex h-fit items-center justify-between">
      <Label>Pattern</Label>
      <Select defaultValue={pattern} onValueChange={handleSelect}>
        <SelectTrigger className="ml-5">
          <SelectValue className="capitalize" placeholder="Pattern" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {patterns.map((pattern) => (
              <SelectItem value={pattern[1]} key={pattern[1]}>
                {pattern[0]}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PatternSelect;
