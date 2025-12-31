interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-sm py-0.5 px-1.5 align-baseline font-sans text-[8px] font-bold leading-none text-primary border border-border bg-background">
      {content}
    </div>
  );
}
