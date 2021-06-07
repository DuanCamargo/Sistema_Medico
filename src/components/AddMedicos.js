import React, { useState } from "react";
import TutorialDataService from "../services/MedicoDataService";

const AddMedicos = () => {
  const initialTutorialState = {
    id: null,
    type: "",
    firstName: "",
    lastName: ""
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      type: tutorial.type,
      firstName: tutorial.firstName,
      lastName: tutorial.lastName
    };

    TutorialDataService.create(data);
    setSubmitted(true);
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  // // ********* TENTAR ISSO MAIS TARDE *********
  // $(document).ready(function(){
  //   // Activate tooltip
  //   $('[data-toggle="tooltip"]').tooltip();
    
  //   // Select/Deselect checkboxes
  //   var checkbox = ('table tbody input[title="checkbox"]');
  //   ("#selectAll").click(function(){
  //     if(this.checked){
  //       checkbox.each(function(){
  //         this.checked = true;                        
  //       });
  //     } else{
  //       checkbox.each(function(){
  //         this.checked = false;                        
  //       });
  //     } 
  //   });
  //   checkbox.click(function(){
  //     if(!this.checked){
  //       ("#selectAll").prop("checked", false);
  //     }
  //   });
  // });

  return (

    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="type">type</label>
            <select
              type="select"
              className="form-control"
              id="type"
              required
              value={tutorial.type}
              onChange={handleInputChange}
              name="type"
            >
              <option defaultChecked>What´s your area of knowledge?  </option>
              <option>Angiologist</option>
              <option>Pediatric</option>
              <option>Cardiologist</option>
              <option>Endocrinologist</option>
              <option>Gastroenterologist</option>
              <option>Ophthalmologist</option>
              <option>Nephrologist</option>
              <option>Urologist</option>
              <option>Otolaryngologist</option>
              <option>Dermatologists</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={tutorial.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={tutorial.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>
          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>

    // ********* TENTAR ISSO MAIS TARDE *********
    // <div>
    //   <div class="container">
    //     <div class="table-responsive">
    //       <div class="table-wrapper">
    //         <div class="table-type">
    //           <div class="row">
    //             <div class="col-xs-6">
    //               <h2>Manage <b>Employees</b></h2>
    //             </div>
    //             <div class="col-xs-6">
    //               <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New</span></a>
    //               <a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>						
    //             </div>
    //           </div>
    //         </div>
    //         <table class="table table-striped table-hover">
    //           <thead>
    //             <tr>
    //               <th>
    //                 <span class="custom-checkbox">
    //                   <input type="checkbox" id="selectAll"/>
    //                   <label for="selectAll"></label>
    //                 </span>
    //               </th>
    //               <th>First Name</th>
    //               <th>Last Name</th>
    //               <th>Address</th>
    //               <th>Phone</th>
    //               <th>Title</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <td>
    //                 <span class="custom-checkbox">
    //                   <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
    //                   <label for="checkbox1"></label>
    //                 </span>
    //               </td>
    //               <td></td>
    //               <td></td>
    //               <td></td>
    //               <td></td>
    //               <td>
    //                 <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
    //                 <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         <div class="clearfix">
    //           <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
    //           <ul class="pagination">
    //             <li class="page-item disabled"><a href="#">Previous</a></li>
    //             <li class="page-item active"><a href="#" class="page-link">1</a></li>
    //             <li class="page-item"><a href="#" class="page-link">2</a></li>
    //             <li class="page-item"><a href="#" class="page-link">3</a></li>
    //             <li class="page-item"><a href="#" class="page-link">4</a></li>
    //             <li class="page-item"><a href="#" class="page-link">5</a></li>
    //             <li class="page-item"><a href="#" class="page-link">Next</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>        
    //   </div>

    //   <div id="addEmployeeModal" class="modal fade">
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <form>
    //           <div class="modal-header">						
    //             <h4 class="modal-title">Add Employee</h4>
    //             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    //           </div>
    //           <div class="modal-body">					
    //             <div class="form-group">
    //               <label>Name</label>
    //               <input type="text" class="form-control" required/>
    //             </div>
    //             <div class="form-group">
    //               <label>Email</label>
    //               <input type="email" class="form-control" required/>
    //             </div>
    //             <div class="form-group">
    //               <label>Address</label>
    //               <textarea class="form-control" required></textarea>
    //             </div>
    //             <div class="form-group">
    //               <label>Phone</label>
    //               <input type="text" class="form-control" required/>
    //             </div>					
    //           </div>
    //           <div class="modal-footer">
    //             <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
    //             <input type="submit" class="btn btn-success" value="Add"/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   <div id="editEmployeeModal" class="modal fade">
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <form>
    //           <div class="modal-header">						
    //             <h4 class="modal-title">Edit Employee</h4>
    //             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    //           </div>
    //           <div class="modal-body">					
    //             <div class="form-group">
    //               <label>Name</label>
    //               <input type="text" class="form-control" required/>
    //             </div>
    //             <div class="form-group">
    //               <label>Email</label>
    //               <input type="email" class="form-control" required/>
    //             </div>
    //             <div class="form-group">
    //               <label>Address</label>
    //               <textarea class="form-control" required></textarea>
    //             </div>
    //             <div class="form-group">
    //               <label>Phone</label>
    //               <input type="text" class="form-control" required/>
    //             </div>					
    //           </div>
    //           <div class="modal-footer">
    //             <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
    //             <input type="submit" class="btn btn-info" value="Save"/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   <div id="deleteEmployeeModal" class="modal fade">
    //     <div class="modal-dialog">
    //       <div class="modal-content">
    //         <form>
    //           <div class="modal-header">						
    //             <h4 class="modal-title">Delete Employee</h4>
    //             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    //           </div>
    //           <div class="modal-body">					
    //             <p>Are you sure you want to delete these Records?</p>
    //             <p class="text-warning"><small>This action cannot be undone.</small></p>
    //           </div>
    //           <div class="modal-footer">
    //             <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>
    //             <input type="submit" class="btn btn-danger" value="Delete"/>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default AddMedicos;
