import React, { useState } from 'react';
import { getLinksForNavbar } from './services';

const Navbar = (): JSX.Element => {
	const [isVisitorInSystem, setVisitorInSystem] = useState(false);
	return <nav>
		<ul>
			{getLinksForNavbar(isVisitorInSystem).map((item) => <li key={item}>{item}</li>)}
		</ul>
	</nav>
}

export default Navbar;