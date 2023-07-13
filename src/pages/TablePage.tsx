import Button from "../components/Button";
import Table from "../components/Table/Table";
import {ReactNode, useEffect, useState} from 'react'

interface Post{
    id:number,
    title:string,
    body:string
}

const TablePage = () => {

    const [data,setData]=useState<Post[] | []>([])
    useEffect(()=>{
       void fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then((data:Post[])=>setData(data))
    },[])

    const handleClick=(data:unknown)=>{
      console.log(data)
    }

    const columns:{label:string,value?:string,content?:(item:unknown)=>JSX.Element}[]=[
      {label:'ID', value:'id'},
      {label:'Title', value:'title'},
      {label:'Body', value:'body'},
      {
        label:'Action',
        content:(item:unknown)=>{
          return(
            <>
              <Button onClick={()=>handleClick(item)}>Edit</Button>
            </>
          )
        }
      }
    ]

  return (
    <div>
      <Table data={data} columns={columns}></Table>
    </div>
  );
};

export default TablePage;
