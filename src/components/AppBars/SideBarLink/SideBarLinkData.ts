import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

export const linkData = [
  {
    text: "Dashboard",
    to: "Dashboard",
    Icon: HomeOutlinedIcon,
  },
  {
    text: "Catalogue",
    Icon: LocalGroceryStoreOutlinedIcon,
    subLinks: [
      {
        text: "Book codes",
        to: "Catalogue/Book",
      },
    ],
  },

  {
    text: "Orders",
    to: "Orders",
    Icon: FormatListBulletedOutlinedIcon,
    fab: 14,
  },
  {
    text: "Customers",
    to: "Customers",
    Icon: PersonOutlineOutlinedIcon,
  },
  {
    text: "Marketing",
    Icon: DataSaverOffIcon,
    subLinks: [
      {
        text: "Discount codes",
        to: "Marketing/Discount",
      },
      {
        text: "Exit Intent",
        to: "Marketing/Exit",
      },
      {
        text: "Checkout Features",
        to: "Marketing/Checkout",
      },
      {
        text: "Post-purchase conversation",
        to: "Marketing/Post-purchase",
      },
      {
        text: "Cart abandonment",
        to: "Marketing/Cart",
      },
      {
        text: "Timer checkout",
        to: "Marketing/Timer",
      },
      {
        text: "Sell on Social",
        to: "Marketing/Sell",
      },
      {
        text: "Special Offer",
        to: "Marketing/Special",
      },
      {
        text: "Seasonal Offer",
        to: "Marketing/Seasonal",
      },
    ],
  },
  {
    text: "Delivery Options",
    to: "Delivery",
    Icon: LocalShippingOutlinedIcon,
  },
  {
    text: "Payment Options",
    to: "Payment",
    Icon: AttachMoneyOutlinedIcon,
  },
  {
    text: "Store Design",
    to: "Store",
    Icon: BrushOutlinedIcon,
  },
  {
    text: "Subscription",
    to: "Subscription",
    Icon: CreditCardOutlinedIcon,
  },
  {
    text: "Intergrations",
    to: "Intergrations",
    Icon: SettingsApplicationsOutlinedIcon,
  },
  {
    text: "Extensions",
    to: "Extensions",
    Icon: DashboardCustomizeOutlinedIcon,
  },
  {
    text: "Settings",
    to: "Settings",
    Icon: SettingsOutlinedIcon,
  },
  {
    text: "Log Out",
    to: "Log",
    Icon: LogoutOutlinedIcon,
  },
];

export const linkData2 = [
  { text: "Customer Support", Icon: HelpOutlineIcon },
  { text: "Share Your Shop", Icon: ShareOutlinedIcon },
  { text: "View Your Shop", Icon: RemoveRedEyeOutlinedIcon },
];
