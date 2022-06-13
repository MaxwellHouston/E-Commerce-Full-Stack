import { ScrollBtn } from "./ScrollBtn";


export const SlidingContainer = ({cardList, sliderId}) => {

    const container = document.getElementById('address-slider');

    const checkScroll = () => {
        if(container.scrollLeft <= 15) {
            hideLeftBtn();
        } else if (container.offsetWidth + container.scrollLeft >= container.scrollWidth - 15) {
            hideRightBtn();
        } else {
            showBtns();
        }
    };

    const hideLeftBtn = () => {
        const btn = document.getElementById(`scroll-btn-left`);
        btn.style.display='none';
    };

    const hideRightBtn = () => {
        const btn = document.getElementById(`scroll-btn-right`);
        btn.style.display='none';
    };

    const showBtns = () => {
        const leftBtn = document.getElementById(`scroll-btn-left`);
        const rightBtn = document.getElementById(`scroll-btn-right`);
        if(leftBtn.style.display === 'none')  leftBtn.style.display = 'block';
        if(rightBtn.style.display === 'none')  rightBtn.style.display = 'block';    
    };

    const scrollable = () => {
        if(!cardList) return;
        if(cardList.length >= 3){
            return <ScrollBtn container={container} direction={'right'} />
        } 
    }

    return (
        <div className="slider-container">
            <ScrollBtn container={container} direction={'left'} />
            <div id={sliderId} onScroll={checkScroll} > 
                {cardList}
            </div>
            {scrollable()}
        </div>
    )
}