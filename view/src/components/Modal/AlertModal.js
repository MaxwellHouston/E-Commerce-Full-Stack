import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

export function AlertModal({show, close, message, callback}) {

    const runCallBack = () => {
        callback && callback();
    }

    return(
        <ReactModal isOpen={show} onAfterClose={ runCallBack } >
            <p>{message}</p>
            <button onClick={close}>Close</button>
        </ReactModal>
    )
}