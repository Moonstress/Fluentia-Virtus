import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");

    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const manejadorFormulario = async (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, complete todos los campos")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los Email no Coinciden");
            return;
        }

        const order = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date(),
        }

        try {
            await Promise.all(
                order.items.map(async (productoOrder) => {
                    const productoRef = doc(db, "clases", productoOrder.id);
                    const productoDoc = await getDoc(productoRef);
                    const stockActual = productoDoc.data().stock;

                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrder.cantidad,
                    });
                })
            );

            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            vaciarCarrito();
            setError(""); // Reset the error if successful
        } catch (error) {
            console.log("Error:", error);
            setError("Se produjo un error en el proceso. Intente nuevamente.");
        }
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre}
                        </p>
                        <p> Precio: $ {producto.item.precio}</p>
                    </div>
                ))}
                <hr />
                <div className="form-group">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Teléfono:</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">E-mail:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirmar E-Mail:</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}> {error}</p>}
                <button type="submit">Finalizar Compra</button>
            </form>

            {
                orderId && (
                    <strong>Gracias por tu compra. Tu número de orden es {orderId}</strong>
                )

            }
        </div>
    )
}

export default Checkout