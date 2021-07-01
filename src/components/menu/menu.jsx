import "./menu.scss";

export default function Menu() {
  return (
    <div className="ham-menu">
      <ul>
        <li>
          <a href="#about">about me</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#projects">projects</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#contact">contact me</a>
        </li>
      </ul>
    </div>
  );
}
