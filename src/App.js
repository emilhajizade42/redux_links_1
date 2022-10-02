
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Input, Space } from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const { Search } = Input;

function App() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    getDataByName()
  }, [])
  
  const dataSource = [
    {
      "name": "Marywood University",
      "alpha_two_code": "US",
      "state-province": null,
      "domains": [
      "marywood.edu"
      ],
      "web_pages": [
      "http://www.marywood.edu"
      ],
      "country": "United States"
      },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'namea',
    },
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'web_pages',
      dataIndex: 'web_pages',
      key: 'web_pages',
    },
  ];
  function getDataByName(value="") { 
    
    axios.get(`http://universities.hipolabs.com/search?name=${value}`)
    .then(res=>(
      setdata(res.data),setloading(false)
      
      ))
   }
  const onSearch = (value="") => {
    getDataByName(value)
  }
  console.log(data);
  return (
    <div className="App">
     <h1>My Table</h1>
     <Space direction="vertical">
     <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </Space>
    {loading? <LoadingOutlined style={{display:"block",fontSize:"50px",marginTop:"20px"}} />: <Table style={{width:"80%",margin:"20px auto"}} dataSource={data} columns={columns} theme={"dark"} />}
    </div>
  );
}

export default App;
