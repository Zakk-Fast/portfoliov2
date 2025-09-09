interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return <div className={`mx-32 ${className}`}>{children}</div>;
};
export default Container;
