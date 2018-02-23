import React from 'react';
import './List.css';

export default class List extends React.Component {
  render() {
    return (
      <ul className="List pl-0 pt-4">
        {
          this.props.items.map((item, index) =>
          <li className="ListItem p-2 d-flex justify-content-between" key={index}>
            {item}
            <a onClick={this.props.onRemove.bind(null, item)}>
              <i className="fas fa-times" />
            </a>
          </li>)
        }
      </ul>
    )
  }
}
