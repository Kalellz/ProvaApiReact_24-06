import './style.scss'
import { useState } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Publicar() {
    const [nome, setNome] = useState()
    const [erro, setErro] = useState()

    async function Click() {
        try {
            const r = await axios.post('http://localhost:5000/inserir', {
                nome: nome
            })
            toast.success('Postado com sucesso')
            setNome('')
        } catch (err) {
            if (err.response.status === 401) {
                setErro(err.response.data.erro)
            }
        }
    }
    return (
        <main>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
            <input type='text' placeholder="Digite o nome do Anime" value={nome} onChange={e => setNome(e.target.value)}></input>
            <button onClick={Click}>Publicar</button>
            <div className="erro">
                {erro}
            </div>
        </main>)
}