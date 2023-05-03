import React from "react";

function ReactCard() {
  const ListItems = [
    {
      para: "Was first released in 2013",
      color: "primary",
    },
    {
      para: " Was originally created by Jordon Walke",
      color: "primary",
    },
    {
      para: "has well over 100k stars on Github",
      color: "primary",
    },
    {
      para: "Is maintained by Facebook",
      color: "primary",
    },
    {
      para: "Powers thousands of enterprise apps,including mobile apps",
      color: "primary",
    },
  ];
  return (
    <div className=" h-screen grid place-content-center bg-slate-400">
      <div className="border rounded-xs h-[35rem] w-[40rem] bg-[#282D35] relative">
        <img
          src="logo512.png"
          alt="logo"
          className=" opacity-5 w-80 absolute top-32 left-[12rem] animate-spin "
        />
        <div className=" bg-[#21222A]">
          <div className="flex justify-between gap-2 p-8">
            <div className="flex ">
              <img src="logo192.png" alt="logo" className="w-10 h-8" />
              <h2 className="text-2xl font-semibold text-[#61DAFB]">
                ReactFacts
              </h2>
            </div>
            <div>
              <p className="text-[#DEEBF8] mt-1 font-medium">
                React Course - Project 1
              </p>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-white text-4xl font-bold leading-loose">
            Fun Facts about React
          </h1>
          <ul className=" text-[18px] list-disc list-inside leading-relaxed pl-4">
            {ListItems.map((item, i) => {
              return (
                <li className={`text-${item.primary} text-white`} key={i}>
                  {item.para}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReactCard;
