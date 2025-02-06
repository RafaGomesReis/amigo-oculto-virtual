import * as api from "@/api/site";
import { redirect } from "next/navigation";

type Props = {params: {id: string;}}

export default async function Home({params}: Props) {
    // if (!params?.id) return redirect("/");
    
    console.log(params);

    const eventItem = await api.getEvent(parseInt(params.id));
    // if (!eventItem || !eventItem.status) return redirect("/");

    console.log(eventItem);


    return (
        <main className="flex flex-col text-left max-w-lg p-5">
            <header>
                <h1 className="text-2xl font-bold text-blue-800 p-1">amigo secreto</h1>
                <div className="text-center w-full max-w-lg p-5">
                    <h2 className="text-4xl font-bold text-green-700 p-1">{eventItem.title}</h2>
                    <p className="text-sm mb-5">{eventItem.description}</p>
                </div>
            </header>
            ...
            <footer className="mt-5 text-sm">Criado Por R12Reis</footer>
        </main>
    )
}
