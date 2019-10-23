import React, { Component } from 'react';
import TaskItem from "../Item";

export default class TaskList extends Component {
  tasks = [
    {guid: "1", name: "Сварить кофе", date: "01.01.2012"},
    {guid: "2", name: "Пообедать", date: "01.01.2013"},
    {guid: "3", name: "Поспать", date: "01.01.2014"},
    {guid: "4", name: "Поработать", date: "01.01.2015"},
    {guid: "5", name: "Сходить в магаз", date: "01.01.2016"}
  ]
  render() {
    return (
      <div>
        {this.tasks.map(item => {
          return <TaskItem key={item.guid} name={item.name} date={item.date}/>;
        })}
      </div>
    )
  }
}