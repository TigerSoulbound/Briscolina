import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { loadGames } from "../api/api.mjs"

import TableComponent from '../components/tables/TableComponent';


export default function Score () {
    return (
        <TableComponent data = {loadGames()}></TableComponent>
    )
}