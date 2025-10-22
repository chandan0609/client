import React from 'react';
const ExpRow = ({ company, title, location, from, to }) => {
  return (
<tr>
<td>{company}</td>
<td className="hide-sm">{title}</td>
<td className="hide-sm">
{from} - {to} </td>
<td>
<button className="btn btn-danger">
Delete
</button>
</td>
</tr>
  );
};
export default ExpRow;