import React from "react";
const Info = (props)=>{
    return(
        //Verifico con un ternario si la informacion esta vacia o no
        //En caso que haya informacion (se consulto a la API, muestre los valores por pantalla)
        //Caso contrario no mostrara informacion de cierta ciudad por pantalla
        props.children.length != 0 ?(
            <div className="card card-body">
            <p>
                Ubicacion: {props.children[4]}, {props.children[5]}
            </p>
            <p>Temperatura: {props.children[0]}°</p>
            <p>Humedad: {props.children[2]}</p>
            <p>Viento: {props.children[3]}</p>
        </div>
        ):(
            <span></span>
        )
        
    )
}
export default Info