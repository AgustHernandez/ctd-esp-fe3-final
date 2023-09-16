import React, { useEffect, useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [consulta, setConsulta] = useState("")
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [textoConsulta, setTextoConsulta] = useState("");
  const [validar, setValidar] = useState(true);
  const [enviado, setEnviado] = useState(false);

const emailValido = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  const guardarConsulta = (e)=>{
    e.preventDefault();
    setEnviado(true);
    if(nombre.length > 5 && emailValido.test(email) && textoConsulta.length > 0) {
      agregarConsulta({nombre, email, textoConsulta})
      setValidar(true)
    } else {
      setValidar(false)
    }
  }

  const onChangeNombre = (e) => {
      setNombre(e.target.value)
  }
  const onChangeEmail = (e) => {
      setEmail(e.target.value)
  }
  const onChangeTextoConsulta = (e) => {
      setTextoConsulta(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('consulta', JSON.stringify(consulta))
    console.log(consulta)
  }, [consulta])



  const agregarConsulta = (consulta)=> {
    setConsulta(consulta);
  }


  return (
    <div className="formContact">
      <form onSubmit={guardarConsulta}>
        <label>Nombre y Apellido</label>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChangeCapture={(e)=>onChangeNombre(e)} />
        <label>Email</label>
        <input type="text" placeholder="Ingrese su email" value={email} onChangeCapture={(e)=>onChangeEmail(e)} />
        <label>Consulta</label>
        <input type="text" placeholder="Ingrese su consulta" value={textoConsulta} onChangeCapture={(e)=>onChangeTextoConsulta(e)} />
        <div className="buttonsForm">  
          <button className="buttonForm" type="submit">Enviar</button>            
        </div>
        <div className="mensajesForm">
          { enviado ? 
            <div>
            { validar ?
                  <h3 className="msjGracias">Gracias {nombre}, te contactaremos cuanto antes vía mail</h3>
                  :
                  <h3 className="msjError">Por favor verifique su información nuevamente</h3>
                }
            </div>
            :
            <div></div>
          }
        </div>
      </form>
    </div>
  );
};

export default Form;
