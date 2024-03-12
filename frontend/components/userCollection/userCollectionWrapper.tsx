import UserCollectionDialog from "@/components/userCollection/userCollectionDialog";
import UserCollectionList from "@/components/userCollection/userCollectionList";

export default function UserCollectionWrapper() {

    return (
        <section className={"flex flex-col gap-10"}>
            <UserCollectionDialog/>
            <UserCollectionList/>
        </section>
    )
}
