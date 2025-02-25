import { getCookie } from "cookies-next";
import { req } from "c:/Users/Jonathan/Rafael/projetos/amgs-frontend/frontend/src/fetch/axios"

export const login = async (password: string) => {
    try {
        const json = await req.post('/admin/login', {password});
        return json.data.token as string ?? false;
    } catch(err) {return false}
};


export const getEvents = async () => {
    const token = getCookie('token');
    const json = await req.get('/admin/events', {
        headers: { 'Authorization': `Token ${token}` }
    })
    return json.data.events as Event[] ?? [];
}
