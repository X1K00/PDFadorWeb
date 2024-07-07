interface Pagina{
    endereco: string
    nome: string
}

function mudarImagem(){
    
}

export default function MinePagina(props: Pagina){
    return(
        <div>
            <button className=" bg-slate-200 rounded-md p-3">
                <img src={props.endereco} alt="" width={200} height={200} />
                <span>{props.nome}</span>
            </button>
        </div>
    )
}