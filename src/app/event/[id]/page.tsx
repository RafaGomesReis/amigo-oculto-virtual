
import Home from "@/components/home";

type Props = {params: {id: string;}}

const page = async ({params}: Props) => {
    const asd = await params;
    
    return (
        <Home params={asd}/>
    )
}

export default page;