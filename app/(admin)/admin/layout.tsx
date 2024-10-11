import AuthButton from "@/components/header-auth";
import SideNavigation from "@/components/side-navigation";
export default function AdminLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="flex w-full">
      <SideNavigation />
      <section className="w-10/12 p-4">{children}</section>
     
    </div>
    );
}
