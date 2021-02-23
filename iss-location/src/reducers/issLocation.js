import { REQUEST_ISS_LOCATION } from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  latitude: -19.967279,
  longitude: -44.198689,
};

const issLocation = (
  state = INITIAL_ISS_LOCATION_STATE,
  { type, payload },
) => {
  switch (type) {
  case REQUEST_ISS_LOCATION:
    return {
      ...state,
      latitude: payload.latitude,
      longitude: payload.longitude,
    };
  default:
    return state;
  }
};

export default issLocation;
