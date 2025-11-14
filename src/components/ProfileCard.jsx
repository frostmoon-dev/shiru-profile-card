// src/components/ProfileCard.jsx
import cas from "../assets/cas.png";

function ProfileCard(props) {
  const { data } = props;

  return (
    <div className="profile-card">
      <img
        src={cas} // This is still fine
        alt="Profile"
        className="profile-image"
      />
      <h2>{data.name}</h2>
      <p>{data.title}</p>

      <div className="social-links">
        {data.socials.map((social) => (
          <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <div className="tech-stack">
        <h3>My Tech Stack</h3>
        <div className="badge-container">
          {data.techStack.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>

      <div className="hobby-section">
        <h4>{data.hobbies.title}</h4>
        <p>{data.hobbies.text}</p>
      </div>

      <div className="games-section">
        <h4>{data.games.title}</h4>
        <div className="badge-container">
          {data.games.list.map((game) => (
            <span key={game} className="game-badge">{game}</span>
          ))}
        </div>
      </div>
        
    </div>

    
  );
}

export default ProfileCard;