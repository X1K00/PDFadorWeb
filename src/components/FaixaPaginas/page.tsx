import MinePagina from "../MinePagina/page";



export default function FaixaPaginas(){
    return(
        <div className={`
            bg-slate-50 text-center border border-red-700 text-red-700 font-semibold
            gap-3 p-3 rounded-md h-screen
            flex justify-normal flex-col overflow-y-auto
        `}>
            <MinePagina endereco="https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg" nome="page 1" />
            <MinePagina endereco="https://i.pinimg.com/236x/75/dc/ea/75dcea505efe11bf2e62e682bc5055ad.jpg" nome="page 2" />
            <MinePagina endereco="https://i.pinimg.com/564x/d4/5f/25/d45f25d553159d59fee7e31e3ebd8ebe.jpg" nome="page 3" />
            <MinePagina endereco="https://i.pinimg.com/236x/41/a6/f0/41a6f0ab59965db1d5199a4f349afb29.jpg" nome="page 4" />
            <MinePagina endereco="https://i.pinimg.com/236x/82/71/ca/8271cad1c994a4e1e2619325457b3f9b.jpg" nome="page 5" />
            <MinePagina endereco="https://i.pinimg.com/236x/01/a3/47/01a3471f888cbf44ebcb39232725360a.jpg" nome="page 6" />
            <MinePagina endereco="https://i.pinimg.com/236x/df/8c/f7/df8cf7509bebf0945d750bf0fbcab6ac.jpg" nome="page 7" />
            <MinePagina endereco="https://i.pinimg.com/236x/44/02/c2/4402c277721e89347632189e55eb1c9b.jpg" nome="page 8" />
        </div>
    )
}