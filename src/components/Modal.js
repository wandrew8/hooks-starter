import React, { useRef, useEffect } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import useShowModal from '../hooks/useShowModal';

export default function Modal() {
    const ref = useRef();
    const [showModal, setShowModal] = useShowModal(false);
    const waitTime = 10000;

    useClickOutside(ref, () => {
        setShowModal(false);
    });

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowModal(true);
        }, waitTime);
        setShowModal(false);
        return () => clearTimeout(timer);
      }, []);

    if (showModal) {

        return (
            
            <div className="modal" ref={ref}>
                <h1>
                    This is my modal
                </h1>
                <p className="modal-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci unde, illum fugit modi perferendis enim aperiam, expedita quis quibusdam ea numquam soluta, placeat deleniti distinctio ab excepturi aliquid velit quia?</p>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
