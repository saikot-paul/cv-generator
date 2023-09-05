import React from "react";
import { FormData, nestedItem } from "../interface/interface";

interface Props {
  contactData: FormData;
}

const Header = ({ contactData }: Props) => {
  const links: { name: string; link: string }[] = [];

  function getParam(param: string) {
    if (
      contactData.value.length === 0 ||
      contactData.value[0].value.length === 0
    ) {
      return null;
    }

    const item: nestedItem | undefined = contactData.value[0].value.find(
      (item) => item.key === param
    );

    return item ? item.value : "";
  }

  const email = getParam("email");
  const linkedin = getParam("linkedin");
  const website = getParam("website");
  const firstname = getParam("firstname");
  const lastname = getParam("lastname");

  console.log(email);
  console.log(firstname);
  console.log(website);
  console.log(linkedin);
  console.log(lastname);
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
