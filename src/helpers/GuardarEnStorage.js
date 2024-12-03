export const GuardarEnStorage = (clave, elemento) => {
    // conseguir los elementos que ya tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Ya tengo un array de objetos
    // console.log elementos

    // comprobar si es un array de objetos
    if (Array.isArray(elementos)) {
        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    } else {
        // Crear un array con la nueva peli
        elementos = [ elemento ];
    }

    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devolver objetos guardados
    return elemento;
}
