import React from 'react';
import './estilos.css';

class List extends React.Component {
    state = {
        cep: [],
        texto: ''
    };

    onSend() {
        fetch(`http://apps.widenet.com.br/busca-cep/api/cep/${this.state.texto}+.json`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cep: res
                });
            });
        console.log(this.state.texto);
    }


    render() {
        return (
            <form className="login-container">
                <div className="div1">

                    <input onInput={(e) => this.setState({ texto: e.target.value })} type="text" name="message" placeholder="Digite seu CEP" className="form-control" />
                    <span className="input-group-btn">
                        <button type="button" onClick={this.onSend.bind(this)} className="btn btn-flat btn-primary">Pesquisar</button>
                    </span>

                </div>

                <div className="div2">
                    <ul>
                        <h1>Consulta de Cep</h1>
                        <li >
                            <p><b>CEP:</b> {this.state.cep.code}</p>
                            <p><b>Estado:</b> {this.state.cep.state}</p>
                            <p><b>Cidade:</b> {this.state.cep.city}</p>
                            <p><b>Distrito:</b> {this.state.cep.district}</p>
                            <p><b>Endereço:</b> {this.state.cep.address}</p>
                        </li>

                    </ul>
                </div>
            </form>

        )
    }
}

export default List;



