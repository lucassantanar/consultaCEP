import React from 'react';

class List extends React.Component {
    state = {
        convenios: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/datasnap/rest/TServerMethods1/convenios')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    convenios: res
                });
            });
    }

    render(){
        return(
            <div>
                <h1>Lista de Convenios</h1>

                <ul>
                    {this.state.convenios.map(item => (
                       <li key ={item.id}>
                           <p><b>Registro Convenio:</b> {item.id_convenio}</p>
                           <p><b>Nome do Convenio:</b> {item.nom_convenio}</p>
                           <p><b>Nome Reduzido:</b> {item.nom_reduzido}</p>
                       </li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;



