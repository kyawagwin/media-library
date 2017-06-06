import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
	<div className="">
		<nav className="">
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="library" activeClassName="active">library</Link>
		</nav>
	</div>
);

export default Header;