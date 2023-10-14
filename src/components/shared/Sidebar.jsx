import React from "react";
import { RiSettingsFill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <RiSettingsFill fontSize={30} className="text-white" />
        <span className="text-neutral-200 text-lg">Dashboard</span>
      </div>
      <div className="py-2 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-row items-center px-2 py-1 bg-neutral-700 rounded-lg justify-between">
        <img
          src="https://www.computerhope.com/jargon/g/guest-user.png"
          alt="user"
          className="h-8 w-8"
        />
        <div className="flex flex-col py-1 px-1">
          <span className="text-neutral-200 text-lg">Evano</span>
          <span className="text-neutral-400 text-sm">Project Manager</span>
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
          pathname === item.path
            ? "bg-neutral-700 text-white"
            : "text-neutral-400",
          linkClass
        )}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    </>
  );
};

export default Sidebar;
