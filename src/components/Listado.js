import { useEffect, useState } from 'react';
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {
    const [ editar, setEditar ] = useState(0);

    useEffect(() => {
        console.log("Componente del listado de películas cargado");
        conseguirPeliculas();
    }, []); // Solo al montar

    const conseguirPeliculas = () => {
        const peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
        setListadoState(peliculas);
    };

    const borrarPeli = (id) => {
        const pelis_almacenadas = JSON.parse(localStorage.getItem("pelis")) || [];
        const nuevo_array_pelis = pelis_almacenadas.filter(
            (peli) => peli.id !== parseInt(id)
        );

        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
        setListadoState(nuevo_array_pelis);
    };

    return (
        <>
            {listadoState && listadoState.length > 0 ? (
                listadoState.map((peli) => (
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                        <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                        {editar === peli.id && (
                            <Editar
                                peli={peli}
                                conseguirPeliculas={conseguirPeliculas}
                                setEditar={setEditar}
                                setListadoState={setListadoState}
                            />
                        )}
                    </article>
                ))
            ) : (
                <h2>No hay películas para mostrar</h2>
            )}
        </>
    );
};

export default Listado;
