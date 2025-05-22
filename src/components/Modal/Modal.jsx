import { Backdrop, ModalWindow } from './Modal.styled'
import React, { Component } from 'react';

export class Modal extends Component {

    componentDidMount() {

        window.addEventListener('keydown', this.handleKeydown);

        // console.log(this.props.onModalClose)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (e) => {
        if (e.code === 'Escape') {
            this.props.onModalClose();
        }
    }

    handleBackdropClick = (e) => {

        if (e.target === e.currentTarget) {
            this.props.onModalClose();
        }
    }



    render() {


        return (
            <Backdrop onClick={this.handleBackdropClick}>
                <ModalWindow>{this.props.children}</ModalWindow>
            </Backdrop>
        );
    }
}

