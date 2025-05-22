import { Backdrop, ModalWindow } from './Modal.styled'
import React, { Component } from 'react';

export class Modal extends Component {

    state = {}
    render() {
        return (
            <Backdrop>
                <ModalWindow>{this.props.children}</ModalWindow>
            </Backdrop>
        );
    }
}

