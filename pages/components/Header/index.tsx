import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <Image
      // o "src" se deve passar a partir da página public, não precisando voltar página por página
        src="/logo.svg"
        alt="Logo do site"
        width={100}
        height={20}
        onError={(e) => console.error("error: ", e.target)} //caso de erro ele exibe no console
      />
      <div>
        <ul>
          <li>Home</li>
          <li>Sobre Mim</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  )
}
