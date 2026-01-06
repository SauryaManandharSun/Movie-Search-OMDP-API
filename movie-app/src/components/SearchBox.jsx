const SearchBox = ({ searchValue, setSearchValue }) => {
	return (
		<input
			type="text"
			className="form-control"
			value={searchValue}
			onChange={(e) => setSearchValue(e.target.value)}
			placeholder="Search movies..."
		/>
	);
};

export default SearchBox;
