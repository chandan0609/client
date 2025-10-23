import React from 'react';
const EduRow = ({ school, degree, fieldofstudy, from, to }) => {
  return (
    <tr>
      <td>{school}</td>
      <td className="hide-sm">{degree}</td>
      <td className="hide-sm">
        {from} - {to}
      </td>
      <td>
        <button className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};
export default EduRow;