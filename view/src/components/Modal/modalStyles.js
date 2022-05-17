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

export const loggedInStyle = {
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: '0',
        backgroundColor: '#0f0f59',
    },
    content: {
        textAlign: 'center',
        fontSize: '3rem',
        backgroundColor: '#0f0f59',
        color: 'white'
    }
}

export const noUserStyle = {
    overlay: {
        width: '100%', 
        height:'100%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
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

export const deleteUserStyle = {
    overlay: {
        width: '100%', 
        height:'100%',
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
        width: '35%',
        border: '1px solid black',
        boxShadow: '3px 3px 5px black'
    }
}