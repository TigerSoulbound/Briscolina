import { useEffect, useState } from "react" 

import {Table} from "react-bootstrap";

export default function TableComponent (props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.data.then((data) => {
            console.log(data)
            setData(data)
        }).catch((error) => {
            console.error("Error loading data:", error)
        })
    }, [props.data])

    return (
        <Table stripped striped hover responsive>
            <thead>
                <tr>
                    <th>GAME_ID</th>
                    <th>DATE</th>
                    <th>TYPE</th>
                    <th>PLAYER</th>
                    <th>PARTNER</th>
                    <th>SCORE</th>
                    <th>HAS_PLAYED</th>
                    <th>HAS_WON</th>
                </tr>
            </thead>
            <tbody>
                {data.map((game) => (
                    <tr key={game.id}>
                        <td>{game.game_id}</td>
                        <td>{game.date}</td>
                        <td>{game.type}</td>
                        <td>{game.player}</td>
                        <td>{game.partner ? game.partner : ""}</td>
                        <td>{game.score}</td>
                        <td>{game.has_played ? "Yes" : "No"}</td>
                        <td>{game.has_won ? "Yes" : "No"}</td>
                        
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}