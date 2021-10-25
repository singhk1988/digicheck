import React, { useState } from "react";
import YouTube from 'react-youtube';
import { Button } from 'antd';
import "./styles.css";
import SecondStep from '../second_step/index';
import {RightOutlined} from '@ant-design/icons';

function Question() {
  const [forward, setForward]=useState(false);
  // const [backward, setBackward]=useState(false);
  const moveForward=()=>{
    setForward(true);
    console.log(forward);
  }
  const moveBackward=()=>{
    setForward(false);
    console.log(forward);
  }
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
     
        {forward==false?( <center><div><h1>Wir wollen Ihnen bestmöglich weiterhelfen!</h1>
      <h3>Bitte schauen Sie sich das kurze Video bevor Sie mit dem kurzen Fragebogen starten.</h3>
      <YouTube videoId="2EIfRZVhfd4" opts={opts} />
      <Button type="primary" 
      className="start-btn"
      onClick={moveForward}
      >
         <RightOutlined /> Start
        </Button></div></center>):(<SecondStep forward={forward} moveForward={moveForward} moveBackward={moveBackward}/>)}
      
  
    </div>
  );
}

export default Question;
