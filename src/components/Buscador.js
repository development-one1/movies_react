import { React, useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
    const [ busqueda, setBusqueda ] = useState('');
    const [ noEncontrado, setNoEncontrado ] = useState(false);

    const buscarPeli = (e) => {
        const valorBusqueda = e.target.value.toLowerCase().trim();
        setBusqueda(valorBusqueda);

        if (valorBusqueda.length === 0) {
            // Restaurar listado original
            const peliculasGuardadas = JSON.parse(localStorage.getItem("pelis")) || [];
            setListadoState(peliculasGuardadas);
            setNoEncontrado(false);
            return;
        }

        // Filtrar películas
        const pelis_encontradas = listadoState.filter(peli =>
            peli.titulo && peli.titulo.toLowerCase().includes(valorBusqueda)
        );

        if (pelis_encontradas.length > 0) {
            setListadoState(pelis_encontradas);
            setNoEncontrado(false);
        } else {
            const peliculasGuardadas = JSON.parse(localStorage.getItem("pelis")) || [];
            setListadoState(peliculasGuardadas);
            setNoEncontrado(true);
        }
    };

    return (
        <div>
            <h3 className="title">Buscador: {busqueda}</h3>
            {noEncontrado && (
                <span className="no-encontrado">No se encontraron películas</span>
            )}
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    id="search_field"
                    name="busqueda"
                    autoComplete="off"
                    onChange={buscarPeli}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    );
};

export default Buscador;
