

import React from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        "text-align": 'center',
        width: '80%'
    }
};


class ModalPop extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: true
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                style={customStyles}
            >
                <div>
                    <div>
                        Conway's Game of Life
                    </div>
                    <br></br>
                    <div>
                        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:                   
                    </div>

                </div>
            </Modal>
        );
    }
}

export default ModalPop;

