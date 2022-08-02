import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiProducts from "../../../../utilities/api/apiProducts";
import { ColorCircle } from "./ColorCircle";

export function ColorDropdown({product}) {

    const [colors, setColors] = useState([]);
    const [current, setCurrent] = useState('');

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
            setCurrent(product.id);
        }
    },[getColors, product]);

    const renderColors = () => {
        if(colors){
            let colorArray = colors.map(color => <ColorCircle key={color.id} color={color.color} value={color.id} colorChange={colorChange} current={current} />);
            return colorArray;
        } else {
            return (
                <p>Loading...</p>
            )
        }
    }

    const colorChange = (id) => {
        navigate(`/shop/${product.sport}/${product.category}/${id}`);
    };

    return(
        <fieldset className="product-dropdown" id='color-dropdown'>
            <label>Color: </label>
            {renderColors()}
        </fieldset>
    )
}
