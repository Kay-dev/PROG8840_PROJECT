import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ArticlesPage() {
    return (
        <div className="flex gap-4 items-center justify-between px-4">
            <h1>Articles</h1>
            <Link href={"/admin/articles/create"}><Button variant={"outline"}>+ Create</Button></Link>
        </div>
    )
}

