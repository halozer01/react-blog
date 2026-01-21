import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
  const foto = postagem.usuario?.foto || '/sem-foto.png' // fallback evita src=""
  const nome = postagem.usuario?.nome || 'Usuário'
  const data = postagem.data ? new Date(postagem.data) : null

  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img
            src={foto}
            className="h-12 w-12 object-cover rounded-full"
            alt={nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {nome}
          </h3>
        </div>

        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          {data && (
            <p>
              Data:{' '}
              {new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'full',
                timeStyle: 'medium',
              }).format(data)}
            </p>
          )}
        </div>
      </div>

      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem
