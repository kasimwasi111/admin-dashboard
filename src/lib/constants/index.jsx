import { FaKey, FaCube, FaRegUser } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <FaKey />,
  },
  {
    key: "product",
    label: "Product",
    path: "/products",
    icon: <FaCube />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <FaRegUser />,
  },
  {
    key: "income",
    label: "Income",
    path: "/income",
    icon: <LuWallet />,
  },
  {
    key: "promote",
    label: "Promote",
    path: "/promote",
    icon: <TbDiscount2 />,
  },
  {
    key: "help",
    label: "Help",
    path: "/help",
    icon: <MdOutlineLiveHelp />,
  },
];

// export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
//   {
//     key: "user",
//     image: "https://www.computerhope.com/jargon/g/guest-user.png",
//     name: "Evano",
//     role: "Project Maneger",
//     path: "/user",
//   },
// ];
