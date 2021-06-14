import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EnfermeiraDataService from "../services/EnfermeiraDataService";

const EnfermeiraList = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [Enfermeiras, setEnfermeiras] = useState();

  const retrieveEnfermeiras = () => {
    EnfermeiraDataService.getAll()
      .then(response => {
        setEnfermeiras(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);

    findByTitle(searchTitle);
  };

  const deleteEnfermeira = (id) => {
    if (window.confirm('Deseja excluir?')){
      EnfermeiraDataService.remove(id)
      .then(response => {
        console.log(response.data)
        retrieveEnfermeiras()
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  console.log(Enfermeiras);

  const removeAllEnfermeiras = () => {
    if(window.confirm("Deseja remover todos?")){
      EnfermeiraDataService.remove()
      .then(response => {
        console.log(response.data)
        retrieveEnfermeiras()
      })
      .catch(e => {
        console.log(e)
      })
    }  
  };

  const findByTitle = (searchTitle) => {
    EnfermeiraDataService.findByTitle(searchTitle)
    .then(response => {
      setEnfermeiras(response.data)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  };

  useEffect(() => {
    retrieveEnfermeiras();
  }, []);

  return (
    <div className="list row">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          {/* <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div> */}
        </div>
      </div>
      <div className="col-md-10">
      <h4>LISTA DE ENFERMEIRAS</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="x">#</th>
              <th scope="col" class="x">Nome</th>
              <th scope="col" class="x">Sobrenome</th>
              <th scope="col" class="x">Endereço</th>
              <th scope="col" class="x">CPF</th>
              <th scope="col" class="x">COREN</th>
              <th scope="col" class="x">Telefonee</th>
              <th scope="col" class="x">E-mail</th>
              <th scope="col" class="x"></th>
              <th scope="col" class="x"></th>
            </tr>
          </thead>
          <tbody>
          {
            Enfermeiras &&
            Enfermeiras.map((Enfermeira, index) => (
              <tr>
                <th scope="row">{Enfermeira.id}</th>
                <td>{Enfermeira.Nome}</td>
                <td>{Enfermeira.Sobrenome}</td>
                <td>{Enfermeira.Endereco}</td>
                <td>{Enfermeira.CPF}</td>
                <td>{Enfermeira.Coren}</td>
                <td>{Enfermeira.Telefonee}</td>
                <td>{Enfermeira.Email}</td>
                <td> 
                  <Link to={"/Enfermeira/" + Enfermeira.id} className="btn btn-warning">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link onClick={() => deleteEnfermeira(Enfermeira.id)} className="btn btn-danger">
                    Remove
                  </Link>
                </td>
              </tr>
            ))
          }
            </tbody>
          </table>
        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllEnfermeiras}>
          Remove All
        </button>
      </div>
    </div>
  );
};
export default EnfermeiraList;
