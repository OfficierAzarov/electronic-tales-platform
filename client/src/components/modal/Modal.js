import React from 'react';

const Modal = ({ content }) => {


    const retrieveSubstring = (content) => {
        const substring = content.substring(content.lastIndexOf('[') + 1, content.lastIndexOf(']'));
        return substring;
    }

    return (
        <div>
            { retrieveSubstring(content) }
        </div>
    );
};

export default Modal;