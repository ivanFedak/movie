
import {useState,useEffect,useRef} from 'react';

import './modal.sass';

const Modal = (props) => {
    
    const [active,setActive] = useState(false);

    useEffect(()=>{
        setActive(props.active)
    },[props.active])

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    )
}

export const ModalContent = (props) => {

    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose()
    }

    return(
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div onClick={closeModal} className="modal__close">
                <i className='bx bx-x'></i>
            </div>
        </div>
    )
}

export default Modal;