/* ------------------------- variables de productos ------------------------- */
const nombreUsuario = document.querySelector('nav h1')
const formNewProduct = document.querySelector(`#newProduct`)
const title = document.getElementById('title')
const price = document.getElementById('price')
const thumbnail = document.getElementById('thumbnail')
const productoTable = document.querySelector('.productos-handlebars')
const logout = document.querySelector('.logout')


let user
/* ------------------------ logOUT functions ----------------------- */
logout?.addEventListener('click',(event)=>{
    event.preventDefault();
    fetch('./api/login/logout')
            .then(() =>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Hasta luego' ,
                    showConfirmButton: false,
                    timer: 5000
                })
                setTimeout(()=>{
                    location.replace('/api/login')
                }, 2000)
                
            })
})


/* --------------- render de tablas en el template handlebars --------------- */
function renderTable( products){
    return fetch('./views/partials/tables.hbs')
    .then(resp =>resp.text())
    .then(table =>{
        const template = Handlebars.compile(table)
        const htmlProductos = template ({productos:products})
        return htmlProductos
    })
}
/* --------------------------- carga de productos --------------------------- */
formNewProduct?.addEventListener('submit', event =>{
    event.preventDefault()
    const newProducto = {
        title: title.value,
        price: price.value,
        thumbnail: thumbnail.value
    }
    socketCliente.emit('newProduct',newProducto)
})
