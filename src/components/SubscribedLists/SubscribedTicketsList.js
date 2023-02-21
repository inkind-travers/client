import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Ticket = (props) => (
    
 <tr>
   <td>{props.ticket.ticketID}</td>
   <td>{props.ticket.assignee}</td>
   <td>{props.ticket.submit_date}</td>
   <td>{props.ticket.start_date}</td>
   <td>{props.ticket.frequency}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.ticket._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteTicket(props.ticket._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function TicketList() {
 const [tickets, setTickets] = useState([]);
 
 // This method fetches the tickets from the database.
 useEffect(() => {
   async function getTickets() {
     const response = await fetch(`http://localhost:5000/api/sub-list-tickets/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const tickets = await response.json();
     setTickets(tickets);
   }
 
   getTickets();
 
   return;
 }, [tickets.length]);
 
 // This method will delete a ticket
 async function deleteTicket(id) {
   await fetch(`http://localhost:5000/api/sub-list-tickets/${id}`, {
     method: "DELETE"
   });
 
   const newTickets = tickets.filter((el) => el._id !== id);
   setTickets(newTickets);
 }
 
 // This method will map out the tickets on the table
 function ticketList() {
   return tickets.map((ticket) => {
    console.log(ticket)
     return (
       <Ticket
         ticket={ticket}
         deleteTicket={() => deleteTicket(ticket._id)}
         key={ticket._id}
       />
     );
   });
 }
 
 // This following section will display the table with the tickets of individuals.
 return (
   <div>
     <h3>Ticket List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>ticketID</th>
           <th>assignee</th>
           <th>submit_date</th>
           <th>start_date</th>
           <th>frequency</th>
         </tr>
       </thead>
       <tbody>{ticketList()}</tbody>
     </table>
   </div>
 );
}