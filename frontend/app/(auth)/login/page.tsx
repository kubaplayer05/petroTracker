import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import LoginForm from "@/components/forms/loginForm";
import {Toaster} from "@/components/ui/toaster";

export default function LoginPage() {
    return (
        <main className={"py-10 flex justify-center items-center"}>
            <Card className={"max-w-[1000px] px-2"}>
                <CardHeader>
                    <CardTitle className={"text-2xl"}>Login to your account</CardTitle>
                    <CardDescription className={"text-xl"}>Do not have account?
                        <Link className={"text-fuchsia-800"} href={"/register"}> Create it</Link>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm/>
                </CardContent>
            </Card>
        </main>
    )
}
