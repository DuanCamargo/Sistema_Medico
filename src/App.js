import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddMedicos from "./components/AddMedicos";
import AddPacientes from "./components/AddPacientes";
import AddEnfermeiras from "./components/AddEnfermeiras";
import AddClinicas from "./components/AddClinicas";
import AddFuncionarios from "./components/AddFuncionarios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">Home</Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/addMedicos"} className="nav-link">
              Adicionar Médico
            </Link>
          </li>
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
          <Route exact path="/addPacientes" component={AddPacientes} />
          <Route exact path="/addEnfermeiras" component={AddEnfermeiras} />
          <Route exact path="/addFuncionarios" component={AddFuncionarios} />
          <Route exact path="/addClinicas" component={AddClinicas} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
