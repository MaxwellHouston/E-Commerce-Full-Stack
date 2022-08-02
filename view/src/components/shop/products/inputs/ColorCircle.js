import CircleIcon from '@mui/icons-material/Circle';

export const ColorCircle = ({color, value, colorChange, current}) => {

    const handleClick = () => {
        colorChange(value);
    }

    const circleStyle = {
        color: color === 'No Color' ? '#d4d4d4' : color,
        borderBottom: current === value ? '2px solid #0f0f59' : 'none'

    }

    return(
        <div className='color-wrapper'>
            <span className='color-tooltip'>{color === 'No Color' ? 'None' : color}</span>
            <CircleIcon className='color-circle' style={circleStyle} onClick={handleClick} />
        </div>

    )
}