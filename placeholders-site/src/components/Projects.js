import React from 'react';
import './Projects.css';

const Projects = () => {
  const games = [
    {
      title: 'Paper Blades',
      description: 'Paper Blades is a dynamic roguelike in which you command a team of origami samurai as they fight for their paper homes against the sinister Inkies. Explore mysterious islands, upgrade your feudal crew, discover new skills and never give up - the gods are on your side! To win, you will need masterful tactics and an unwavering voice - although you control the team leader, you can influence the rest of the team with voice commands. Get ready for a battle of paper!',
      link: 'https://place-holders.itch.io/paper-blades',
      img: '/img/paper_blades.png'
    },
    {
      title: 'KnotFun',
      description: 'kNOT FUN is a unique game combining swarm-style gameplay with roguelike progression and character development. The game is set in a Wild West atmosphere with a slight futuristic twist. Three bounty hunters wake up in a bar after a long night — for unknown reasons, they find themselves tied together with ropes in a literal KNOT. Under these unusual circumstances, they must face hordes of robots while dealing with the challenge of limited mobility in order to UNTIE this peculiar mystery. The game is designed to provide solid fun during LOOSE hangouts with friends in local co-op for up to 4 players.',
      link: 'https://place-holders.itch.io/knot-fun',
      img: '/img/knot_fun.png'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Our <span className="accent">Projects</span></h2>
      <div className="projects-grid">
        {games.map((game, i) => (
          <div key={i} className="project-card">
            <div className="project-image">
              <img 
                src={process.env.PUBLIC_URL + game.img}
                alt={game.title}
              />
              <div className="project-overlay">
                <a href={game.link} target="_blank" rel="noreferrer" className="btn btn-primary">Play on itch.io</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;