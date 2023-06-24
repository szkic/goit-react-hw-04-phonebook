import PropTypes from 'prop-types';

export const Filter = filter => {
  const { onChange } = filter;

  const handleInputChange = e => onChange(e.target.value);

  return (
    <>
      <h3>Find contact by name</h3>
      <input onChange={handleInputChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
