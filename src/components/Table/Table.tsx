import { twMerge } from "tailwind-merge";
import './Table.css'

type TableType= React.TableHTMLAttributes<HTMLTableElement>&{
    data:Array<unknown>,
    columns:{
        label:string,
        value?:string,
        content?:(item:unknown)=>JSX.Element
    }[],
    headRowClsss?:string,
    bodyRowClsss?:string;
 }

const Table = ({data,columns,headRowClsss, bodyRowClsss, ...rest}:TableType) => {

    return (
        <table className={twMerge('border-2 border-gray-800 rounded-2xl overflow-hidden')} {...rest}>
            <thead>
                <tr>
                    {columns.map((column,i)=>(
                        <td className={twMerge('px-3 py-4 font-semibold bg-gray-800 text-gray-300', headRowClsss)} key={i}>{column.label}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item,i)=>(
                    <tr key={i} className={twMerge('hover:bg-gray-200 border-b')}>
                        {
                            columns.map((column,i)=>(
                                <td key={i} className={twMerge('px-4 py-3',bodyRowClsss)}>{column.content?column.content(item):item[column.value]}</td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;