import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiProducts from "../../../../utilities/api/apiProducts";

export function SizeDropdown({product}) {
    const [sizes, setSizes] = useState([]);
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const getSizes = useCallback(
        async () => {
            let name = product.name;
            let color = product.color;
            const sizeOptions = await apiProducts.fetchProductByNameColor(name, color)
            setSizes(sizeOptions);
        },[product]
    );   

    useEffect(() => {
        if(product.id){
            getSizes();
            setValue(product.id);
        }
    },[getSizes, product]);


    const renderSizes = () => {
        if(sizes){
            let dropdownArray = sizes.map(size => <option key={size.id} value={size.id} > {size.size} </option>);
            return dropdownArray;
        } else {
            return (
                <option>Loading...</option>
            )
        }
    };

    const handleSizeChange = ({target}) => {
        navigate(`/shop/${product.sport}/${product.category}/${target.value}`);
    };

    return(
        <fieldset className="product-dropdown">
            <label for='size'>Size: </label>
            <select name='size' value={value} onChange={handleSizeChange}>
                {renderSizes()}
            </select>
        </fieldset>
    )
}