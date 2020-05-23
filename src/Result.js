import React from 'react'

export default function Result({ NY, LA }) {
	if (NY > LA) {
		return (
			<>
				<h3 className='result-header credit_section'>
					Congrats, you are a survivor! You just escaped from LA!
				</h3>
				<img
					src='https://media.giphy.com/media/M9HhHPtrAzOvK/giphy.gif'
					alt='LA'
				/>
			</>
		)
	}
	return (
		<>
			<h3 className='result-header credit_section'>
				Congrats, you are a survivor! You just escaped from New York!
			</h3>
			<img
				src='https://media.giphy.com/media/FOV9923exXGM78DoSZ/giphy.gif'
				alt='New York'
			/>
		</>
	)
}
