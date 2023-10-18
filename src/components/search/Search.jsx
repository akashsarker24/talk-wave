import React from 'react'
import {BsThreeDotsVertical, BsSearch} from 'react-icons/bs'
const Search = () => {
  return (
    <div>
        <div class="shadow-box-shadow rounded-[20px]">
          <div class="relative  w-full ">
            <div class="absolute top-2/4 right-3 grid w-5 -translate-y-2/4 place-items-center text-blue-gray-500 text-primary-color">
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </div>
            <div class="absolute top-2/4 left-3 grid  w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
              <BsSearch></BsSearch>
            </div>
            <input
              class="font-nunito h-[60px] shadow-[box-shadow] px-10 text-base font-semibold rounded-lg  bg-transparent   border-[rgba(17,23,93,0.3)] w-full focus:outline-none peer "
              placeholder=" "
            />
            <label class="font-nunito absolute text-xl font-semibold text-[#11175D]   peer-focus:scale-75 peer-placeholder-shown:scale-100 scale-75 duration-300 transform -translate-y-3   px-2 peer-focus:px-2 peer-focus:text-[rgba(17,23,93,0.7)]    peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:-translate-y-3  left-12">
              Search
            </label>
          </div>
        </div>
    </div>
  )
}

export default Search
