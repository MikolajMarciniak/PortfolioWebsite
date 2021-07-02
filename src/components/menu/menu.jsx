import "./menu.scss";

const sectionLinks = [
  { title: "about me", link: "#about" },
  { title: "projects", link: "#projects" },
  { title: "contact me", link: "#contact" },
];

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"ham-menu " + (menuOpen && "active")}>
      {sectionLinks.map((section) => (
        <ul>
          <li>
            <a href={section.link} onClick={() => setMenuOpen()}>
              {section.title}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}
