import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this.nombre = "Jerome Olvera";
  }
  obtenerNombre() {
    return "Codigo Facilito";
  }
  render() {
    return(
      <h1>Hola { this.obtenerNombre() }</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);