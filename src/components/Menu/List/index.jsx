import React, { Component } from 'react';
import MenuItem from "../Item";
import axios from "axios";
import { connect } from "react-redux";

class MenuList extends Component {
  state = {
    menu: []
  }
  componentDidMount() {
    axios.get("http://localhost:3000/menu")
    .then(response => {
      // handle success
      this.setState({
        menu: response.data
      });
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    console.log(this.props.tasks)
  }
  render() {
    return (
      <ul class="nav flex-column">
        {this.state.menu.map(item => {
          return <MenuItem key={item.id} name={item.name}/>;
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.lists.tasks
  }
}

export default connect(mapStateToProps, {
  
})(MenuList)