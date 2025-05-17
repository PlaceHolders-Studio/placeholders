import React from 'react';

const Projects = () => {
  const games = [
    {
      title: 'Paper Blades',
      description: 'Taktyczna gra papierowych wojowników.',
      link: 'https://itch.io/paper-blades'
    },
    {
      title: 'KnotFun',
      description: 'Logiczna gra o węzłach i plątaniu.',
      link: 'https://itch.io/knotfun'
    }
  ];

  return (
    <section id="projects">
      <h2>Our Projects</h2>
      {games.map((game, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <a href={game.link} target="_blank" rel="noreferrer">Play on itch.io</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;