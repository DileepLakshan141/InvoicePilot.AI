import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
    title: "Home",
    url: "/dashboard/main",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
