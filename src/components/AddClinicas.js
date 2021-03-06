import React, {useState} from "react";
import ClinicaDataService from '../services/ClinicaDataService'
import InputMask from "react-input-mask"
import { AuthContext } from "../context/clinicaContext";

const AddClinicas = () => {
  const { initialClinicState } = React.useContext(AuthContext)

  const [clinica, setClinica] = useState(initialClinicState);
  const [submitted, setSubmitted] = useState(false);

  //PASSANDO NAME E VALUE PARA AS CONSTANTES, E ATRIBUINDO O ITEM DO OBJETO NAME O QUE TEM VALUE
  const handleInputChange = event => {
    const {name, value} = event.target;
    setClinica({...clinica, [name]: value});
  }

  //INSERINDO NOS DADOS.
  const saveClinica = () => {
    var data = {
      name: clinica.name,
      address: clinica.address,
      telephone: clinica.telephone,
    }

    ClinicaDataService.create(data)
      .then(response => {
        console.log(response)
      })
      .catch(e => {console.log(e)})
    setSubmitted(true);
  };

  const newClinic = () => {
    setClinica(initialClinicState);
    setSubmitted(false);
  }

  return (
    <div className="submit-form clinica-box text-left">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newClinic}>
            Add
          </button>
        </div>
      ) : (
        <div>

          {/**FORMULÁRIO PARA INCLUSÃO DOS DADOS */}
          {console.log(initialClinicState)}
          <form onSubmit={saveClinica}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
              type="text"
              className="form-control"
              id="name"
              required
              value={clinica.name}
              onChange={handleInputChange}
              name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={clinica.address}
                onChange={handleInputChange}
                name="address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telefone</label>
              <InputMask
                mask="(99) 9999-9999"
                type="text"
                className="form-control"
                id="telephone"
                required
                value={clinica.telephone}
                onChange={handleInputChange}
                name="telephone"
              />
            </div>
            <button type="submit"
                    className="btn btn-success">Adicionar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddClinicas;
