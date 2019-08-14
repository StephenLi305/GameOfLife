

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
        textAlign: 'center',
        width: '80%',
        backgroundImage:'url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/squares.png)',
        color:'white',
        maxWidth:'900px',
        borderRadius:'20px',

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
                    <h5>
                        Conway's Game of Life
                    </h5>
                    <br></br>
                    
                    <p>
                        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:                   
                    </p>
                    <br></br>

                    <p>
                        Any live cell with fewer than two live neighbours dies, as if by underpopulation. <br/>
                        Any live cell with two or three live neighbours lives on to the next generation.<br/> 
                        Any live cell with more than three live neighbours dies, as if by overpopulation.<br/> 
                        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<br/> 
                    </p>
                    <br></br>

                </div>
            </Modal>
        );
    }
}

export default ModalPop;

