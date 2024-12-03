import { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = ({ setListadoState }) => {

    const tituloComponente = "Añadir pelicula";

    const [ peliState, setPeliState ] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;



        // alert titulo + "-" + descripcion;
        // Crear objeto de la pelicula a guardar: 
        let peli = {
            // Objeto Date identificador sea diferente
            // getTime tiempo.
            id: new Date().getTime(),
            titulo,
            descripcion
        };


        // Guardar estado:
        setPeliState(peli);

        // Guardar en el almacenamiento local:
        GuardarEnStorage("pelis", peli);

        // Actualizar el estado del estado Principal:
        setListadoState(elementos => {
            return [ ...elementos, peli ];
        });

        // Opcional: Resetear formulario
        // e.target.reset

    }




    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion) && "has creado la pelicula " + titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input
                    type="text"
                    name='titulo'
                    id="title"
                    placeholder="Titulo" />
                <textarea
                    id="description"
                    name='descripcion'
                    placeholder="Descripción"></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}

export default Crear;