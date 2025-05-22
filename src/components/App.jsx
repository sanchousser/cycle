import { Component } from 'react'
import { Modal } from './Modal/Modal'

export class App extends Component {
  state = { showModal: false }

  toggleModal = () => {
    this.setState(({showModal}) => ({showModal: !showModal}))
  }

  render() {
    const {showModal} = this.state
    return (
      <div>
        <button onClick={this.toggleModal}>Open</button>

        {showModal && <Modal onModalClose={this.toggleModal} >
          <h2>Modal title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nesciunt cupiditate id tenetur nihil voluptatem.</p>
          <button type='button' onClick={this.toggleModal}>Close</button>
        </Modal>}
      </div>
    )
  }
};
