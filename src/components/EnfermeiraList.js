import React, { useState } from "react";
import { Link } from "react-router-dom";
import TutorialDataService from "../services/EnfermeiraDataService";

const EnfermeiraList = () => {
  
  const [searchtitulo, setSearchtitulo] = useState("");
  const [tutorials, setTutorials] = useState(TutorialDataService.getAll());

  const onChangeSearchtitulo = e => {
    const searchtitulo = e.target.value;
    setSearchtitulo(searchtitulo);
  };

  const deleteTutorial = (id) => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.remove(id);
    }
  }

  const removeAllTutorials = () => {
    if (window.confirm('Deseja excluir?')){
      TutorialDataService.removeAll();
      setTutorials(TutorialDataService.getAll())
    }
  };
  const findBytitulo = () => {
    setTutorials(TutorialDataService.getById(searchtitulo))
  };

  return (
    <div className="list row">
      <div className="col-md-10">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by titulo"
            value={searchtitulo}
            onChange={onChangeSearchtitulo}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findBytitulo}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <h4>Tutorials List</h4>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">titulo</th>
              <th scope="col">descricao</th>
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
                <td>{tutorial.titulo}</td>
                <td>{tutorial.descricao}</td>
                <td> <Link to={"/tutorials/" + tutorial.titulo}
                  className="badge badge-warning">Edit</Link>
                </td>
                <td> <Link onClick={() => deleteTutorial(tutorial.titulo)}
                  className="badge badge-danger">Remove</Link>
                </td>
              </tr>
            ))}
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

export default EnfermeiraList;
