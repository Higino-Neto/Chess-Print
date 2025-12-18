

import { redirect } from "next/navigation";
import { Usuario } from "../../../database/models/tables";
export const dynamic = 'force-dynamic';

async function deleteUsuario(formData) {
    'use server';

    const id = formData.get('id');

    const usuario = await Usuario.findByPk(id);
    await usuario.destroy();

    console.log("a");

    redirect('/usuarios')
}

export default async function showUsuarios() {

    const usuarios = await Usuario.findAll();

    return (
        <div>
            <h1 className="pb-6 text-4xl font-bold bg-clip-text text-transparent 
               bg-gradient-to-t from-[#00d7d2] to-[#8e72ee] text-center mt-8">
                Lista de Usuarios
            </h1>

            <form action={'/usuarios/new'}>
                <button type="submit" className="m-1 h-8 px-6 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Create new</button>
            </form>
            <div className="border-collapse border border-gray-800 rounded-lg overflow-hidden shadow-lg">
                <table className="w-full">
                    <thead className="bg-[#414156] border-b border-gray-800">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">ID</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Name</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Email</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Password</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Edit</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {usuarios.map(usuario => (
                            <tr className="odd:bg-[#2B2B3F] even:bg-[#32324F]" key={usuario.id}>
                                <td className="p-3 text-sm text-gray-200">{usuario.id}</td>
                                <td className="p-3 text-sm text-gray-200">{usuario.nome}</td>
                                <td className="p-3 text-sm text-gray-200">{usuario.email}</td>
                                <td className="p-3 text-sm text-gray-200">{usuario.senha}</td>
                                <td className="">
                                    <form action={'/usuarios/edit'}>
                                        <input type="hidden" name="id" defaultValue={usuario.id} />
                                        <button className=" h-8 px-6  py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Edit</button>
                                    </form>

                                </td>
                                <td>
                                    <form action={deleteUsuario}>
                                        <input type="hidden" name="id" defaultValue={usuario.id} />
                                        <button className="h-8 px-6 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
