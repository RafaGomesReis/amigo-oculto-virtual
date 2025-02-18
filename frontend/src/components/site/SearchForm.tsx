"use client"

import { escapeCPF } from "../../utils/escapeCPF";
import { useState } from "react";

type Props = {
    onSearchButton: (cpf: string) => void;
    loading: boolean;
}

export const SearchForm = ({ onSearchButton, loading }: Props) => {
    const [cpfInput, setCpfInput] = useState<string>('');
    return(
        <div>
            <p className="mb-3 text-xl">Digite o CPF do participante</p>
            <input
                type="text"
                inputMode="numeric"
                placeholder="digite seu cpf"
                className="w-full p-3 bg-gray-200 text-black rounded-lg text-4xl outline-none disabled:opacity-50"
                autoFocus
                value={cpfInput}
                onChange={e => setCpfInput(escapeCPF(e.target.value))}
                disabled={loading}
            />
            <button
                className="w-full mt-2 p-1 bg-blue-500 text-white text-4xl rounded-md border-b-4 border-blue-700 active:border-0 disabled:opacity-50"
                onClick={() => onSearchButton(cpfInput)}
                disabled={loading}
            >{loading ? 'Buscando' : 'Entrar'}</button>
        </div>
    )
}
