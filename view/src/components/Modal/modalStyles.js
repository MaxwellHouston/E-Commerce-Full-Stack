export const alertStyle = {
    overlay: {
        width: '20rem', 
        height:'10rem',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'   
    },
    content: {
        position: 'static',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center', 
        background: '#0f0f59',
        color: 'white',
        overflow: 'hidden',
        width: '75%',
        border: '1px solid black',
        boxShadow: '3px 3px 5px black'
    }
}