import { profile } from '../content/profile';

export default function Hero() {
  return (
    <header>
      <p className="muted">{profile.location}</p>
      <h1>{profile.name}</h1>
      <h2 style={{ fontWeight: 400, color: '#94a3b8' }}>{profile.title}</h2>
      <p>{profile.summary}</p>
    </header>
  );
}
