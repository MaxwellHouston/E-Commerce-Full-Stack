import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export const DropdownButton = ({toggleCategory, visible}) => {

    const handleClick = (e) => {
        e.preventDefault();
        toggleCategory();
    }

    return(
        <button onClick={handleClick}>
            {!visible ? <ExpandMoreIcon style={{color: 'white', fontSize: 40}} /> : <ExpandLessIcon style={{color: 'white', fontSize: 40}} />}
        </button>
    )
}