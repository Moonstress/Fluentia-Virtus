import './Map.css'

const Map = () => {

    const productos = [
        { id: 1, img: "/AM_1px2.png", nombre: "Plan Mensual Individual Normal", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$144.000" },
        { id: 2, img: "/AM_1px3.png", nombre: "Plan Mensual Individual Intensivo", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$216.000" },
        { id: 3, img: "/AM_2px2.png", nombre: "3", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$224.000" },
        { id: 4, img: "/AM_2px3.png", nombre: "4", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex obcaecati, ad, repellendus error unde eaque magni rerum magnam libero aut aliquid perferendis rem asperiores excepturi ratione adipisci aliquam. Rerum, officia.", precio: "$336.000" },
        

    ]
    return (
        <div>
        {
            productos.map(producto => (
                <div className="card" key={producto.id}>
                    <img src={producto.img} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <div>
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">{producto.descripcion}</p>
                            <a href="#" className="btn btn-primary">Ver Detalles</a>
                            
                        </div>

                    </div>
                </div>
            ))

        }
        </div>
        )
}

export default Map