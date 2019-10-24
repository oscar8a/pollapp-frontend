import React, { Component } from 'react'
import { BrowserRouter as Redirect, NavLink, Link } from 'react-router-dom'
import { Menu, Segment, Button } from 'semantic-ui-react'

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
            as={Link}
            to='/createpoll'
            name='create poll'
            active={activeItem === 'create poll'}
            onClick={this.handleItemClick}
          />
          <Menu.Item position='right'>
            <h1 className='apptitle'> DIS OR DAT</h1>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to='/login'
            position="right"
            name='logout'
            active={activeItem === 'logout'}
            onClick={ this.props.logOutUser }>
              <Button color='red'>LOGOUT</Button>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}