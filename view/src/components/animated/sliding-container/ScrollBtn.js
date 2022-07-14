import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const ScrollBtn = ({container, direction, style, distance}) => {

    const scroll = () => {
        let scrollLength = 0;
        const scrollAction = setInterval(() => {
            if(direction === 'left'){
                container.scrollLeft -= distance;
            } else {
                container.scrollLeft += distance;
            }
            scrollLength += 50;
            if(scrollLength >= 100){
                clearInterval(scrollAction);
            }
        }, 50);        
    }

    return (
        <button id={`scroll-btn-${direction}`} onClick={scroll}>
           {direction === 'right' ?
                <ArrowForwardIosIcon style={style} /> 
                :
                <ArrowBackIosIcon style={style} />
            }
        </button>
    )
}


/*
    const scroll = () => {
        let scrollLength = 0;
        const scrollAction = setInterval(() => {
            if(direction === 'left'){
                container.scrollLeft -= 50;
            } else {
                container.scrollLeft += 50;
            }
            scrollLength += 10;
            if(scrollLength >= 100){
                clearInterval(scrollAction);
            }
        }, 50);        
    }

*/