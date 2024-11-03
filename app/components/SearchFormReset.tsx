'use client'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector( '.search-form') as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <button className="flex gap-2" onClick={reset} ></button>
  )
}

export default SearchFormReset