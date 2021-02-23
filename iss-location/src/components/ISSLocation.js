import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';

import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import { requestISSLocation as requestISSLocationAction } from '../actions';

const TWO_SECONDS = 2000;

class ISSLocation extends Component {
  componentDidMount() {
    const { requestISSLocation } = this.props;
    this.timer = setInterval(() => {
      requestISSLocation({ latitude: 10, longitude: 10 });
    }, TWO_SECONDS);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { latitude, longitude } = this.props;

    return (
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>{latitude}</span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>{longitude}</span>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ issLocation: { latitude, longitude } }) => ({
  latitude,
  longitude,
});

const mapDispatchToProps = (dispatch) => ({
  requestISSLocation: ({ latitude, longitude }) => dispatch(
    requestISSLocationAction({ latitude, longitude }),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
