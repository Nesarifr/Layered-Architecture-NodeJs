const productos = document.querySelector('.contenedor-varios')
const carrito = []
// productoCompra.addEventListener('submit', event =>{
//         event.preventDefault()
//         const product = {
//             nombre: nombre.value,
//             descripcion: descripcion.value,
//             codigo: codigo.value,
//             foto: foto.value,
//             precio: precio.value,
//             stock: stock.value,
//             timestamp: new Date().toLocaleString()
//         }

//         const url = './productos'
//         const configuraciones = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': autorizacionAdminitrador
//             },
//             body: JSON.stringify(product)
//         }
//         fetch(url,configuraciones )
//         .then(resp => resp.json())
//         .then(data=>{
//             if(data.error){
//                 mostrarError(data.descripcion)
//             };
//         })
//         newProduct.reset()
//     })

console.log(productos);
productos.addEventListener('click', e =>{
        addCarrito(e)
    })

const addCarrito = (e)=>{
    if(e.target.classList.contains('btn-productos')){
        console.log(e.target.parentElement);
        setCarrito(e.target.parentElement);
    }
    e.stopPropagation();


}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-productos').dataset.id
    }
    console.log(producto);
}