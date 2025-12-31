import Chip from "./chip";

interface ChipContainerProps {
  textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
  return (
    <div className="flex my-1 gap-1 flex-wrap">
      {textArr.map((it, ind) => (
        <Chip key={ind} content={it} />
      ))}
    </div>
  );
}
