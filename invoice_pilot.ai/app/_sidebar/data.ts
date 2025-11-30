import {
  LayoutDashboard,
  Home,
  Receipt,
  FilePlusCorner,
  HandCoins,
  ReceiptText,
  Hourglass,
  Contact,
  UserRoundCheck,
  ChessQueen,
  CircleDollarSign,
  Handshake,
  LayoutTemplate,
} from "lucide-react";

export const company_data = {
  logo_full_url:
    "https://res.cloudinary.com/dixbfipcw/image/upload/v1763562103/ip_logo_full_docpqr.png",
  logo_url:
    "https://res.cloudinary.com/dixbfipcw/image/upload/v1763563856/ip_logo_medium_zjdj5s.png",
};

export const user_data = {
  profile:
    "https://res.cloudinary.com/dixbfipcw/image/upload/v1763565328/profile_aimu7y.jpg",
};

export const items = [
  {
    main_category: "Dashboard",
    sub_category: [
      {
        title: "Home",
        icon: Home,
        link: "/main",
      },
    ],
    icon: LayoutDashboard,
  },
  {
    main_category: "Invoices",
    sub_category: [
      {
        title: "Create Invoice",
        icon: FilePlusCorner,
        link: "/dashboard/create_invoice",
      },
      {
        title: "All Invoices",
        icon: ReceiptText,
        link: "/dashboard/all_invoice",
      },
      {
        title: "Paid Invoices",
        icon: HandCoins,
        link: "/dashboard/paid_invoice",
      },
      {
        title: "Unpaid Invoices",
        icon: Hourglass,
        link: "/dashboard/unpaid_invoice",
      },
    ],
    icon: Receipt,
  },
  {
    main_category: "Clients",
    sub_category: [
      {
        title: "All Clients",
        icon: UserRoundCheck,
        link: "/dashboard/all_clients",
      },
    ],
    icon: Contact,
  },
  {
    main_category: "Business",
    sub_category: [
      {
        title: "Profile",
        icon: ChessQueen,
        link: "/dashboard/profile",
      },
      {
        title: "Invoice Template",
        icon: LayoutTemplate,
        link: "/dashboard/templates",
      },
      {
        title: "Payment Settings",
        icon: CircleDollarSign,
        link: "/dashboard/payment_settings",
      },
    ],
    icon: Handshake,
  },
];
