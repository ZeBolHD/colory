interface ColorProps {
  color: string;
  size: number;
  onClick?: () => void;
}

const Color = ({ color, size, onClick }: ColorProps) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-full hover:border-2 cursor-pointer border-black size-${size}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default Color;
