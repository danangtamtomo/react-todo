import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchTodos } from '../../actions'

class SearchTodos extends Component {
  render() {
    return (
      <div className="row">
        <input style={{
          width: '400px',
          margin: 'auto',
          borderBottom: 'solid thin',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          outline: 'none',
          padding: '10px'
        }}
               type="text" onChange={e => this.props.searchTodos(e.target.value)} placeholder="Search..."/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchTodos: keyword => {
    dispatch(searchTodos(keyword))
  }
})

export default connect(null, mapDispatchToProps)(SearchTodos)
