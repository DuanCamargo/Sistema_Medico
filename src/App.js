import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddMedicos from "./components/AddMedicos";
import Medico from "./components/Medico";
import MedicoList from "./components/MedicoList";
import AddPacientes from "./components/AddPacientes";
import AddEnfermeiras from "./components/AddEnfermeiras";
import AddClinicas from "./components/AddClinicas";
import Clinica from './components/Clinica'
import ClinicaList from './components/ClinicaList'
import AddFuncionarios from "./components/AddFuncionarios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <Link to={"/home"} className="navbar-brand">Home</Link>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Médico
            </button>
            <div class="dropdown" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="./medicoList">Lista de Médicos</a>
              <a class="dropdown-item" href="/addMedicos">Adicionar Médicos</a>
            </div>
          </div>
          {/* 
          <li> 
            <Link to={"/addMedicos"} className="nav-link">
              Adicionar Médico
            </Link>
          </li>
          <li> 
            <Link to={"/medico"} className="nav-link">
              Médico
            </Link>
          </li>
          <li>
            <Link to={"/medicoList"} className="nav-link">
              Médico List
            </Link>
          </li>*/}
          <li className="nav-item">
            <Link to={"/addPacientes"} className="nav-link">
            Adicionar Paciente
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addEnfermeiras"} className="nav-link">
              Adicionar Enfermeira
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addFuncionarios"} className="nav-link">
            Adicionar Funcionário
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addClinicas"} className="nav-link">
              Adicionar Clínica
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/addMedicos" component={AddMedicos} />
          <Route exact path="/medico" component={Medico} />
          <Route exact path="/medicoList" component={MedicoList} />
          <Route exact path="/addPacientes" component={AddPacientes} />
          <Route exact path="/addEnfermeiras" component={AddEnfermeiras} />
          <Route exact path="/addFuncionarios" component={AddFuncionarios} />
          <Route exact path="/addClinicas/" component={AddClinicas} />
          <Route path="/clinica/:id" component={Clinica} />
          <Route exact path="/clinicalist" component={ClinicaList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
