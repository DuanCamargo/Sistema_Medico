import React, { useState } from "react";
import { Link } from "react-router-dom"
import ClinicaDataService from '../services/ClinicaDataService'

const ClinicaList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [tutorials, setTutorials] = useState(ClinicaDataService.getAll())


  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  }

  const deleteTutorial = (id) => {

  }

  const removeAllTutorials = () => {

  }

  const findByTitle = () => {
    setTutorials(ClinicaDataService.getById(searchTitle))
  }

  return (
    <div className="list row">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Tutorial List</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              tutorials &&
              tutorials.map((tutorial, index) => (
                <tr>
                  <th scope="row">{tutorial.key}</th>
                  <td>{tutorial.title}</td>
                  <td>{tutorial.description}</td>
                  <td> <Link to={"/clinica/" + tutorial.title}
                    className="badge badge-warning">Edit</Link>
                  </td>
                  <td> <Link onClick={() => deleteTutorial(tutorial.title)}
                  className="badge badge-danger">Remove</Link>
                  </td>
                </tr>))}
          </tbody>
        </table>
        <button
        className="m-3 btn btn-sm btn-danger"
        onClick={removeAllTutorials}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default ClinicaList;