type TGradientTextProps = {
  content: string;
};
export const GradientText = ({ content }: TGradientTextProps) => {
  return (
    <div className="inline-block bg-gradient-to-r from-cyan-400 to-sky-950 bg-clip-text text-transparent">
      {content}
    </div>
  );
};
