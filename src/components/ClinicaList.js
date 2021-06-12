import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ClinicaDataService from '../services/ClinicaDataService'

const ClinicaList = () => {
  
  const [searchTitle, setSearchTitle] = useState("");
  const [clinics, setClinics] = useState([])

  useEffect(() => {
    retrieveClinics();
  }, [])

  const retrieveClinics = () => {
    ClinicaDataService.getAll()
      .then(response => {
        setClinics(response.data);
      })
      .catch(e => {console.log(e)})
  }

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);

    ClinicaDataService.findByTitle(searchTitle)
      .then(response => {
        setClinics(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const deleteClinic = (id) => {
    if (window.confirm("Deseja realmente remover?")){
      ClinicaDataService.remove(id)
        .then(response => {
          console.log(response.data)
          retrieveClinics();
        })
        .catch(e => {console.log(e)})
    }
  }

  const removeAllClinics = () => {
    if(window.confirm("Deseja remover todos?")){
      for (var indice in clinics) {
        ClinicaDataService.remove(clinics[indice].id)
        .then(response => {
          console.log(response.data)
          retrieveClinics()
        })
        .catch(e => {
          console.log(e);
        })
      }
    }  
  };

  const findByTitle = () => {
    
  };

  return (
    <div className="list row clinica-list">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Buscar por nome"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
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
              clinics.map((clinica) => (
                <tr>
                  <th scope="row">{clinica.id}</th>
                  <td>{clinica.name}</td>
                  <td>{clinica.address}</td>
                  <td>{clinica.telephone}</td>
                  <td> <Link to={"/clinica/" + clinica.id}
                    className="badge badge-warning">Edit</Link>
                  </td>
                  <td> <Link onClick={() => deleteClinic(clinica.id)}
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