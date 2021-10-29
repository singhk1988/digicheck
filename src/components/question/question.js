import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout, Checkbox } from "antd";
import { ArrowDownOutlined, UpOutlined, DownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import "../start/styles.css";
import questions from "../../questions_mod.json";
import { Radio } from "antd";

function Question() {
  const { Footer } = Layout;
//   const [dataIndex, setdataIndex] = useState(0);
//   const [mainIndex, setmainIndex] = useState(0);
//   const [answer, setanswer] = useState([]);
  let data = questions.questions.steps;
  console.log(data);
  const [question,setQuestion]=useState(0);
  const[option,setOption]=useState('');
  console.log(data[question].parentID[0]===0);
  const moveForward=()=>
  { if(data[question].childID)
    {
        setQuestion(data[question].childID-1);
    }
    //   else{
    //       setQuestion()
    //   }
  }
  const moveBack=()=>
  {
      setQuestion(data[question].childID-1);
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
            {/* <div className="single-question-container">
              {data[mainIndex].nodes[dataIndex] &&
              data[mainIndex].nodes[dataIndex].block &&
              data[mainIndex].nodes[dataIndex].block.type &&
              data[mainIndex].nodes[dataIndex].block.type ===
                "tripetto-block-scale" ? (
                <Radio.Group
                  defaultValue="a"
                  size="large"
                  value={
                    answer.filter(function (x) {
                      return x.id === data[mainIndex].nodes[dataIndex].id;
                    })[0].answer
                  }
                  buttonStyle="solid"
                  onChange={(e) => {
                    let newArray = [...answer];
                    let d = newArray.filter(function (x) {
                      return x.id === data[mainIndex].nodes[dataIndex].id;
                    })[0];
                    d.answer = e.target.value;
                    setanswer([...newArray]);
                  }}
                >
                  {[...Array(11)].map((e, i) => {
                    return (
                      <Radio.Button className="radio-tab" value={i}>
                        {i}
                      </Radio.Button>
                    );
                  })}
                </Radio.Group>
              ) : null}
            </div> */}

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
      <Col span={4}>{data[question].parentID.length===1 && data[question].parentID[0]==0?(
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
              <Button
                type="primary"
                icon={<ArrowDownOutlined />}
                onClick={moveForward}
                style={{marginLeft:"55px"}}
              >
                Next
              </Button></Col>
    </Row>
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default Question;

