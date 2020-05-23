import React from 'react'

export default function QuizView({ question, options, onClick }) {
	return (
		<div className='quiz-view'>
			<h1 className='h1'>{question}</h1>
			<div className='button-container'>
				{options.map((data, i) => {
					return (
						<button
							className='button btn'
							key={i}
							onClick={() => onClick(data.city)}
						>
							{data.answer}
						</button>
					)
				})}
			</div>
		</div>
	)
}
