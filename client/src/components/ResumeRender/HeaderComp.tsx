import React from "react";

interface Props {
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  linkedIn?: string | null;
  website?: string | null;
}

const Header = ({
  firstname = "John",
  lastname = "Doe",
  email,
  linkedIn,
  website,
}: Props) => {
  const links: { name: string; link: string }[] = [];

  if (email === null || email === undefined) {
    links.push({ name: "Email", link: "yourname@email.com" });
  } else {
    links.push({ name: "Email", link: email });
  }

  if (linkedIn) {
    links.push({
      name: "LinkedIn",
      link: linkedIn,
    });
  }
  if (website) {
    links.push({
      name: "Website",
      link: website,
    });
  }

  function getLinks() {
    if (links.length === 0) {
      return null;
    } else if (links.length === 1) {
      if (links[0].name !== "email") {
        return (
          <a className="link" target="_blank" href={links[0].link}>
            {links[0].name}
          </a>
        );
      }
      return;
    } else {
      // Render multiple links separated by '|'
      const linkElements = links.map((link, index) => (
        <React.Fragment key={index}>
          <a className="link" target="_blank" href={link.link}>
            {link.name}
          </a>
          {index < links.length - 1 && " | "}
        </React.Fragment>
      ));
      return <div className="header-links">{linkElements}</div>;
    }
  }

  return (
    <div className="header">
      <h2>{firstname + " " + lastname}</h2>
      {getLinks()}
    </div>
  );
};

export default Header;
