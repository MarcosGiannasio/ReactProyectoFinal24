import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd}) => {

          const [count, setCount] = useState(initial)

          const increment = () => {
                    if (count < stock) {
                              setCount( prev => prev + 1 )
                    }
          }

          const decrement = () => {
                    if (count > 1) {
                              setCount( prev => prev - 1 )
                    }
          }

          return (
                    <div className="d-inline-block">
                              <div className="d-flex gap-2 align-items-center justify-content-center" style={{fontSize:10}}>
                              <button className="rounded" onClick={decrement}> ➖ </button>
                              <h1 className="h4 mt-2" style={{fontSize:18}}>{count}</h1>
                              <button className="rounded" onClick={increment}> ➕ </button>
                              </div>
                              <button className='butons btn btn-outline-secondary btn-sm my-3' 
                              disabled={stock <= 0} onClick={()=> onAdd(count) }>Agregar al carrito</button>

                    </div>
          );
}

export default ItemCount;     