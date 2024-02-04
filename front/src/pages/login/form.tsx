import './form.css'

export const ResgisterForm = () => {

    return(

        <form className='form-container' method="post">
            <h1>Registrate</h1>
            <fieldset className='inputs-container'>
                <legend><span className="number"></span> Informacion basica</legend>
                <label >Nombre:</label>
                <input type="text" />
                <label >Correo elecctronico:</label>
                <input type="email" />
                <label >Contraseña:</label>
                <input type="password" />
                <label>Edad:</label><br/>
                <input className="radio" type="radio"  /><label className="light">Menor de 18</label><br/>
                <input className="radio" type="radio"  /><label className="light">Mayor de 18</label><br/>
            </fieldset>
            <button className="form-button" type="submit">
                <p style={{color: "var(--bronw)"}}>
                    Crear cuenta de 
                </p>
                <p style={{fontFamily: "petite-formal-script", fontSize: "1.4rem", color: "var(--bronw)"}}>
                    &nbsp;Phovery
                </p>
            </button>
        </form>
    )
}
