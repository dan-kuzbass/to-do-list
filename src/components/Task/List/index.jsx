import React, { Component } from 'react';
import TaskItem from "../Item";
import { connect } from "react-redux";

class TaskList extends Component {
  tasks = [
    {id: "1", name: "Сварить кофе", date: "01.01.2012"},
    {id: "2", name: "Пообедать", date: "01.01.2013"},
    {id: "3", name: "Поспать", date: "01.01.2014"},
    {id: "4", name: "Поработать", date: "01.01.2015"},
    {id: "5", name: "Сходить в магаз", date: "01.01.2016"}
  ];

  render() {
    return (
      <div>
        {this.props.tasks.map(item => {
          return <TaskItem key={item.id} name={item.name} date={item.date}/>;
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

export default connect(mapStateToProps, {
  
})(TaskList)