"use client"
import { Editor } from "novel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useCallback } from "react";
import Link from "next/link";


export default function ArticleForm() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const updateContent = useCallback((data)=>{
        setContent(data.getJSON())
    },[])


    const handleSubmit = () => {
        console.log(title, content)
    }

    return (
        <>
            <div>
                <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="mt-4">
            <Label htmlFor="content">Content</Label>
            <Editor
                editorProps={{}}
                onDebouncedUpdate={updateContent}
                defaultValue={content}
                className="border rounded pb-8" disableLocalStorage
            />
        </div>

        <div className="mt-4 flex gap-4">
            <Button> <Link href={"/admin/articles"}> Cancel</Link></Button>
            <Button variant={"outline"} onClick={handleSubmit}>Save</Button>
        </div>

    </>

    )
}

