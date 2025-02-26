import React from "react";
import { BsThreeDots } from "react-icons/bs";
// import { FaUserCircle } from "react-icons/fa";

const Cards = () => {
  const cardData = [
    {
      title: "Project Dashboard",
      description: "Create a dashboard design",
      updated: "Updated 5 Hours ago",
      users: ["/user1.png", "/user2.png"],
    },
    {
      title: "Create a style guide",
      description: "Style guide for the business",
      updated: "Updated 5 Hours ago",
      users: ["/user4.png", "/user5.png"],
    },
    {
      title: "Create wireframes",
      description: "Wireframe for the agency",
      updated: "Updated 5 Hours ago",
      users: ["/user6.png", "/user7.png"],
    },
    {
      title: "Conduct user research",
      description: "Research for the agency",
      updated: "Updated 5 Hours ago",
      users: ["/user8.png", "/user9.png"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-xl gap-4 shadow-md flex flex-col relative"
        >
          {/* Three Dots Menu */}
          <BsThreeDots className="absolute top-4 right-4 text-gray-500 cursor-pointer" />

          {/* Card Content */}
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-gray-500 text-sm">{card.description}</p>

          {/* Updated Time */}
          <div className="flex justify-between"> 
            <p className="text-xs text-gray-700 mt-3">{card.updated}</p>

            {/* User Avatars */}
            <div className="flex mt-3">
              {card.users.map((user, i) => (
                <img
                  key={i}
                  src={user}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
