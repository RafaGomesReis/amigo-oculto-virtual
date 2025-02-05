type Props = {
    params: {
        id: string;
    }
}

const page = ({params}: Props) => {
    return (
        <main className="flex flex-col  text-left max-w-lg p-5 ">
            <header>
                <h1 className="text-2xl font-bold text-blue-800 p-1">amigo secreto</h1>
                <div className="text-center w-full max-w-lg p-5">
                    <h2 className="text-4xl font-bold text-green-700 p-1">titulo do evento</h2>
                    <p className="text-sm mb-5">Descrição do evento</p>
                </div>
            </header>
            ...
            <footer>Criado Por R12Reis</footer>


        </main>
    )

}
export default page;