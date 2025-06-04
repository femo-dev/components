import '../css/index.css';

export default function Button({ text, type }) {
  return <button className={`button ${type}`}>{text}</button>;
}