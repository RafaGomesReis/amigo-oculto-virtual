import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'Amigo Secreto - Adm'
}

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
    return (
        <div>
            <header className=" bg-blue-900 text-center py-5">
                <h3 className=" text-white text-3xl font-bold [-webkit-text-stroke:1px_black] ">Amigo secreto</h3>
                <h4 className=" text-white text-base font-bold">Painel de Controle</h4>
            </header>
            <main className=" w-full mx-auto max-w-3xl p-3">{children}</main>
        </div>
    )
}

export default Layout;