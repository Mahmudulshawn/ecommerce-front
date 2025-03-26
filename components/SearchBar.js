"use client"
import Image from 'next/image'
import React from 'react'
import searchIcon from "@/public/search.png";
import { useRouter } from 'next/navigation';

const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if(name){
      router.push(`/list?name=${name}`);
    }
  }

  return (
    <form onSubmit={handleSearch} className='flex justify-between gap-4 bg-gray-100 p-2 rounded-2xl '>
      <input type='text' name='name' placeholder='Search' className='flex pl-2 bg-transparent outline-none ' />
      <button className='cursor-pointer pr-2'>
        <Image src={searchIcon} alt='' width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar