interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  id,
}) => {
  return (
    <div id={id} className={`max-w-6xl mx-auto px-6 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
