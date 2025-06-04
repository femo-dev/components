import '../css/index.css';

export default function Header() {
  return (
    <div className="header">
    <div className="container">
        <h1>My Components</h1>
        <nav className="nav-links">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        </nav>
    </div>
    </div>
  );
}