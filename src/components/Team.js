import React from 'react';
import './Team.css';

const Team = () => {
  const members = [
    { name: 'Bartłomiej Gordon', role: 'Team Leader, Programmer' },
    { name: 'Julia Bugaj', role: 'Social Media Manager, Game Designer' },
    { name: 'Julia Wróbel', role: 'Game Designer, Artist' },
    { name: 'Maksymilian Kisiel', role: 'Programmer' },
    { name: 'Mateusz Górecki', role: 'Programmer' },
    { name: 'Wojciech Owczarek', role: 'Game Designer, Artist, Programmer' },
    { name: 'Samir Abu Safieh', role: 'Game Designer, Artist' }, // 7 osób
  ];

  return (
    <section id="team">
      {/* <h2>Meet the <span className="accent">Team</span></h2> */}
      <h2><span className="accent">Meet</span> the Team</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-member">
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
