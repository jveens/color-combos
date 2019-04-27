import React from 'react';

function ColorCard(props) {
	const { name, background, foreground } = props;

	return (
		<div style={{ backgroundColor: `#${background}`, color: `#${foreground}` }} className="color-card">
          <h2>{ name }</h2>
          <h3>#{ foreground }</h3>
          <h3>#{ background }</h3>
        </div>
	);
}

export default ColorCard;