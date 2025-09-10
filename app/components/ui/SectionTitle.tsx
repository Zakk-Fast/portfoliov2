interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl font-bold text-center mb-16">
      {title}
      <span className="text-cyan-400">.</span>
    </h2>
  );
};

export default SectionTitle;
