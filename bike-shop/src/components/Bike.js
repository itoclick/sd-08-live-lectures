import React from 'react';

class Bike extends React.Component {
  render() {
    const { name, picture, price, color} = this.props.bike;

    return (
      <section className="bike-card">
        <h3>{name}</h3>
        <img src={picture} alt="Imagem da bicicleta"/>
        <div>R$ {price}</div>
        <div>Cor: {color}</div>
      </section>
    )
  }
}

export default Bike;
