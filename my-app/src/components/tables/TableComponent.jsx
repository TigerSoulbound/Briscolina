import { useEffect, useState } from "react" 

import {Table} from "react-bootstrap";

export default function TableComponent (props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.data.then((data) => {
            setData(data)
        }).catch((error) => {
            console.error("Error loading data:", error)
        })
    }, [props.data])

    return (
        <Table striped hover responsive>
            <thead>
                <tr>
                    {props.header.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.keys(row).map((key, colIndex) => (
                            <td key={colIndex}>{row[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}