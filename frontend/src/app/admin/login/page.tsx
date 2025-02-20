"use client";

import { useState } from "react";
import { InputField } from "../../../components/admin/inputField";
import { Button } from "../../../components/admin/button";
import { login } from "../../../fetch/admin";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [ warning, setWarning] = useState("");
    
    const handleLoginButton = async() => { 
        if (password) {
            setWarning("");
            setLoading(true);
            const token = await login(password);
            setLoading(false);

            if (!token) {
                setWarning("acesso negado");
            } else {
                setCookie("token", token);
                router.push("/admin");
            }

        }

    }

    return (
        <div className="text-center py-4">
            <p className="text-lg">Qual a senha secreta?</p>
            <div className=" mx-auto max-w-lg">  
                <InputField
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite a senha"
                disabled={loading}
                />
                <Button
                value={loading ? "carregando..." : "Entrar"}
                onClick={handleLoginButton}
                disabled={loading}
                />
                {warning &&
                    <div className="border border-dashed border-red-500 p-3">{warning}</div>
                }
            </div>
        </div>
    )
}

export default Page;