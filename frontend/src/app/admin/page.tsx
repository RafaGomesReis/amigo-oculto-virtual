import { redirect } from 'next/navigation';
import * as api from '../../fetch/server';
import { AdminPage } from '../../components/admin/adminPage';

const Page = async () => {

    
    return <AdminPage />
    
}

export default Page;