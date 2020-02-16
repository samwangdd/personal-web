import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/tabs.less';

class Tabs extends Component {
  constructor(props) {
    super(props);

    const currProps = this.props;
    let activeIndex = 0;

    if ('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ('defaultIndex' in currProps) {
      activeIndex = currProps.defaultIndex;
    }

    this.state = {
      activeIndex,
      preActiveIndex: activeIndex,
    };
  }
  componentDidMount() {
    const dom = ReactDOM.findDOMNode(this);
    console.log('dom :', dom);
  }
  render() {
    return <div className="ui-tabs">123</div>;
  }
}

export default Tabs;
