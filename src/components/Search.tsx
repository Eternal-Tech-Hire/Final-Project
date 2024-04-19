const Search = () => {
  return (
    <>
      <div className="mt-8 flex items-center">
        <input
          type="text"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Job Fair.."
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
        <button
          // onClick={handleSearch}
          className="bg-gray-600 px-4 py-2 rounded-r text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    </>
  );
};
