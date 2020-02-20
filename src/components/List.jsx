import React, { PureComponent } from 'react';

class List extends PureComponent {
  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default List;
