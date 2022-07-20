import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { propPokedex } = this.props;
    const { name, type, averageWeight, image } = propPokedex;

    return (
      <div className='pokemon'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  propPokedex: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
