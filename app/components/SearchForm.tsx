import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
const SearchForm = () => {
    const query = 'test'

   
  return (
    <Form
    className="search-form    "
      action="/"
      scroll={false}
    >
      <input
        className="search-input"
        name="query"
        defaultValue={query}
        placeholder="Search Startup "
          />
          <div className="flex gap-2">
              {query && (
                  
              <SearchFormReset                                                                                                               />
              )}

          </div>
    </Form>
  );
};

export default SearchForm;
