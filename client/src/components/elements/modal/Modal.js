import React, {Fragment, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../redux/actions/modal';

import './Modal.css';
import HtmlContent from '../html-content/HtmlContent';

const Modal = ({ modalContent, openModal, closeModal }) => {
    
    // Source: https://stackoverflow.com/a/42234988
    const useOutsideCloser = (ref) => {        
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    close();
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideCloser(wrapperRef);
    
    const close = () => {
        closeModal();
    }
    
    
    return (
        <Fragment>
            {openModal ?
                <div className="modal" ref={wrapperRef}>
                    <p className="close" onClick={() => close()}>x</p>
                    <HtmlContent content={modalContent}/>
                </div> : 
                null}
        </Fragment>)
};

const mapStateToProps = (state) => ({
    modalContent: state.modal.modalContent,
    openModal : state.modal.openModal
});

export default connect(mapStateToProps, { closeModal })(Modal);