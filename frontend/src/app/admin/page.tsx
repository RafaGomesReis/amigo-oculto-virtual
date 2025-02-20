import { redirect } from 'next/navigation';
import * as api from '../../fetch/server';

const Page = async () => {

    const logged = await api.pingAdmin();
    if(!logged) return redirect('/admin/login');

    return (
        <div>
            painel ADM
        </div>
    )
}

export default Page;