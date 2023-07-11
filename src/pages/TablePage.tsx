import Table from "../components/Table/Table";
import {useEffect, useState} from 'react'

interface Post{
    id:number,
    title:string,
    body:string
}

const TablePage = () => {

    const [data,setData]=useState<Post[]| []>([])
    useEffect(()=>{
       void fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((data:Post[])=>setData(data))
    },[])

  return (
    <div>
      <Table data={data}>
        fdf
      </Table>
    </div>
  );
};

export default TablePage;
