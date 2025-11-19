import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarComponent from "@/app/_sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <SidebarProvider>
        <SidebarComponent />
        <main className="m-3 rounded-lg w-full min-h-[800px] bg-white">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
