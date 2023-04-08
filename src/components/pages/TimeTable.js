import React, { useState } from 'react';

const Timetable = ({data}) => {
  const [info, setInfo] = useState([]);

  setInfo(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {info.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;