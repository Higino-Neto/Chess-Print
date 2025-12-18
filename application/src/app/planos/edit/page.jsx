import { editPlano } from "@/app/actions/planos";
import { Plano } from "../../../../database/models/tables";

export default async function FormEditPlano({ searchParams }) {

    const id = searchParams.id;

    const plano = await Plano.findByPk(id);

    return (
        <div className="flex justify-center items-center ">
            <form action={editPlano} className="flex flex-col bg-[#414156] p-5 text-white justify-center w-100 border-1 rounded-lg">
                <h2>Alter Plano</h2>
                <input type="hidden" name="id" defaultValue={plano.id} className="bg-[#34344C] m-2 p-2" />
                <input name="nome_plano" placeholder="Nome_plano" defaultValue={plano.nome_plano} className="bg-[#34344C] m-2 p-2" /> <br />
                <input name="preco_plano" placeholder="preco_plano" defaultValue={plano.preco_plano} className="bg-[#34344C] m-2 p-2" /> <br />
                <input name="duracao_dias" placeholder="duracao_dias" defaultValue={plano.duracao_dias} className="bg-[#34344C] m-2 p-2" /> <br />
                <input name="limite_conversoes" placeholder="limite_conversoes" defaultValue={plano.limite_conversoes} className="bg-[#34344C] m-2 p-2" /> <br />
                <button type="submit" className="w-40 h-8 px-2 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Alter</button>
            </form>
        </div>
    );
}