import React from 'react';
import PropTypes from 'prop-types';

function Dashboard(props) {
  const handleLogut = () => {
    props.history.push('/login');
  };

  return (
    <div>
      Welcome User
      <br />
      <br />
      <button
        type="button"
        onClick={handleLogut}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  );
}

Dashboard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dashboard;
