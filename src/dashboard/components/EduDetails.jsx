import React from 'react';
import { useSelector } from 'react-redux';
import EduRow from './EduRow';
const EduDetails = () => {
// Get the profile object from Redux store
const profile = useSelector((state) => state.
profile.
profile);
console.log('EduDetails rendering, profile:', profile);
// The education array is inside profile.data, not directly in profile
const educationArray = profile?.
data?.education;
console.log('Education array:', educationArray);
// Check if the education array exists and has elements
if (!
educationArray || educationArray.length === 0) {
return <div>No Education Details Available</div>;
}
return (
<table className="table">
<thead>
<tr>
<th>School</th>
<th className="hide-sm">Degree</th>
<th className="hide-sm">Years</th>
<th />
</tr>
</thead>
<tbody>
{educationArray.map((edu, index) => ( <EduRow
key={edu._id || index}
school={edu.school}
degree={edu.degree}
fieldofstudy={edu.fieldofstudy}
from={new Date(edu.from).toLocaleDateString(undefined, { year: 'numeric', month: 'long',
day: 'numeric' })}
to={new Date(edu.to).toLocaleDateString(undefined, { year: 'numeric', month: 'long',
day: 'numeric' })}
/>
))}
</tbody>
</table>
  );
};
export default EduDetails;