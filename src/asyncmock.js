const misProductos = [
    { id: "1", idCat: 'AM', img: "/AM_1px2.png", nombre: "Plan Mensual Individual Normal", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$144.000" },
    { id: "2", idCat: 'AM', img: "/AM_1px3.png", nombre: "Plan Mensual Individual Intensivo", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$216.000" },
    { id: "3", idCat: 'AM',  img: "/AM_2px2.png", nombre: "3", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$224.000" },
    { id: "4", idCat: 'AM',  img: "/AM_2px3.png", nombre: "4", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$336.000" },
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}