import React from 'react';
import { Card } from 'antd';



const CardSider = () => {
    return(
  
  <Card hoverable={true} style={{ width: 250, borderColor:'blueviolet',margin:20,height:70 }}>
    <p style={{ textAlign: 'center' }}>Card Content</p>
   
  </Card>

)
    };

export default CardSider;
