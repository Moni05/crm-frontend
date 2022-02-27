import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Ticket() {

    const { searchTicketList, isLoading, error } = useSelector((state) => state.tickets);

    if(isLoading){
        return <h2>Loading</h2>
    }

    if(error){
        return <h4>{error}</h4>
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Open Date</th>
                </tr>
            </thead>
            <tbody>
                {searchTicketList.length ? (searchTicketList.map((row) => {
                    return(
                        <tr key={row._id}>
                            <td>{row._id}</td>
                            <td><Link to={`/ticket/${row._id}`}>{row.subject}</Link></td>
                            <td>{row.status}</td>
                            <td>{row.openAt}</td>
                        </tr>
                    )
                })) : (<tr>
                    <td colSpan="4" className="text-center">No tickets to display</td>
                </tr>)}
            </tbody>
        </Table>
    )
};