import React from 'react';

const Team = () => {
  const members = [
    { name: 'Alice', role: 'Game Designer' },
    { name: 'Bob', role: 'Programmer' },
    { name: 'Charlie', role: 'Artist' },
  ];

  return (
    <section id="team">
      <h2>Meet the Team</h2>
      {members.map((m, i) => (
        <div key={i}>
          <h3>{m.name}</h3>
          <p>{m.role}</p>
        </div>
      ))}
    </section>
  );
};

export default Team;