import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export function AlertModal({show, close, message, callback}) {
    return(
        <ReactModal isOpen={show} onAfterClose={ callback && callback } >
            <p>{message}</p>
            <button onClick={close}>Close</button>
        </ReactModal>
    )
}