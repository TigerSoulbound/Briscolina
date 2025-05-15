import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { loadGames } from "../api/api.mjs"

import TableComponent from '../components/tables/TableComponent';


export default function Score () {
    return (
        <TableComponent header = {["Game ID", "Date", "Game Type", "Player", "Partner", "Score", "Has Played", "Has Won"]} data = {loadGames()}></TableComponent>
    )
}