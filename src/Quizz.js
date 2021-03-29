import React, { useState } from 'react';
import './quizz.css';
export default function Quizz() {
	const questions = [
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Home Tool Markup Language', isCorrect: false },
				
			],
		},
		{
			questionText: 'Choose the correct HTML tag for the largest heading',
			answerOptions: [
				{ answerText: '<h6>', isCorrect: false },
				{ answerText: '<head>', isCorrect: false },
				{ answerText: '<h1>', isCorrect: true },
				{ answerText: '<heading>', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct HTML tag for inserting a line break?',
			answerOptions: [
				{ answerText: '<br>', isCorrect: true },
				{ answerText: '<lb>', isCorrect: false },
				{ answerText: '<break>', isCorrect: false },
				
			],
		},
		{
			questionText: 'Which is the correct CSS syntax?',
			answerOptions: [
				{ answerText: 'body {color: black;}', isCorrect: true },
				{ answerText: '{body:color=black;}', isCorrect: false },
				{ answerText: 'body:color=black;', isCorrect: false },
				{ answerText: '{body;color:black;}', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these tags are all <table> tags?',
			answerOptions: [
				{ answerText: '<table><head><tfoot>', isCorrect: false },
				{ answerText: '<table><tr><td>', isCorrect: true },
				{ answerText: '<thead><body><tr>', isCorrect: false },
				{ answerText: '<table><tr><tt>', isCorrect: false },
				
			],
		},
			{
				questionText: 'What is the correct HTML for inserting an image?',
				answerOptions: [
					{ answerText: '<img alt="MyImage">image.gif</img>', isCorrect: false },
					{ answerText: '<img src="image.gif" alt="MyImage">', isCorrect: true },
					{ answerText: '<image src="image.gif" alt="MyImage">', isCorrect: false },
					{ answerText: '<img href="image.gif" alt="MyImage">', isCorrect: false },
					
				],
			},
				{
					questionText: 'How can you make a numbered list?',
					answerOptions: [
						{ answerText: '<ol>', isCorrect: true },
						{ answerText: '<ul>', isCorrect: false },
						{ answerText: '<dl>', isCorrect: false },
						{ answerText: '<list>', isCorrect: false },
						
					],
				},
				{
					questionText: 'What is the correct HTML for making a checkbox?',
					answerOptions: [
						{ answerText: '<checkbox>', isCorrect: false },
						{ answerText: '<input type="checkbox">', isCorrect: true },
						{ answerText: '<check>', isCorrect: false },
						{ answerText: '<input type="check">', isCorrect: false },
						
					],
				},
				{
					questionText: 'What does CSS stand for?',
					answerOptions: [
						{ answerText: 'Creative Style Sheets', isCorrect: false },
						{ answerText: 'Cascading Style Sheets', isCorrect: true },
						{ answerText: 'Computer Style Sheets', isCorrect: false },
						{ answerText: 'Colorful Style Sheet	', isCorrect: false },
						
					],
				},
				{
					questionText: 'Which property is used to change the background color?',
					answerOptions: [
						{ answerText: 'color', isCorrect: false },
						{ answerText: 'background-color', isCorrect: true },
						{ answerText: 'bgcolor', isCorrect: false },
						
					],
				},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}