import React from 'react';
import PropTypes from 'prop-types';
import { getUser, removeUserSession } from '../Utils/Common';

function Dashboard(props) {
  const user = getUser();

  const handleLogut = () => {
    removeUserSession();
    props.history.push('/login');
  };

  return (
    <div>
      {`Welcome ${user}`}
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
