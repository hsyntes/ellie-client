const Container = ({ className, children }) => (
  <div className={`container mx-auto px-4 lg:px-0 ${className}`}>
    {children}
  </div>
);

export default Container;
