import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../UI/NavBar";
 
export default function SubscribedTicketsCreateV2() {
 const [form, setForm] = useState({
   list_platform:"",
   list_ids:"",
   assignee:"",
   start_date:"",
   end_date:"",
   frequency:""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateFormHandler(event) {
    let value = event.target.value 
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmitHandler(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new ticket to the database.
   const newTicket = { ...form };
 
   await fetch("http://localhost:5000/api/sub-list-tickets/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newTicket),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ list_platform: "", list_ids: "", assignee: "", start_date:"", end_date:"", frequency:""});
   navigate("/list-generator");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
    
   <div>
    <Navbar />
     <h3>Create New Record</h3>
     <form onSubmit={onSubmitHandler}>
       
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="frequencyNow"
             value="Intern"
             checked={form.frequency === "Now"}
             onChange={updateFormHandler}
           />
           <label htmlFor="frequencyNow" className="form-check-label">Now</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}