import React, {Fragment, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { convertToCleanHtml } from '../../utils/Utils';

import './Modal.css';

const Modal = ({ modalContent, openModal, closeModal }) => {

    // Source: https://stackoverflow.com/a/42234988
    function useOutsideCloser(ref) {
        
        useEffect(() => {
            function handleClickOutside(event) {
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

    const close = () => {
        closeModal();
    }

    const wrapperRef = useRef(null);
    useOutsideCloser(wrapperRef);

    return <Fragment>
        {openModal ?
            (
            <div className="modal" ref={wrapperRef}>
                <p className="close" onClick={() => close()}>x</p>
                {/* TO DO : refactor into a component */}
                <p dangerouslySetInnerHTML={{__html: convertToCleanHtml(modalContent)}}></p> 
            </div>) : 
            null}
        </Fragment>
};

const mapStateToProps = (state) => ({
    modalContent: state.modal.modalContent,
    openModal : state.modal.openModal
});

export default connect(mapStateToProps, { closeModal })(Modal);