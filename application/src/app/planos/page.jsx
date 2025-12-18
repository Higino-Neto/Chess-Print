"use server";

import { redirect } from "next/navigation";
import { Plano } from "../../../database/models/tables";
export const dynamic = 'force-dynamic';

async function deletePlano (formData) {

    'use server';
    const id = formData.get('id');

    const plano = await Plano.findByPk(id);

    await plano.destroy();

    redirect('/planos')
}

export default async function showPlanos() {

    const planos = await Plano.findAll();

    return (
        <div>
            <h1 className="pb-6 text-4xl font-bold bg-clip-text text-transparent 
               bg-gradient-to-t from-[#00d7d2] to-[#8e72ee] text-center mt-8">
                List of Planos
            </h1>
            <div className="border-collapse border border-gray-800 rounded-lg overflow-hidden shadow-lg">
                <table className="w-full">
                    <thead className="bg-[#414156] border-b border-gray-800">
                        <tr>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Nome Do Plano</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Preço do Plano</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Duração do Plano</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Limite de Conversões</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Data de Criação</th>
                            <th className="p-3 text-sm font-semibold tracking-wide text-left text-gray-200">Data de Alteração</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planos.map(plano => (
                            <tr className="odd:bg-[#2B2B3F] even:bg-[#32324F]" key={plano.id}>
                                <td className="p-3 text-sm text-gray-200">{plano.nome_plano}</td>
                                <td className="p-3 text-sm text-gray-200">{plano.preco_plano}</td>
                                <td className="p-3 text-sm text-gray-200">{plano.duracao_dias}</td>
                                <td className="p-3 text-sm text-gray-200">{plano.limite_conversoes}</td>
                                <td className="p-3 text-sm text-gray-200">{plano.createdAt.toLocaleString("pt-BR")}</td>
                                <td className="p-3 text-sm text-gray-200">{plano.updatedAt.toLocaleString("pt-BR")}</td>
                                <td className="flex gap-2">
                                    <form action={'/planos/edit'}>
                                        <input type="hidden" name="id" defaultValue={plano.id} />
                                        <button className="w-40 h-8 px-2 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Edit</button>
                                    </form>

                                    <form action={deletePlano}>
                                        <input type="hidden" name="id" defaultValue={plano.id} />
                                        <button className="w-40 h-8 px-2 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
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
