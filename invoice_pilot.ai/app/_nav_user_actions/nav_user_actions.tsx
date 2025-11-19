import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { user_data } from "../_sidebar/data";
import { GripVertical } from "lucide-react";

const NavUserActions = () => {
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
        <DropdownMenuContent side="right"></DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavUserActions;
