import React from "react";

const SmallBookListItem = ({ book }) => {
  const { name, price, title } = book;
  return (
    <div class="w-full py-3 px-4 sm:py-4 border border-gray-700 rounded-lg shadow-sm bg-gray-800">
      <div class="flex items-center">
        <div class="">
          <img
            class="w-8 h-8 rounded-full bg-white border border-gray-200"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Neil image"
          />
        </div>
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium truncate text-white">{title}</p>
          <p class="text-sm truncate text-gray-400">{name}</p>
        </div>
        <div class="ml-5 text-base font-semibold text-white">${price}</div>
      </div>
    </div>
  );
};

export default SmallBookListItem;
