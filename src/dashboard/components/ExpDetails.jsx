import React from 'react';
import { useSelector } from 'react-redux';
import ExpRow from './ExpRow';
const ExpDetails = () => {
// Get the profile object from Redux store
const profile = useSelector((state) => state.profile.profile);

// The experience array is inside profile.data, not directly in profile
const experienceArray = profile?.data?.experience;

// Check if the experience array exists and has elements
if (!experienceArray || experienceArray.length === 0) {
return <div>No Experience Details Available</div>;
}
return (
<>
<h2 className="my-2">Experience Credentials</h2>
<table className="table">
<thead>
<tr>
<th>Company</th>
<th className="hide-sm">Title</th>
<th className="hide-sm">Years</th>
<th></th>
</tr>
</thead>
<tbody>
{experienceArray.map((exp, index) => ( <ExpRow
key={exp._id || index}
company={exp.company}
title={exp.title}
location={exp.location}
from={new Date(exp.from).toLocaleDateString(undefined, {
year: 'numeric',
month: 'long',
day: 'numeric'
})}
to={exp.to ?
new Date(exp.to).
toLocaleDateString(undefined, {
year: 'numeric',
month: 'long',
day: 'numeric'
}) : 'Current'}
/>
))}
</tbody>
</table>
</>
  );
};
export default ExpDetails;