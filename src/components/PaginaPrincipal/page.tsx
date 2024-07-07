import FaixaPaginas from "../FaixaPaginas/page";

interface ImagemAberta{
    endereco?: string
    nome?: string
}

export default function PaginaPrincial(props: ImagemAberta){
    return(
        <div className="flex flex-wrap">
            <FaixaPaginas />
            <div className="flex h-screen p-5">
                <img src={props.endereco} alt="home aranha" />
            </div>
        </div>
    )
}