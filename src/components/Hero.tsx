import { profile } from '../content/profile';

export default function Hero() {
  return (
    <header>
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
    </header>
  );
}
