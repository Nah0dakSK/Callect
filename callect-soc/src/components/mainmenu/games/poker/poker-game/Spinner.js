import React from 'react';
import "./Poker.css";

const Spinner = () => {
	return(
		<div className="loading-container">
			<div className='spinner-container' >
				<image className='Spin' src={'/assets/chip.svg'} alt="Loading..." id='Spin'/>
			</div>
		</div>
	)
}

export default Spinner;