import { useEffect, useState } from "react";
import { Chart } from "@antv/g2";
import { GetAllProducts } from "../Services/ProductService";
import { Col, Row } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return;
    } else [navigate("/")];
  }, []);

  useEffect(() => {
    GetAllProducts().then((res) => {
      const nameCounts = res.reduce((acc, product) => {
        acc[product.prodName] = (acc[product.prodName] || 0) + 1;
        return acc;
      }, {});

      const total = res.length;

      const chartData = Object.entries(nameCounts).map(([name, count]) => ({
        item: name,
        count,
        percent: count / total,
      }));

      setCategory(chartData);
    });
  }, []);

  useEffect(() => {
    if (category.length === 0) return;

    const chart = new Chart({ container: "container" });

    chart.options({
      type: "view",
      autoFit: true,
      coordinate: { type: "theta", outerRadius: 0.7, innerRadius: 0.5 },
      children: [
        {
          type: "interval",
          data: category, //Güncel data burada!
          encode: { y: "percent", color: "item" },
          transform: [{ type: "stackY" }],
          legend: {
            color: { position: "bottom", layout: { justifyContent: "center" } },
          },
          labels: [
            {
              position: "outside",
              text: (data) =>
                `${data.item}: ${(data.percent * 100).toFixed(1)}%`,
            },
          ],
          tooltip: {
            items: [
              (data) => ({
                name: data.item,
                value: `${(data.percent * 100).toFixed(1)}%`,
              }),
            ],
          },
        },
        {
          type: "text",
          style: {
            text: "Ürün Dağılımı",
            x: "50%",
            y: "50%",
            dx: 0,
            dy: 0,
            fontSize: 30,
            fill: "#8c8c8c",
            textAlign: "center",
          },
        },
      ],
    });

    const newChart = new Chart({ container: "chart", height: 500, width: 600 });
    newChart.options({
      type: "line",
      data: [
        { year: "2010", value: 3 },
        { year: "2011", value: 4 },
        { year: "2012", value: 3.5 },
        { year: "2013", value: 5 },
        { year: "2014", value: 4.9 },
        { year: "2015", value: 6 },
        { year: "2016", value: 7 },
        { year: "2017", value: 9 },
        { year: "2018", value: 13 },
      ],
      encode: { x: "year", y: "value" },
      scale: { x: { range: [0, 1] }, y: { domainMin: 0, nice: true } },
      style: {
        stroke: "skyblue",
        strokeOpacity: 0.9,
        lineWidth: 4,
        lineDash: [4, 8],
        opacity: 0.9,
        shadowColor: "#d3d3d3",
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        cursor: "pointer",
      },
    });

    newChart.render();
    chart.render();
  }, [category]);

  return (
    <>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={10}>
          <div
            id="container"
            className="shadow-sm"
            style={{
              width: "100%",
              maxWidth: 600,
              height: 500,
              margin: "40px",
              padding: 10,
              borderRadius: 40,
              backgroundColor: "white",
            }}
          ></div>
        </Col>
        <Col sm={12}>
          <div
            id="chart"
            className="shadow-sm"
            style={{
              width: "100%",
              maxWidth: 600,
              height: 500,
              margin: "40px",
              padding: 10,
              borderRadius: 40,
              backgroundColor: "white",
            }}
          ></div>
        </Col>
      </Row>
    </>
  );
};

export default AdminPage;
