import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';

import './Modal.css';

const Modal = ({ modalContent, openModal, closeModal }) => {

    const close = () => {
        closeModal();
    }

    return <Fragment>
        {openModal ?
            (
            <div className="modal">
                <p className="close" onClick={() => close()}>x</p>
                <ReactMarkdown children={ modalContent } />
            </div>) : 
            null}
        </Fragment>
};

const mapStateToProps = (state) => ({
    modalContent: state.modal.modalContent,
    openModal : state.modal.openModal
});

export default connect(mapStateToProps, { closeModal })(Modal);