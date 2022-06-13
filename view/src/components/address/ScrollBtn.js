

export const ScrollBtn = ({container, direction}) => {

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

    return (
        <button id={`scroll-btn-${direction}`} onClick={scroll} />
    )
}