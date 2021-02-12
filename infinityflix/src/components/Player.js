import React from 'react';

class Player extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h1>
          {movie.title}
        </h1>
        <h3>
          {/* {categories.name} */}
          {' '}
          -
          {' '}
          {movie.released}
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ movie.link }
          />
        </section>
      </div>
    );
  }
}

export default Player;
