"use client"

import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import UserCollectionForm from "@/components/forms/userCollectionForm";

export default function UserCollectionDialog() {

    return (
        <Dialog>
            <DialogTrigger
                className={"bg-fuchsia-700 hover:bg-fuchsia-800 text-white px-4 py-2 rounded-lg font-semibold w-fit ml-auto"}>Add To
                Collection</DialogTrigger>
            <DialogContent>
                <UserCollectionForm/>
            </DialogContent>
        </Dialog>
    )
}
