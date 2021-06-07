import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Medico from "./components/Medico";
import AddMedicos from "./components/AddMedicos";
import MedicoList from "./components/MedicoList";
// import Paciente form "./component/Paciente";
import AddPacientes from "./components/AddPacientes";
// import PacienteList from "./components/PacienteList";
import AddEnfermeiras from "./components/AddEnfermeiras";
import Clinica from "./components/Clinica";
import AddClinicas from "./components/AddClinicas";
import AddFuncionarios from "./components/AddFuncionarios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">Home</Link>
        <div className="navbar-nav mr-auto">
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
              Médico
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/medicoList"} className="dropdown-item">
                Lista de Médicos
              </Link>
              <Link to={"/addMedicos"} className="dropdown-item">
                Adicionar Médico
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
              Paciente
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/pacienteList"} className="dropdown-item">
                Lista de Pacientes
              </Link>
              <Link to={"/addPacientes"} className="dropdown-item">
                Adicionar Paciente
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
              Enfermeira
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/enfermeiraList"} className="dropdown-item">
                Lista de Enfermeira
              </Link>
              <Link to={"/addEnfermeiras"} className="dropdown-item">
                Adicionar Enfermeira
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
            Funcionário
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/funcionarioList"} className="dropdown-item">
                Lista de Funcionários
              </Link>
              <Link to={"/addFuncionarios"} className="dropdown-item">
                Adicionar Funcionário
              </Link>
            </div>
          </div>
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
            Clínica
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/clínicaList"} className="dropdown-item">
                Lista de Clínica
              </Link>
              <Link to={"/addClinicas"} className="dropdown-item">
                Adicionar Clínica
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/medico" component={Medico} />
          <Route exact path="/addMedicos" component={AddMedicos} />
          <Route exact path="/medicoList" component={MedicoList} />
          {/* <Route exact path="/paciente" component={Paciente} /> */}
          <Route exact path="/addPacientes" component={AddPacientes} />
          <Route exact path="/addEnfermeiras" component={AddEnfermeiras} />
          <Route exact path="/enfermeiraList" component={MedicoList} />
          <Route exact path="/addFuncionarios" component={AddFuncionarios} />
          <Route exact path="/clinica/" component={Clinica} />
          <Route exact path="/addClinicas/" component={AddClinicas} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
