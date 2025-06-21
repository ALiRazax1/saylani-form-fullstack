// IDCard.jsx
import React from "react";
import {QRCode, Space, Row, Col } from 'antd';


const IDCard = ({img,name,course,faterName,cnic}) => {
    const [text, setText] = React.useState('');

  return (<>
   <Row style={{display:"flex",marginTop:"50px"}}>
    {/* card1 */}
      <Col xs={24} md={12} style={{padding:"0 100px",}}>
        <img style={{width:"100%"}} src="/card/border.png" alt="" />
      
      <div style={{textAlign:"center",margin:"0"}}>
        <img  src="/card/syalani-logo.png" alt="" />
      </div>
      <div style={{textAlign:"center",marginTop:"15px"}}>
        <img src="/card/syalani-traing.png" alt="" />
      </div>
        <div style={{textAlign:"center"}}>
          <img style={{width:"140px"}} src={img} alt="" />
        </div>
        <div style={{fontSize:"17px",textAlign:"center",fontWeight:"bold"}}>
          <p>{name}</p>
          <p>{course}</p>


        </div>
        <div>
          <img style={{width:"100%"}} src="/card/border2.png" alt="" />
        </div>
          </Col>
      {/* card2 */}
      
      <Col xs={24} md={12} style={{padding:"0 100px",fontWeight:"bold"}}>
        <div>
        <img style={{width:"100%"}} src="/card/border.png" alt="" />
      </div>
      <div style={{textAlign:"left",paddingLeft:"40px"}}>
        <p>Name: <span style={{textDecoration:"underline"}}>{name}</span> </p>
        <p>Father Name: <span style={{textDecoration:"underline"}}>{faterName}</span> </p>
        <p>CNIC: <span style={{textDecoration:"underline"}}>{cnic}</span> </p>
        <p>Course: <span style={{textDecoration:"underline"}}>{course}</span> </p>
      </div>
      <div style={{textAlign:"center"}}>
       <Space  direction="vertical" align="center">
      <QRCode style={{width:"140px"}} value={text || '-'}
      onChange={(e) => setText(e.target.value)}
      />
    
    </Space>


      </div>
      <div style={{textAlign:"center"}}>
        <p style={{padding:"40px"}}>Note: This card is for SMIT premises only.
If found please return to SMIT</p>
      </div>
       <div>
          <img style={{width:"100%"}} src="/card/border2.png" alt="" />
        </div>
      </Col>

   </Row>   </>
  );
};

export default IDCard;
