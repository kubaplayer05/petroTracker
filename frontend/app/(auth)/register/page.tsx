import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "@/components/forms/registerForm";

export default function RegisterPage() {

    return (
        <main className={"py-10 flex justify-center items-center"}>
            <Card className={"max-w-[1000px] px-2"}>
                <CardHeader>
                    <CardTitle className={"text-2xl"}>Create new account</CardTitle>
                    <CardDescription className={"text-xl"}>Already have one?
                        <Link className={"text-fuchsia-800"} href={"/login"}> Login</Link>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <RegisterForm/>
                </CardContent>
            </Card>
        </main>
    )
}
