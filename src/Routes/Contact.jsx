import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='titles'>Queres saber algo más?</h2>
      <p className='pContact'>Envianos tu consulta y nos pondremos en contacto</p>
      <Form/>
    </div>
  )
}

export default Contact