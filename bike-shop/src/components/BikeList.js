import React from 'react';
import BikeCard from './Bike';

class BikeList extends React.Component {
  render() {
    const { bikes } = this.props;

    return (
      <section className="bike-list">
        {bikes.map(bike => <BikeCard bike={bike} />)}
      </section>
    );
  }
}

export default BikeList;