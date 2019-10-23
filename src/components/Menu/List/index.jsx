import React, { Component } from 'react';
import MenuItem from "../Item";

export default class MenuList extends Component {
  lists = [
    {guid: "1", name: "Список дел на 21.11"},
    {guid: "2", name: "План на отпуск"}
  ]
  render() {
    return (
      <div>
        {this.lists.map(item => {
          return <MenuItem key={item.guid} name={item.name}/>;
        })}
      </div>
    )
  }
}