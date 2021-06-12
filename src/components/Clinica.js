import React, { useState, useEffect } from "react";
import ClinicaDataService from "../services/ClinicaDataService";
import { Link } from "react-router-dom";

const Clinica = props => {

  const initialClinicaState = {
    id: null,
    name: '',
    address: "",
    telephone: "",
  };
  
  const [message, setMessage] = useState("");
  const [currentClinica, setCurrentClinica] = useState(initialClinicaState);

  //PARAMETRO PASSADO (NAME)
  const [key, setKey] = useState(props.match.params.id)

  const getClinica = id => {
    ClinicaDataService.get(id)
     .then(response => {
       console.log(response)
       setCurrentClinica(response.data);
     })
     .catch(e => {console.log(e)})
  }

  useEffect(()=>{
    getClinica(key)
  }, [])

  //CRIA UM ITEM NO OBJETO COM O NAME DO INPUT E O VALUE DELE.
  //TEM QUE SER UM QUE JÁ EXISTE NO OBJETO.
  const handleInputChange = event => { 
    const {name, value} = event.target;
    setCurrentClinica({...currentClinica, [name] : value});
  }

  //TRANSFORMANDO STATE PUBLISHED PARA BOOLEANO.
  const updatePublished = status => {
    const data = {
      name: currentClinica.name,
      address: currentClinica.address,
      telephone: currentClinica.telephone
    };
    ClinicaDataService.update(key, data);
    setCurrentClinica(data)
  };

  const updateClinica = () => {
    ClinicaDataService.update(key, currentClinica)
      .then(response => {
        console.log(response);
      })
      .catch(e => {console.log(e)});
  }

  const deleteClinica = () => {
    if(window.confirm("Deseja deletar a clínica?")){
      ClinicaDataService.remove(key)
        .then(response => {
          console.log(response)

          //CHAMA A PAGINA LISTA DE CLINICAS
          props.history.push("/clinicalist")
        })
        .catch(e => {console.log(e)})
    }
  };

  return (
    <div className="clinica-box text-left">
      {currentClinica.id !== null ? (
        <div className="edit-form">
          <h4>Clínica</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={currentClinica.name}
              onChange={handleInputChange}
              />

              <label htmlFor="address">Endereço</label>
              <input 
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={currentClinica.address}
              onChange={handleInputChange}
              />

              <label htmlFor="telephone">Telefone</label>
              <input 
              type="tel"
              className="form-control"
              id="telephone"
              name="telephone"
              value={currentClinica.telephone}
              onChange={handleInputChange}
              />
            </div>
          </form>
          
          <button className="badge badge-danger mr-2" onClick={deleteClinica}>
            Delete
          </button>
          <Link to="/clinicalist">
            <button
              type="submit"
              className="badge badge-success"
              onClick={updateClinica}
              >
                Update
              </button>
          </Link>
          <p>{message}</p>
          </div>
      ) : (
        <div>
          <br />
          <p>Clínica não encontrada...</p>
        </div>
      )}
    </div>
  )
};

export default Clinica;
