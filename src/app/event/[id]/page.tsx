import * as api from "@/api/site";
import { Search } from "@/components/site/Search";
import { redirect } from "next/navigation";


type Props = { params: { id: string; } }
const Page = async ({ params }: Props) => {
    const resolvedParams = await Promise.resolve(params);
    const id = parseInt(resolvedParams.id);
    const eventItem = await api.getEvent(id);

    if (!eventItem || !eventItem.status) return redirect('/');
    // console.log(eventItem);
    return (
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h1 className="text-1xl text-blue-600 font-bold">amigo secreto</h1>
                <h2 className="text-3xl text-blue-700 font-bold mt-5 mb-2">{eventItem.title}</h2>
                <p className="text-sm mb-5 bg-green-500 rounded-md p-2">{eventItem.description}</p>
            </header>

            <Search id={eventItem.id} />

            <footer className="mt-5 text-sm">Criado Por R12Reis</footer>
        </main>
    );
}

export default Page;