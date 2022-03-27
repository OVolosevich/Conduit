import React, { useState } from 'react';

function Navbar(): JSX.Element {
  const [isVisitorInSystem, setVisitorInSystem] = useState(false);
  const linksForGuest: string[] = ['home', 'sign in', 'sign up'];
  const linksForUser: string[] = ['home', 'new article', 'settings', 'username'];
  const getLinksForNavbar = (): string[] => (isVisitorInSystem ? linksForUser : linksForGuest);
  return (
    <nav>
      <ul>
        {getLinksForNavbar().map((item) => <li key={item}>{item}</li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
