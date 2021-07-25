window.onload = () => {
    document.querySelector('#boton').addEventListener("click", () => {
        document.querySelector('#excusa').innerHTML = generadorExcusa();})
}

let generadorExcusa = () => {

    let pronombre = ['Un']
    let sujeto = ['perro','gato','mono','dinosaurio','raton','policia','amigo']
    let verbo = ['se llevó mi','tiró mi', 'prendió fuego mi', 'se comió mi']
    let objeto = ['tarea', 'celular', 'libro', 'notebook', 'comida']
    let condicional = ['en mi casa', 'en la calle', 'en el colegio', 'en el gimnasio']


    let pronombreIndex = Math.floor(Math.random() * pronombre.length);
    let sujetoIndex = Math.floor(Math.random() * sujeto.length);
    let verboIndex = Math.floor(Math.random() * verbo.length);
    let objetoIndex = Math.floor(Math.random() * objeto.length);
    let condicionalIndex = Math.floor(Math.random() * condicional.length);

    return pronombre[pronombreIndex] + ' ' + sujeto[sujetoIndex] + ' ' + verbo[verboIndex] + ' ' + objeto[objetoIndex] + ' ' + condicional[condicionalIndex];
}