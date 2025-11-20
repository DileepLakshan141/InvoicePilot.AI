"use client";
import { useTransition } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { user_data } from "../_sidebar/data";
import { GripVertical } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { CircleUserRound, Mail, LogOut } from "lucide-react";
import { logout_user } from "@/functions/auth";
import { toast } from "sonner";

const NavUserActions = () => {
  const { isMobile } = useSidebar();
  const [isPending, startTransition] = useTransition();

  const handle_logout = () => {
    startTransition(async () => {
      const result = await logout_user();
      console.log(result);
      if (result.status === "success") {
        window.location.reload();
      } else {
        toast.error("logout process blocked");
      }
    });
  };

  return (
    <div className="flex justify-between items-center">
      <Avatar className="size-12 rounded-lg border">
        <AvatarImage src={user_data.profile} />
        <AvatarFallback className="text-2xl font-semibold capitalize size-12 rounded-lg">
          DL
        </AvatarFallback>
      </Avatar>
      {/* user details */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Dileep Lakshan</h3>
        <span className="text-sm italic">dileep@gmail.com</span>
      </div>
      {/* dropdown caller */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GripVertical size="15px" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side={isMobile ? "top" : "right"}
          className="w-[270px] mb-2 flex flex-col"
        >
          <div className="flex justify-start items-center p-2">
            <Avatar className="size-12 rounded-lg border">
              <AvatarImage src={user_data.profile} />
              <AvatarFallback className="text-2xl font-semibold capitalize size-12 rounded-lg">
                DL
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col mx-3">
              <h3 className="text-lg font-semibold">Dileep Lakshan</h3>
              <span className="text-sm italic">dileep@gmail.com</span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <CircleUserRound />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handle_logout()}
            disabled={isPending}
          >
            <LogOut />
            {isPending ? "Logging out..." : "Logout"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavUserActions;
