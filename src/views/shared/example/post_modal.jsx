'use strict'
import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Post } from "models"

import { Clearfix, Col, Row, Button, Modal, Label, Input } from 'react-bootstrap'
import Notification from 'notification'
import ModalFrozeOverlay from 'froze_overlay'

@observer
export default class PostModal extends Component {

  static propTypes = {
    post: PropTypes.object,
    showModal: PropTypes.bool,
    closeModal: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      post: props.post ? props.post.toJson() : Post.attributes,
    }
  }

  addPost = () => {
    const { post } = this.state
    let action = this.props.post ? this.props.post.update : Post.create
    let message = this.props.post ? "Update post" : "Create post"

    this.setState({ loading: true })
    action(post).then(response => {
      if (response.ok) {
        this.setState({ loading: false })
        this.props.closeModal()
        Notification.info(message)
      }
    })
  }

  handleInput = (e) => {
    let { post } = this.state
    const { name, value } = e.target
    post[name] = value
    this.setState({ post })
  }

  render() {
    let { post } = this.state

    return (
      <Modal
        show={ this.props.showModal }
        onHide={this.props.closeModal}
      >
      <ModalFrozeOverlay frozen={ this.state.loading }>
        <Modal.Header closeButton>
          <Modal.Title>Add new Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <input
            name="area"
            className="form-control border-focus-blue auth"
            placeholder="район"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.area}
          />
          <input
            name="adress"
            className="form-control border-focus-blue auth"
            placeholder="адрес"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.adress}
          />
          <input
            name="count"
            className="form-control border-focus-blue auth"
            placeholder="количество комнат"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.count}
          />
          <input
            name="floor"
            className="form-control border-focus-blue auth"
            placeholder="этаж"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.froor}
          />
          <input
            name="size"
            className="form-control border-focus-blue auth"
            placeholder="площадь"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.size}
          />
          <input
            name="price"
            className="form-control border-focus-blue auth"
            placeholder="цена"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={post.price}
          />
          <input
            name="deadline"
            className="form-control border-focus-blue auth"
            placeholder="срок сдачи"
            onChange={ this.handleInput }
            onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
            value={ post.deadline}
          />

        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.addPost}
          >{ this.props.post ? "Изменить" : "Добавить" }</Button>
          <Button
            onClick={close}
          >Закрыть</Button>
        </Modal.Footer>

        </ModalFrozeOverlay>
      </Modal>

    )
  }
}


