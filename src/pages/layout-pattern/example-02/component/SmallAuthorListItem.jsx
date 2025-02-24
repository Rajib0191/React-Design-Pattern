import React from "react";

const SmallAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <div className="flex flex-col p-2 justify-center items-center w-full max-w-sm border border-gray-700 rounded-lg shadow-sm bg-gray-800">
      <img
        className="w-12 h-12 m-3 bg-white border border-gray-200 rounded-full shadow-lg"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-white">{name}</h5>
      <p className="text-sm text-gray-400">Age: {age}</p>
      <p className="text-sm text-gray-400">Country: {country}</p>

      <div className="flex mt-4 md:mt-6">
        {books?.map((item, index) => (
          <span
            key={index}
            className="text-sm py-1 px-4 ms-2 font-medium rounded-md border text-gray-400 border-gray-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmallAuthorListItem;
