import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            cententLabel="Selected Option"
            closeTimeoutMS={200} //ustawia czas od rozpoczecia zamykania do zamkniecia - daje czas do animowania 'wyjscia'
            className='modal'
        >    
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );


export default OptionModal;