import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagina1 from './Pagina1'

function App() {
  const[usuario, setUsuario] = useState('')
  const[clave,setClave] = useState('')
  const[logueado, setLogueado] = useState(false)

  function cambiarusuario(evento) {
    setUsuario(evento.target.value)    
  }
  function cambiarclave(evento) {
    setClave(evento.target.value)    
  }

  function Ingresar() {
    
    if (usuario=="admin"&& clave=="admin") {
      alert("Ha iniciado su sesion")  
      setLogueado(true)
    }else{
      alert("sesion no iniciada")  
    }
  }
  if (logueado) {
   
       return (<Pagina1 />)
     
   
    
  }
  return (
    <>
      <h3>INICIO DE SESION</h3>
      <input type = "text" name= "usuario" id="usuario" value={usuario} onChange={cambiarusuario}/>
      <br />
      <br />
      <input type='password' name='clave' id='clave' value={clave} onChange={cambiarclave}/>
      <br />
      <br />
      <button onClick={Ingresar}>Ingresar</button>
      
      
    </>
  )
}

export default App
