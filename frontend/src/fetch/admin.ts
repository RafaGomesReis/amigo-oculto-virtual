import { req } from "c:/Users/Jonathan/Rafael/projetos/amgs-frontend/frontend/src/fetch/axios"

export const login = async (password: string) => {
    try {
        const json = await req.post('/admin/login', {password});
        return json.data.token as string ?? false;
    } catch(err) {return false}
}
