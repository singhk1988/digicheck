// import React, { useState, useEffect } from "react";
// import { Button, Row, Col, Layout, Checkbox } from "antd";
// import { ArrowDownOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
// import "./styles.css";
// import questions from "../../Questions.json";
// import { Radio } from "antd";
// import Second from "../second_step";

// const Start=()=> {
//   const [forward,setForward]=useState(false);
//   const moveForward=()=>{
//     setForward(true);
//   }
//   const noForward=()=>
//   {
//     setForward(false);
//   }

//   return (
//     <div>{forward===false?(
//         <Row>
//         <Col span={24} className="start_title">
//           <div className="question-container">
//             <h2 className="question">
//             Start Video
//             </h2>
            
//               <Button
//                 type="primary"
//                 icon={<ArrowDownOutlined/>}
//                 onClick={moveForward}
//                 // style={{marginLeft:"55px"}}
//               >
//                 Next
//               </Button>
    
              
//           </div>
//         </Col>
//       </Row> 
//     ):(<Second moveBack={noForward}/>)}
      
//     </div>
//   );
// }

// export default Start;
