interface TitleHeadingProps {
  children: React.ReactNode;
}

const TitleHeading = ({ children }: TitleHeadingProps) => {
  return (
    <p className="relative text-3xl font-bold">
      {children}
      <span
        className="absolute left-0 w-1/4 bg-[#4561EC] h-[2px] top-full"
      ></span>
    </p>
  );
};
export default TitleHeading;
