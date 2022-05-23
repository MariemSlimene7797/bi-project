import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import React from 'react';
import GridLayout from 'react-grid-layout';
//import CardSider from './SiderItem';
import SiderItem from './SiderItem';

class GridL extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 0, y: 0, w: 1, h: 2 },
      { i: 'c', x: 0, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200} isBounded={true}>
        <div key="a">
          <SiderItem />
        </div>
        <div key="b">
          <SiderItem />
        </div>
        <div key="c">
          <SiderItem />
        </div>
      </GridLayout>
    );
  }
}
export default GridL;
