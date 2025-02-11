"use client"

import { escapeCPF } from "@/utils/EscapeCpf";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
}

export const SearchForm = ({ onSearchButton }: Props) => {
    const [cpfInput, setCpfInput] = useState<string>('');
    return(
        <div>
            <p className="mb-3 text-xl">Digite o CPF do participante</p>
            <input
                type="text"
                inputMode="numeric"
                placeholder="digite seu cpf"
                className="w-full p-3 bg-gray-200 text-black rounded-lg text-4xl outline-none"
                autoFocus
                value={cpfInput}
                onChange={e => setCpfInput(escapeCPF(e.target.value))}
            />
            <button
                className="w-full mt-2 p-1 bg-blue-500 text-white text-4xl rounded-md border-b-4 border-blue-700 active:border-0"
                onClick={() => onSearchButton(cpfInput)}
            >Entrar</button>
        </div>
    )
}
