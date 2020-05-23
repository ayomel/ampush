import React, { useState } from 'react'
import QuizView from './QuizView'
import Result from './Result'
import ProgressBar from './ProgressBar'
import './App.css'

import { QUIZ } from './quiz-data'

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [scoreNY, setScoreNY] = useState(0)
	const [scoreLA, setScoreLA] = useState(0)
	const [results, setResults] = useState(false)
	const [done, setDone] = useState(false)
	const [quizInMotion, setQuizInMotion] = useState(false)

	function handleClick(selected) {
		if (selected === 'LA') {
			setScoreLA(scoreLA + 1)
		} else {
			setScoreNY(scoreNY + 1)
		}

		if (currentQuestion === 4) {
			setResults(!results)
			setDone(!done)
		} else {
			setCurrentQuestion(currentQuestion + 1)
		}
	}

	function resetGame() {
		setCurrentQuestion(0)
		setScoreLA(0)
		setScoreNY(0)
		setResults(false)
	}

	function Progress(progress) {
		if (results) {
			return 100
		}
		return progress * 20
	}

	console.log(done)
	return (
		<div className='App'>
			<header className='header'>
				<h2 className='h2'>Coding Challenge: Quiz</h2>
				<h3 className='h3'>“Did You Escape From NY or LA?”</h3>
			</header>
			{!quizInMotion && (
				<button className='start-button' onClick={() => setQuizInMotion(true)}>
					<span className='span'>Start Quiz</span>
				</button>
			)}
			{quizInMotion && (
				<div className='content'>
					<ProgressBar progress={Progress(currentQuestion)} />
					{!results && (
						<QuizView {...QUIZ[currentQuestion]} onClick={handleClick} />
					)}
					{results && (
						<div>
							<Result NY={scoreNY} LA={scoreLA} />
							<button className='button btn center-button' onClick={resetGame}>
								Play again?
							</button>
							<img src='https://giphy.com/gifs/iGjhr8hINJiSY/html5' alt='' />
						</div>
					)}
				</div>
			)}
			<footer className='footer'>
				<small>
					&copy; Copyright {new Date().getFullYear()}, Melverton Hunter
					Corporation
				</small>
			</footer>
		</div>
	)
}

export default App
