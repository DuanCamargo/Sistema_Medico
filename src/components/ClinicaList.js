import React, { useState } from "react";
import { Link } from "react-router-dom"
import ClinicaDataService from '../services/ClinicaDataService'

const ClinicaList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [clinics, setClinics] = useState(ClinicaDataService.getAll())


  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  }

  const deleteClinic = (id) => {
    if (window.confirm("Deseja realmente remover?")){
      ClinicaDataService.remove(id);
      setClinics(ClinicaDataService.getAll)
    }
  }

  const removeAllClinics = () => {
    ClinicaDataService.removeAll();
    setClinics(ClinicaDataService.getAll());
  }

  const findByTitle = () => {
    setClinics(ClinicaDataService.getById(searchTitle))
  }

  return (
    <div className="list row clinica-list">
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
        <h4>Lista de clínicas</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Endereço</th>
              <th scope="col">Telefone</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              clinics &&
              clinics.map((tutorial, index) => (
                <tr>
                  <th scope="row">{tutorial.id}</th>
                  <td>{tutorial.name}</td>
                  <td>{tutorial.address}</td>
                  <td>{tutorial.telephone}</td>
                  <td> <Link to={"/clinica/" + tutorial.name}
                    className="badge badge-warning">Edit</Link>
                  </td>
                  <td> <Link onClick={() => deleteClinic(tutorial.name)}
                  className="badge badge-danger">Remove</Link>
                  </td>
                </tr>))}
          </tbody>
        </table>
        <button
        className="btn btn-danger"
        onClick={removeAllClinics}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default ClinicaList;