import createUsuario from "@/app/actions/usuarios";

export default async function FormUsuario() {


    return (
        <div className="flex items-center justify-center">
            <form action={createUsuario} className="rounded-lg p-5 flex flex-col bg-[#414156] text-white">
                <h2>Insert Usuario</h2>
                <input name="nome" placeholder="Name" className="bg-[#34344C] p-2 mt-2 w-60"/> <br />
                <input name="email" placeholder="Email" className="bg-[#34344C] p-2"/> <br />
                <input type="password" name="senha" placeholder="Password" className="bg-[#34344C] p-2"/> <br />
                <button type="submit" className="ml-2 mr-2 h-8 px-2 py-1 cursor-pointer text-[#191927] bg-[#8e72ee] rounded-md shadow-md
                            transform transition-all duration-300 hover:scale-103 hover:shadow-[#191927]">Sign Up Usuario</button>
            </form>
        </div>
    );
}