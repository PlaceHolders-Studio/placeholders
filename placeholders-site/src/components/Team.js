import React from 'react';

const Team = () => {
  const members = [
    { name: 'Bartłomiej Gordon', role: 'Team Leader, Programmer' },
    { name: 'Julia Bugaj', role: 'Social Media Manager, Game Designer' },
    { name: 'Julia Wróbel', role: 'Game Designer, Artist' },
    { name: 'Maksymilian Kisiel', role: 'Programmer' },
    { name: 'Mateusz Górecki', role: 'Programmer' },
    { name: 'Wojciech Owczarek', role: 'Game Designer, Artist, Programmer' },
    { name: 'Samir Abu Safieh', role: 'Game Designer, Artist' },
  ];

  return (
    <section id="team">
      <h2>Meet the Team</h2>
      {members.map((m, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h3>{m.name}</h3>
          <p>{m.role}</p>
        </div>
      ))}
    </section>
  );
};

export default Team;