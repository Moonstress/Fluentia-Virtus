const misProductos = [
    {
      id: "1",
      idCat: "AM",
      stock: "5",
      img: "/AM_1px2.png",
      nombre: "Plan Mensual Individual Normal",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$144.000",
    },
    {
      id: "2",
      idCat: "AM",
      stock: "5",
      img: "/AM_1px3.png",
      nombre: "Plan Mensual Individual Intensivo",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$216.000",
    },
    {
      id: "3",
      idCat: "AM",
      stock: "5",
      img: "/AM_2px2.png",
      nombre: "Plan Mensual Pareja Normal",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$224.000",
    },
    {
      id: "4",
      idCat: "AM",
      stock: "5",
      img: "/AM_2px3.png",
      nombre: "Plan Mensual Pareja Intensivo",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$336.000",
    },
    {
      id: "5",
      idCat: "AM",
      stock: "5",
      img: "/AM_3px2.png",
      nombre: "Plan Mensual Grupal Normal",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$224.000",
    },
    {
      id: "6",
      idCat: "AM",
      stock: "5",
      img: "/AM_3px3.png",
      nombre: "Plan Grupal Mensual Intensivo",
      descripcion: [
        "Sesiones personalizadas de 1 hora 15min",
        "1 sesión presencial y 1 online",
        "Clases por Skype o Zoom",
        "Utilización de Google Classroom",
        "Todos los materiales incluidos",
      ],
      precio: "$336.000",
    },
  ];
  
  export default misProductos;
  

  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(misProductos);
      }, 100);
    });
  };
  
  //Creamos una nueva función similar a la anterior pero que nos retorne un solo item:
  export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            console.log("Fetched product:", producto);
            resolve(producto);
        }, 100);
    });
};
  
  //Creamos una nueva función que retorna toda la categoría:
  export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productosCategoria = misProductos.filter(
          (prod) => prod.idCat === idCategoria
        );
        resolve(productosCategoria);
      }, 100);
    });
  };
  