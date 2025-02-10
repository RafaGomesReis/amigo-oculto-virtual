import * as api from "@/api/site";
import { redirect } from "next/navigation";
import { Suspense } from 'react';

type Props = { params: { id: string; } }
const Page = async ({ params }: Props) => {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <PageContent id={params.id} />
        </Suspense>
    );
}

type ContentProps = { id: string }
async function PageContent({ id }: ContentProps) {
    const numericId = Number(id);
    const eventItem = await api.getEvent(numericId);
    if (!eventItem || !eventItem.status) return redirect('/');

    return (
        <main className="text-center mx-auto max-w-lg p-5">
            <header>
                <h1 className="text-2xl text-blue-400">amigo secreto</h1>
                <h2 className="text3xl mt-5 mb-2">{eventItem.title}</h2>
                <p className="text-sm mb-5">{eventItem.description}</p>
            </header>


            ...

            <footer className="mt-5 text-sm">Criado Por R12Reis</footer>
        </main>
    );
}

export default Page;