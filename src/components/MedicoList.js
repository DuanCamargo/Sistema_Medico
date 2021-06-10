import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MedicoDataService from "../services/MedicoDataService";

const MedicoList = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [medicos, setmedicos] = useState();

  const retrieveMedicos = () => {
    MedicoDataService.getAll()
      .then(response => {
        setmedicos(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const deleteMedico = (id) => {
    if (window.confirm('Deseja excluir?')){
      MedicoDataService.remove(id)
      .then(response => {
        console.log(response.data)
        retrieveMedicos()
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  const removeAllmedicos = () => {
    if (window.confirm('Deseja excluir tudo?')){
      MedicoDataService.removeAll()
      .then(response => {
        console.log(response.data)
        retrieveMedicos()
      })
      .catch(e => {
        console.log(e)
      })
    }
  };

  const findByTitle = () => {
    MedicoDataService.findByTitle(searchTitle)
    .then(response => {
      setmedicos(response.data)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  };

  useEffect(() => {
    retrieveMedicos();
  }, []);

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
        <h4>medicos List</h4>
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
            medicos &&
            medicos.map((tutorial, index) => (
              <tr>
                <th scope="row">{tutorial.key}</th>
                <td>{tutorial.title}</td>
                <td>{tutorial.description}</td>
                <td> 
                  <Link to={"/Medico/" + tutorial.id} className="btn btn-warning">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link onClick={() => deleteMedico(tutorial.id)} className="btn btn-danger">
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
          onClick={removeAllmedicos}>
          Remove All
        </button>
      </div>
    </div>
  );
};
export default MedicoList;
