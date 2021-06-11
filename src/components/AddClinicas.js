import React, {useState} from "react";
import ClinicaDataService from '../services/ClinicaDataService'
import { Link } from "react-router-dom";

const AddClinicas = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    telefone: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  //PASSANDO NAME E VALUE PARA AS CONSTANTES, E ATRIBUINDO O ITEM DO OBJETO NAME O QUE TEM VALUE
  const handleInputChange = event => {
    const {name, value} = event.target;
    setTutorial({...tutorial, [name]: value});
  }

  //INSERINDO NOS DADOS.
  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description,
      telefone: tutorial.telefone,
      published: false
    }

    ClinicaDataService.create(data);
    setSubmitted(true);
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  }
  
  return (
    <div className="submit-form clinica-box">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>

          {/**FORMULÁRIO PARA INCLUSÃO DOS DADOS */}
          <form onSubmit={saveTutorial}>
            <div className="form-group">
              <label htmlFor="title">Nome</label>
              <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                required
                value={tutorial.telefone}
                onChange={handleInputChange}
                name="telefone"
              />
            </div>
            <button type="submit"
                    className="btn btn-success">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddClinicas;
