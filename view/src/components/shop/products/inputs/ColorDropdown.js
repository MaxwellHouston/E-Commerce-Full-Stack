import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiProducts from "../../../../utilities/api/apiProducts";

export function ColorDropdown({product}) {

    const [colors, setColors] = useState([]);
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const getColors = useCallback(
        async () => {
            let name = product.name;
            let size = product.size;
            const colorOptions = await apiProducts.fetchProductByNameSize(name, size)
            setColors(colorOptions);
        },[product]
    );   

    useEffect(() => {
        if(product.id){
            getColors();
            setValue(product.id);
        }
    },[getColors, product]);

    const renderColors = () => {
        if(colors){
            let dropdownArray = colors.map(color => <option key={color.id} value={color.id} > {color.color} </option>);
            return dropdownArray;
        } else {
            return (
                <option>Loading...</option>
            )
        }
    }

    const handleColorChange = ({target}) => {
        navigate(`/shop/${product.sport}/${product.category}/${target.value}`);
    };

    return(
        <fieldset className="product-dropdown">
            <label for='colors'>Color:</label>
            <select name='colors' value={value} onChange={handleColorChange}>
                {renderColors()}
            </select>
        </fieldset>
    )
}