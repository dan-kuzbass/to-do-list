import React, { Component } from 'react';
import MenuItem from "../Item";
import axios from "axios";
import { connect } from "react-redux";
import { getTasks } from "../../../actions/tasks";

class MenuList extends Component {
  state = {
    menu: []
  }

  componentDidMount() {
    axios.get("http://localhost:3001/menu")
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
  }

  onClick = async (e) => {
    await this.props.getTasks(e.target.id)
    console.log(this.props.tasks);
  }

  render() {
    return (
      <ul className="nav flex-column">
        {this.state.menu.map(item => {
          return <MenuItem key={item.id} name={item.name} id={item.id} onClick={this.onClick}/>;
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, {
  getTasks
})(MenuList)