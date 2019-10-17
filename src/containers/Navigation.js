import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navigation extends Component {
  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to='/home'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/profile'
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick} >
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={ this.props.logOutUser }
          />
        </Menu>
      </Segment>
    )
  }
}