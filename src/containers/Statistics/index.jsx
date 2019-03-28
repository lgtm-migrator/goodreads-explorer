import React, { Component } from 'react'

import { Button, Popover } from 'antd'

import MultiCheckBox from '../../components/MultiCheckBox'

import './style.css'

class Statistics extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shelvesSelectPopover: false,
      shelves: [],
      selectedShelves: []
    }

    this.hideShelvesSelect = this.hideShelvesSelect.bind(this)
    this.handleShelvesChange = this.handleShelvesChange.bind(this)
    this.handleShelvesSelectVisibleChange = this.handleShelvesSelectVisibleChange.bind(this)
  }

  componentDidMount () {
    const shelves = this.props.userData.user_shelves.map(shelf => {
      if (shelf.books.book) {
        return {
          name: shelf.name,
          bookCount: shelf.books.book.length ? shelf.books.book.length : 1
        }
      }
      return {
        name: shelf.name,
        bookCount: 0
      }
    })
    const selectedShelves = shelves.length > 0 ? [shelves[0].name] : []
    // const { nodes, links } = getGraphData(this.props.userData, selectedShelves)
    // this.setState({
    //   nodes,
    //   links,
    //   shelves,
    //   selectedShelves
    // })
    this.setState({
      shelves,
      selectedShelves
    })
  }

  hideShelvesSelect () {
    this.setState({ shelvesSelectPopover: false })
  }

  handleShelvesSelectVisibleChange (visible) {
    this.setState({ shelvesSelectPopover: visible })
  }

  handleShelvesChange (selectedShelves) {
    // const { nodes, links } = getGraphData(this.props.userData, selectedShelves)
    // this.setState({
    //   nodes,
    //   links,
    //   selectedShelves
    // })
  }

  render () {
    const {
      shelvesSelectPopover,
      shelves,
      selectedShelves
    } = this.state
    return (
      <div
        className='statistics'
      >
        <Popover
          content={
            <MultiCheckBox
              onChange={this.handleShelvesChange}
              options={shelves.map(shelf => shelf.name)}
              defaultCheckedList={selectedShelves}
              optionLabel={shelves.map(shelf => `${shelf.name} (${shelf.bookCount})`)}
              disable={shelves.map(shelf => shelf.bookCount === 0)}
              className='graphPopover'
            />
          }
          title={`Shelves (${shelves.length})`}
          trigger='click'
          visible={shelvesSelectPopover}
          onVisibleChange={this.handleShelvesSelectVisibleChange}
          placement='bottomLeft'
        >
          <Button
            icon='check-square'
            style={{
              position: 'fixed',
              top: 20,
              right: 60
            }}
          >
            Select Shelves
          </Button>
        </Popover>
      </div>
    )
  }
}

export default Statistics
