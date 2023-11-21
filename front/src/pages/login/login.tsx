import './login.css'

export const Login = () => {

    return(
        <div className="main-container">
            <div className="login-container">

                <div className='title'>
                    <p style={{color: "var(--bronw)"}}>Bienvenido a&nbsp;</p>
                    <p style={{fontFamily: "petite-formal-script", fontSize: "1.4rem", color: "var(--bronw)"}}>
                        Phovery
                    </p>
                </div>
                <div className="input-container">
                    
                    <input
                        type="text"
                        placeholder='Usuario'
                    />

                </div>

                <div className="input-container">
                    
                    <input 
                        type="text"
                        placeholder='Contraseña'
                    />

                </div>
                
                <button 
                    className='btn-blue'
                    onClick={() => {
                        console.log("prueba")
                    }} 
                >
                    
                    <p>Ingresar</p>
                </button>
                
            </div>
        </div>
    )
}