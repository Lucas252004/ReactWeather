import React from "react";
import Info from "./Info";
import { useState } from "react";
const Form = ()=>{
    //Creo un objeto para guardar los estados
    let state = {
        temperature: '',
        description: '',
        humity:'',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }
    //Creo un array con useState para almacenar los valores de la temperatura
    //para despues pasar el array al archivo Info donde se mostraran los valores
    const [weather, setWeather] = useState([])
    //Funcion para consultar a la api de openweather
    const getWeather = async e =>{
        e.preventDefault()
        //Obtengo los valores del formulario
        const city = e.target[0].value
        const country = e.target[1].value
        //Si los campos han sido rellenados, que ejecute la consulta a la api
        if(city && country){
            //Consulta a la API
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=eafc45849eb0ce039a5584602049452c&units=metric`
            const response = await fetch(url)
            //Almaceno la informacion en formato json
            const data = await response.json()
            //Guardo los valores al objeto state
            state = {
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            }
            //ejecuto la funcion setWeather para guardar los valores del objeto al array
            setWeather([state.temperature, state.description, state.humidity, state.wind_speed, state.city, state.country, state.error])
        }else{
            state = {error: 'Por favor, complete los campos'}
        }

    }

    return(
    <div>
    <div className="card card-body text-center">
       <form onSubmit={(e)=>getWeather(e)}>
        <br /><div className="form-group">
            <input type="text" name="city" placeholder="Nombre de la ciudad" className="form-control" autoFocus/>
            <br /><input type="text" name="country" placeholder="Nombre del pais ej: ar " className="form-control" autoFocus/>
        </div>
        <br /><button className="btn btn-primary btn-block">
            Obtener Clima
        </button>
       </form>
       
    </div>
    {/* Llamo al componente Info para pasarle el array por props */}
    <Info>{weather}</Info>
   
    </div>
    )
}
export default Form