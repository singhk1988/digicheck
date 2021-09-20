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
  const [answer, setanswer] = useState([]);
  let data = questions.data.definition.data.clusters;

  useEffect(() => {
    let da = data[0].nodes.map((d) => {
      return { name: d.name, id: d.id };
    });
    setanswer(da);
  }, [data]);

  // console.log(`answer[dataIndex].answer::::`, answer[dataIndex].answer);
  return (
    <div>
      <Row>
        <Col span={24} className="start_title">
          <div style={{ marginLeft: "20%", marginRight: "20%" }}>
            <h2 className="question">{data[0].nodes[dataIndex].name}</h2>
            <h3>{data[0].nodes[dataIndex].description}</h3>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              {data[0].nodes[dataIndex] &&
              data[0].nodes[dataIndex].block &&
              data[0].nodes[dataIndex].block.type &&
              data[0].nodes[dataIndex].block.type === "tripetto-block-scale" ? (
                <Radio.Group
                  defaultValue="a"
                  size="large"
                  value={answer[dataIndex] && answer[dataIndex].answer}
                  buttonStyle="solid"
                  style={{ color: "red" }}
                  onChange={(e) => {
                    let newArray = [...answer];
                    let d = newArray.filter(function (x) {
                      return x.id === data[0].nodes[dataIndex].id;
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
              {data[0].nodes[dataIndex] &&
              data[0].nodes[dataIndex].block &&
              data[0].nodes[dataIndex].block.type &&
              data[0].nodes[dataIndex].block.type ===
                "tripetto-block-multiple-choice" ? (
                <div
                  style={{ display: "inline-flex", flexDirection: "column" }}
                >
                  {data[0].nodes[dataIndex].block.choices.map((u, i) => {
                    return (
                      <button
                        onClick={() => {
                          let newArray = [...answer];
                          let d = newArray.filter(function (x) {
                            return x.id === data[0].nodes[dataIndex].id;
                          })[0];
                          d.answer = u.name;
                          setanswer([...newArray]);
                        }}
                        className={
                          answer[dataIndex].answer === u.name
                            ? "active-radio-multiple-choice"
                            : "radio-multiple-choice"
                        }
                      >
                        {u.name}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {!data[0].nodes[dataIndex].block && (
              <Button
                type="primary"
                icon={<ArrowDownOutlined />}
                onClick={() => {
                  if (dataIndex < data[0].nodes.length - 1) {
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
                  }
                }}
                style={{ marginRight: "20px" }}
                icon={<UpOutlined />}
              ></Button>
              <Button
                onClick={() => {
                  if (dataIndex < data[0].nodes.length - 1) {
                    setdataIndex(dataIndex + 1);
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
