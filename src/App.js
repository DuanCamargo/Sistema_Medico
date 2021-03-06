import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Medico from "./components/Medico";
import MedicoAdd from "./components/MedicoAdd";
import MedicoList from "./components/MedicoList";
import Paciente from "./components/Paciente";
import AddPacientes from "./components/AddPacientes";
import PacienteList from "./components/PacienteList";
import Enfermeira from "./components/Enfermeira";
import EnfermeiraAdd from "./components/EnfermeiraAdd";
import EnfermeiraList from "./components/EnfermeiraList";
import Clinica from "./components/Clinica";
import AddClinicas from "./components/AddClinicas";
import ClinicaList from './components/ClinicaList'
import AddFuncionarios from "./components/AddFuncionarios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand"><h1>Home</h1></Link>
        <div className="navbar-nav mr-auto">
          <div class="dropdown">
            <button type="button" class="btn dropdown-toggle" id="buttonColor" data-toggle="dropdown">
              Médico
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to={"/medicoList"} className="dropdown-item">
                Lista de Médicos
              </Link>
              <Link to={"/medicoAdd"} className="dropdown-item">
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
              <Link to={"/enfermeiraAdd"} className="dropdown-item">
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
              <Link to={"/clinicalist"} className="dropdown-item">
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
          <Route exact path="/medico/:id" component={Medico} />
          <Route exact path="/medicoAdd" component={MedicoAdd} />
          <Route exact path={"/medicoList"} component={MedicoList} />
          <Route exact path="/paciente" component={Paciente} />
          <Route exact path="/addPacientes" component={AddPacientes} />
          <Route exact path="/pacienteList" component={PacienteList} />
          <Route exact path="/enfermeira/" component={Enfermeira} />
          <Route path="/enfermeira/:id" component={Enfermeira} />
          <Route exact path="/enfermeiraAdd" component={EnfermeiraAdd} />
          <Route exact path="/enfermeiraList" component={EnfermeiraList} />
          <Route exact path="/addFuncionarios" component={AddFuncionarios} />
          <Route exact path="/clinica/" component={Clinica} />
          <Route exact path="/addClinicas/" component={AddClinicas} />
          <Route path="/clinica/:id" component={Clinica} />
          <Route exact path="/clinicalist" component={ClinicaList} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
