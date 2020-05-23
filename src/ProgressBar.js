import React, { useState } from 'react'

import './App.css'

export default function ProgressBar({ progress }) {
	return (
		<div>
			<h2 className="progress-header">Progress: {`${progress}%`}</h2>
			<div className='progress-bar'>
				<div className='filler' style={{ width: `${progress}%` }} />
			</div>
		</div>
	)
}
