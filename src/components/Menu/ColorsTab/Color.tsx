import { cn } from "@/lib/utils";

interface ColorProps {
  color: string;
  size: "lg" | "sm";
  onClick?: () => void;
}

const Color = ({ color, size, onClick }: ColorProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("rounded-full hover:border-2 cursor-pointer border-black", {
        "size-6": size === "sm",
        "size-8": size === "lg",
      })}
      style={{ backgroundColor: color }}
    />
  );
};

export default Color;
