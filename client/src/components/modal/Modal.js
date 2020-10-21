import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { convertToCleanHtml } from '../../utils/Utils';

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