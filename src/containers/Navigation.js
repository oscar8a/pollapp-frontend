import React, { Component } from 'react'
import { BrowserRouter as Redirect, NavLink, Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navigation extends Component {
  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment className="ui blue inverted">
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to='/home'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to='/profile'
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={ this.props.logOutUser }
          />
          <Menu.Item
            name='DIS OR DATTTT'
          />
        </Menu>
      </Segment>
    )
  }
}