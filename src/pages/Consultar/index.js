import './style.scss'
import { useState, useEffect } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export default function Consultar() {
    const [anime, setAnime] = useState([])
    async function listarTodosAnimes() {
        let resposta = await axios.get('http://localhost:5000/anime')
        return resposta.data
    }
    async function Click() {
        const resp = await listarTodosAnimes()
        setAnime(resp)
    }
    return (
        <main className='page-Consultar'>
            <div className='botao'>
            <button onClick={Click}>Consultar</button>
            </div>
            {anime.map(item => <tr className='tabela'> 
                <th>{item.id}: </th>
                <td>{item.nome}</td>
            </tr>
            )}
            
        </main>
    )
}