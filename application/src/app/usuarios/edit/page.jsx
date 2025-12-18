import { editUsuario } from "@/app/actions/usuarios";
import { Usuario } from "../../../../database/models/tables";

export default async function FormEditUsuario({ searchParams }) {

    const id = searchParams.id;

    const usuario = await Usuario.findByPk(id);

    return (
        <div className="flex justify-center items-center ">
            <form action={editUsuario} className="flex flex-col bg-[#414156] p-5 text-white justify-center w-100 border-1 rounded-lg">
                <h2>Alter Usuario</h2>
                <input type="hidden" name="id" defaultValue={usuario.id} className="bg-[#34344C] m-2 p-2" />
                <input name="nome" placeholder="Name" defaultValue={usuario.nome} className="bg-[#34344C] m-2 p-2" /> <br />
                <input name="email" placeholder="Email" defaultValue={usuario.email} className="bg-[#34344C] m-2 p-2" /> <br />
                <input type="password" name="senha" placeholder="Password" defaultValue={usuario.senha} className="bg-[#34344C] m-2 p-2" /> <br />
                <button type="submit" className="w-40 h-8 px-2 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Alter</button>
            </form>
        </div>
    );
}