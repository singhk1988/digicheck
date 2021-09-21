import React, { useState, useEffect } from "react";
import { Button, Row, Col, Layout } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./styles.css";
import questions from "../../Questions.json";
import { Radio } from "antd";

function Start() {
  const { Footer } = Layout;
  const [dataIndex, setdataIndex] = useState(0);
  const [mainIndex, setmainIndex] = useState(0);
  const [answer, setanswer] = useState([]);
  let data = questions.data.definition.data.clusters;

  useEffect(() => {
    let da = data[mainIndex].nodes.map((d) => {
      return { name: d.name, id: d.id };
    });
    setanswer([...answer, ...da]);
  }, [data, mainIndex]);

  // console.log(`answer[dataIndex].answer::::`, answer[dataIndex].answer);
  return (
    <div>
      <Row>
        <Col span={24} className="start_title">
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <h2 className="question">
              {data[mainIndex].nodes[dataIndex].name}
            </h2>
            <h3>{data[mainIndex].nodes[dataIndex].description}</h3>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
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
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              {data[mainIndex].nodes[dataIndex] &&
              data[mainIndex].nodes[dataIndex].block &&
              data[mainIndex].nodes[dataIndex].block.type &&
              data[mainIndex].nodes[dataIndex].block.type ===
                "tripetto-block-multiple-choice" ? (
                <div
                  style={{ display: "inline-flex", flexDirection: "column" }}
                >
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
            </div>

            {!data[mainIndex].nodes[dataIndex].block && (
              <Button
                type="primary"
                icon={<ArrowDownOutlined />}
                onClick={() => {
                  if (dataIndex < data[mainIndex].nodes.length - 1) {
                    setdataIndex(dataIndex + 1);
                  }
                }}
              >
                Next
              </Button>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Layout>
          <Footer className="footer">
            <Col span={18}>Powered by Tripetto</Col>
            <Col span={6}>
              <Button
                onClick={() => {
                  if (dataIndex > 0) {
                    setdataIndex(dataIndex - 1);
                  } else if (mainIndex > 0) {
                    setmainIndex(mainIndex - 1);
                    setdataIndex(data[mainIndex - 1].nodes.length - 1);
                  }
                }}
                style={{ marginRight: "20px" }}
                icon={<UpOutlined />}
              ></Button>
              <Button
                onClick={() => {
                  if (dataIndex < data[mainIndex].nodes.length - 1) {
                    setdataIndex(dataIndex + 1);
                  } else if (
                    dataIndex === data[mainIndex].nodes.length - 1 &&
                    mainIndex < data.length - 1
                  ) {
                    setmainIndex(mainIndex + 1);
                    setdataIndex(0);
                  }
                }}
                icon={<DownOutlined />}
              ></Button>
            </Col>
          </Footer>
        </Layout>
      </Row>
    </div>
  );
}

export default Start;
