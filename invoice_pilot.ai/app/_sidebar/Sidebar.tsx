import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { items, company_data } from "./data";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import NavUserActions from "../_nav_user_actions/nav_user_actions";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarHeader className="mt-1">
        <div className="flex justify-start items-center">
          <Avatar className="object-cover size-14 rounded-lg border">
            <AvatarImage src={company_data.logo_url} />
            <AvatarFallback className="bg-violet-600 text-white rounded-lg text-2xl">
              IP
            </AvatarFallback>
          </Avatar>

          <article className="flex flex-col ml-2">
            <h4 className="text-2xl text-violet-600 font-semibold">
              InvoicePilot.AI
            </h4>
            <span className="text-sm text-gray-400 italic capitalize font-semibold">
              your invoice partner
            </span>
          </article>
        </div>
      </SidebarHeader>
      <Separator className="mt-2" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md font-semibold capitalize">
            Features
          </SidebarGroupLabel>
          <SidebarMenu>
            {items.map((set) => {
              return (
                <Collapsible key={set.main_category}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={set.main_category}>
                      {set.icon && <set.icon />}
                      <span className="text-md capitalize font-semibold">
                        {set.main_category}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {set.sub_category.map((subItem) => {
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton>
                              {subItem.icon && <subItem.icon />}
                              {subItem.title}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <NavUserActions />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarComponent;
