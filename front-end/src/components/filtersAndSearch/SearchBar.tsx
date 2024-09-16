interface SearchBarProps {
  filter: { category: string };
  setfilter: (e: any) => any;
}

const SearchBar = ({ filter, setfilter }: SearchBarProps) => {
  return (
    <div className={`name-input container mx-auto my-6 w-[100%] md:w-[30%]`}>
      <div className="relative"></div>
    </div>
  );
};
export default SearchBar;
