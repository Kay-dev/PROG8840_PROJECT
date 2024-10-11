import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function SideNavigation() {
  return (
  <aside className="w-2/12 border-r h-screen p-4">
    <ul className="flex flex-col gap-2 ">
        <li className="flex flex-col gap-2">
            <Link href={"/admin/projects"} className="flex gap-2 items-center hover:underline text-base font-medium">
                Projects
            </Link>
            <Link href={"/admin/articles"} className="flex gap-2 items-center hover:underline text-base font-medium">
                Articles
            </Link>
        </li>
    </ul>
    </aside>
    )
}

