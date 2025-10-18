import React, { useState } from 'react'
import './Cadastro.css'

export default function Cadastro() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    } else {
      alert('Cadastro realizado com sucesso!')
    }
  }

  return (
    <>
      <div className='cadastro-container'>
        <form onSubmit={handleSubmit}>
          <div className='cadastro-card'>
            <h2 id='card-title'>Cadastro</h2>
            <div>
              <label htmlFor='nome'>Nome:</label>
              <input type='text' id='nome' name='nome' required />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div>
              <label htmlFor='password'>Senha:</label>
              <input
                id='password'
                name='password'
                type='password'
                required
                pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,50}$'
                title='Mínimo 8 caracteres, com ao menos: 1 maiúscula, 1 minúscula, 1 número e 1 símbolo. Sem espaços.'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='confirm-password'>Confirmar Senha:</label>
              <input
                id='confirm-password'
                name='confirm-password'
                type='password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button id='cadastro-button' type='submit'>
              Cadastrar
            </button>
          </div>
        </form>

        <a href='/login'>Voltar ao login</a>
      </div>
    </>
  )
}
