import {ReactNode} from 'react'

type TableType={
    children:ReactNode,
}

const Table = ({children}:TableType) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    );
};

export default Table;