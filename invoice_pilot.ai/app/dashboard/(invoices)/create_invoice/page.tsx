import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CreateInvoice = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start p-4">
      {/* top stripe header */}
      <div className="w-full flex justify-start items-center">
        <Button variant="outline" asChild className="w-8 h-8 text-3xl">
          <SidebarTrigger />
        </Button>
        <h2 className="text-3xl font-semibold ml-3">Create Invoice</h2>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default CreateInvoice;
