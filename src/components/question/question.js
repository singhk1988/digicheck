import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../questions_mod.json";
import { Radio } from "antd";

function Question() {
  const { Footer } = Layout;
  var pages=[0];

const [checkedValues,setcheckedValues]=useState([]);
// const[optionID,setOptionID]=useState('');
// const[previousOptionID,setPreviousoptionID]=useState('');
const onChangeChecked=(checkedValues)=> {
  console.log('checked = ', checkedValues);
  setcheckedValues(checkedValues);
}
const [myArr,setmyArr]=useState([0]);
  let data = questions.questions.steps;
  const [radioOption,setRadiooption]=useState(''); 
  const [buttonOption,setButtonoption]=useState('');
  console.log(data);
  const [question,setQuestion]=useState(0);
  const[option,setOption]=useState('');
  const arr=[];
  if(data[question].type==="scale")
  {
    for(var i=data[question].scale.low;i<=data[question].scale.high;i++)
    {
      arr.push(i);
    }
  }
  
  console.log('pages:')
  const moveForward=()=>
  { if(data[question].childID)
    {
      // console.log("question past",data[question].id-1);
      console.log('arr already',myArr);
        setQuestion(data[question].childID-1);
        setmyArr([...myArr, data[question].childID-1]);
        console.log('arr',myArr);
        // console.log("question",data[question].childID);
        pages.push(data[question].childID-1);
    }
    console.log("question_parent",question);
  }
  const moveBack=()=>
  {
    // debugger
    var arraySample = [...myArr];
    var poppedOut=arraySample.pop();
    console.log("popped out",poppedOut);
    setQuestion(arraySample[arraySample.length-1]);
    setmyArr(arraySample);
    // if(data[question].parentID)
    // {
    //   console.log("question past",data[question].id-1);
    //   setQuestion(data[question].parentID-1);
    //   // console.log("question_back",data[question].parentID);
    //   setRadiooption('');

    // }
    // else{
    //   if(optionID!='')
    //   {
    //     console.log('past option id',previousOptionID);
    //     console.log("optionid",optionID);
    //     const optionLocation=data.find(item => {
    //       return item["optionID"] === optionID
    //     })
    //       console.log("questionID",optionLocation["id"]-1);
    //       setQuestion(optionLocation["id"]-1);
    //   }
     
    // }
    
    
    
    
    
    
      
  }
  const onChange=(e)=> {
    console.log(`radio checked:${e.target.value}`);
    setRadiooption(e.target.value);
    setQuestion(data[question].childID-1);
    setmyArr([...myArr, data[question].childID-1]);
    console.log('arr',myArr);
    console.log("question",data[question].childID);
  }
//   useEffect(() => {
//     let da = data[mainIndex].nodes.map((d) => {
//       return { name: d.name, id: d.id };
//     });
//     setanswer([...answer, ...da]);
//   }, [data, mainIndex]);

  return (
    <div>
       <Row>
        <Col span={24} className="start_title">
          <div className="question-container">
            <h2 className="question">
              {data[question].question}
            </h2>
            <h3>{data[question].description}</h3>
            {/* For Scale type Questions */}
            {data[question].type=="scale"?(
              <div className="single-question-container">
                 <Radio.Group onChange={onChange} size="large" buttonStyle="solid" value={radioOption}>
                      {arr.map(i=><Radio.Button className="radio-tab" value={i}>{i}</Radio.Button>)}
                </Radio.Group>
            </div>

            ):(
              <div>
                {data[question].type==="multiple-choice"?(
                  <div className="multiple-choice-container">
                  {data[question].options.map(option=>
                     <Button
                     type="primary"
                                onClick={() => {
                                  // console.log("previous option id",optionID);
                                  // setPreviousoptionID(optionID);
      console.log("question past",data[question].id-1);
                                  setButtonoption(option.option);
                                  setQuestion(option.childID-1);
                                  setmyArr([...myArr, option.childID-1]);
                                  console.log('arr',myArr);
                                  console.log("question",option.childID);
                                  
                                }}
                                className=
                                // {
                                //     buttonOption=='Ja'?
                                   "radio-multiple-choice"
                                    // : "radio-multiple-choice"
                                // }
                              >
                                {option.option}
                              </Button>)}
                 
               
          </div>
                ):(<div>{data[question].type==="checkbox"?(
                  <div>
                     <div className="single-question-container">
                     <Row>
                     <Checkbox.Group style={{ width: '100%',fontSize:"25px" }} onChange={onChangeChecked}>
                       {data[question]["checkbox-options"].map(option=>
                        <Col span={16}>
                          
                        <Checkbox
                        value={option.option}
                      
                          // onChange={(e) => {
                          //   let newArray = [...answer];
                          //   let d = newArray.filter(function (x) {
                          //     return (
                          //       x.id === data[mainIndex].nodes[dataIndex].id
                          //     );
                          //   })[0];

                          //   if (d.answer) {
                          //     const ans = d.answer;
                          //     d.answer = {
                          //       ...ans,
                          //       [u.name]: e.target.checked,
                          //     };
                          //   } else {
                          //     d.answer = { [u.name]: e.target.checked };
                          //   }

                          //   setanswer([...newArray]);
                          // }}
                          // value={u.name}
                          // checked={ans && ans.answer && ans.answer[u.name]}
                        >
                          {option.option}
                        </Checkbox>
                      </Col>
)}
</Checkbox.Group>
</Row>
</div>
                    </div>
                ):(<div>{data[question].type==="matrix"?(
                  <div>
                   <div className="matrix-index-title">
                     {data[question].labels.map(label=><span className="matrix-index">{label.labelId}</span>)}
                     </div>
                    
                    
                       {data[question]["matrix-options"].map(matrix=> <div className="matrix-radio-container"><p className="matrix-radio-option-title">{matrix.option}</p>
                      <Radio.Group
                        // onChange={(e) => {
                        //   let newArray = [...answer];
                        //   let d = newArray.filter(function (x) {
                        //     return x.id === data[mainIndex].nodes[dataIndex].id;
                        //   })[0];
                        //   if (d.answer) {
                        //     const ans = d.answer;
                        //     d.answer = { ...ans, [u.id]: e.target.value };
                        //   } else {
                        //     d.answer = { [u.id]: e.target.value };
                        //   }
                        //   setanswer([...newArray]);
                        // }}
                        // value={ans && ans.answer && ans.answer[u.id]}
                      >
                        {/* {data[mainIndex].nodes[dataIndex].block.columns.map(
                          (u, i) => {
                            return ( */}
                            {data[question].labels.map(label=><Radio
                                className="matrix-radio"
                                value={label.labelId}
                              ></Radio>)}
                              
                            {/* );
                          }
                        )} */}
                      </Radio.Group></div>)}
                      

</div>
                ):(<div></div>)}
                
</div>
                )}




                </div>)}
              </div>
            )}
           

            {/* For Matrix Based Questions */}

            {/* {data[mainIndex].nodes[dataIndex] &&
            data[mainIndex].nodes[dataIndex].block &&
            data[mainIndex].nodes[dataIndex].block.type &&
            data[mainIndex].nodes[dataIndex].block.type ===
              "tripetto-block-matrix" ? (
              <div>
                <div className="matrix-index-title">
                  {data[mainIndex].nodes[dataIndex].block.columns.map(
                    (u, i) => {
                      return <span className="matrix-index">{u.label}</span>;
                    }
                  )}
                </div>
                {data[mainIndex].nodes[dataIndex].block.rows.map((u, i) => {
                  let ans = answer.filter(function (x) {
                    return x.id === data[mainIndex].nodes[dataIndex].id;
                  })[0];

                  return (
                    <div className="matrix-radio-container">
                      <p className="matrix-radio-option-title">{u.name}</p>
                      <Radio.Group
                        onChange={(e) => {
                          let newArray = [...answer];
                          let d = newArray.filter(function (x) {
                            return x.id === data[mainIndex].nodes[dataIndex].id;
                          })[0];
                          if (d.answer) {
                            const ans = d.answer;
                            d.answer = { ...ans, [u.id]: e.target.value };
                          } else {
                            d.answer = { [u.id]: e.target.value };
                          }
                          setanswer([...newArray]);
                        }}
                        value={ans && ans.answer && ans.answer[u.id]}
                      >
                        {data[mainIndex].nodes[dataIndex].block.columns.map(
                          (u, i) => {
                            return (
                              <Radio
                                className="matrix-radio"
                                value={u.label}
                              ></Radio>
                            );
                          }
                        )}
                      </Radio.Group>
                    </div>
                  );
                })}
              </div>
            ) : null} */}

            {/* For Checkbox type Questions */}

            {/* <div className="single-question-container">
              {data[mainIndex].nodes[dataIndex] &&
              data[mainIndex].nodes[dataIndex].block &&
              data[mainIndex].nodes[dataIndex].block.type &&
              data[mainIndex].nodes[dataIndex].block.type ===
                "tripetto-block-checkboxes" ? (
                <Row>
                  {data[mainIndex].nodes[dataIndex].block.checkboxes.map(
                    (u, i) => {
                      let ans = answer.filter(function (x) {
                        return x.id === data[mainIndex].nodes[dataIndex].id;
                      })[0];

                      return (
                        <Col span={16}>
                          <Checkbox
                            onChange={(e) => {
                              let newArray = [...answer];
                              let d = newArray.filter(function (x) {
                                return (
                                  x.id === data[mainIndex].nodes[dataIndex].id
                                );
                              })[0];

                              if (d.answer) {
                                const ans = d.answer;
                                d.answer = {
                                  ...ans,
                                  [u.name]: e.target.checked,
                                };
                              } else {
                                d.answer = { [u.name]: e.target.checked };
                              }

                              setanswer([...newArray]);
                            }}
                            value={u.name}
                            checked={ans && ans.answer && ans.answer[u.name]}
                          >
                            {u.name}
                          </Checkbox>
                        </Col>
                      );
                    }
                  )}
                </Row>
              ) : null}
            </div> */}

            {/* for Multiple Choice type question */}

            {/* <div className="single-question-container">
              {data[mainIndex].nodes[dataIndex] &&
              data[mainIndex].nodes[dataIndex].block &&
              data[mainIndex].nodes[dataIndex].block.type &&
              data[mainIndex].nodes[dataIndex].block.type ===
                "tripetto-block-multiple-choice" ? (
                <div className="multiple-choice-container">
                  {data[mainIndex].nodes[dataIndex].block.choices.map(
                    (u, i) => {
                      let ans = answer.filter(function (x) {
                        return x.id === data[mainIndex].nodes[dataIndex].id;
                      })[0];
                      return (
                        <button
                          onClick={() => {
                            let newArray = [...answer];
                            let d = newArray.filter(function (x) {
                              return (
                                x.id === data[mainIndex].nodes[dataIndex].id
                              );
                            })[0];
                            d.answer = u.name;
                            d.answerId = u.id;
                            setanswer([...newArray]);
                          }}
                          className={
                            ans && ans.answer === u.name
                              ? "active-radio-multiple-choice"
                              : "radio-multiple-choice"
                          }
                        >
                          {u.name}
                        </button>
                      );
                    }
                  )}
                </div>
              ) : null}
            </div> */}

<Row justify="end">
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={4}>{myArr.length===1 && myArr[0]===0?(
         <Button
         type="primary"
         icon={<ArrowUpOutlined/>}
         // onClick={moveForward}
         style={{marginLeft:"140px",display:"none"}}
       >
         Back
       </Button>
           ):(<Button
        type="primary"
        icon={<ArrowUpOutlined/>}
        onClick={moveBack}
        style={{marginLeft:"140px"}}
      >
        Back
      </Button>)}
         
              </Col>
              <Col span={4} offset={8}>
                {data[question].nextButton==true?(
                   <Button
                   type="primary"
                   icon={<ArrowDownOutlined />}
                   onClick={moveForward}
                   style={{marginLeft:"55px"}}
                 >
                   Next
                 </Button>
                ):(
                  <Button
                  type="primary"
                  icon={<ArrowDownOutlined />}
                  onClick={moveForward}
                  style={{marginLeft:"55px",display:"none"}}
                >
                  Next
                </Button>
                )}
             </Col>
    </Row>
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default Question;

