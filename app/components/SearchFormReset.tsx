'use client'

import Link from "next/link";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector( '.search-form') as HTMLFormElement;
        if (form) form.reset();
    }
    return (
        <button className="flex gap-2" onClick={reset} >
            
        <Link href='/' className="search-btn text-white">⚔️</Link>
        <Link href='/' className="search-btn text-white">X</Link>
        <Link href='/' className="search-btn text-white">O</Link>
        </button>
  )
}

export default SearchFormReset

