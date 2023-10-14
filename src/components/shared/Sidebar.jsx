import React from "react";
import { RiSettingsFill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import profile from "../../lib/images/profile.jpg";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-blue-700 hover:no-underline active:bg-sky-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-indigo-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <RiSettingsFill fontSize={40} className="text-white" />
        <span className="text-white text-2xl font-extrabold">Dashboard</span>
      </div>
      <div className="py-2 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-row items-center px-2 py-1 bg-sky-700 rounded-lg justify-between mb-4">
        <img src={profile} alt="user" className="h-10 w-10 rounded-full" />
        <div className="flex flex-col py-1 px-1">
          <span className="text-white text-lg">Kasim</span>
          <span className="text-neutral-100 text-xs">Project Manager</span>
        </div>
        <div className="text-neutral-200 px-1">
          <AiOutlineDown size={14} />
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? "bg-sky-700 text-white" : "text-neutral-300",
          linkClass
        )}
      >
        <span className="text-md border border-white rounded-full p-1">
          {item.icon}
        </span>
        {item.label}
      </Link>
    </>
  );
};

export default Sidebar;
