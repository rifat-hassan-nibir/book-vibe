/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const readBooksData = JSON.parse(localStorage.getItem("readBooks")) || [];

  return (
    <div className="flex justify-center">
      <div className={`${readBooksData.length ? "hidden" : "block"}`}>
        <h1 className="text-2xl lg:text-3xl text-center mt-[50px]">Add Books to Read List to view the chart</h1>
      </div>
      <ResponsiveContainer width={1200} height={500} className={`${readBooksData.length ? "block" : "hidden"}`}>
        <BarChart
          data={readBooksData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis dataKey="totalPages" />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
            {readBooksData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
