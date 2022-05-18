import { ColorDropdown } from "./ColorDropdown";
import { SizeDropdown } from "./SizeDropdown";


export function ProductInfo({product}) {
    
    return(
        <div>
            <h1>{product.name}</h1>
            <p className="product-price">{`${product.price}`}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-dropdown-container">
                <ColorDropdown product={product} />
                <SizeDropdown product={product} />
            </div>
        </div>
    )
}