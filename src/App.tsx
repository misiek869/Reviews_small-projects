import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { GrPrevious, GrNext } from 'react-icons/gr'

import reviews from './data'

function App() {
	const [person, setPerson] = useState<number>(1)

	const { name, job, image, text } = reviews[person]

	const checkNumber = (number: number): number => {
		if (number > reviews.length - 1) {
			return 0
		}
		if (number < 0) {
			return reviews.length - 1
		}
		return number
	}

	const nextPerson = () => {
		setPerson(person => {
			let newIndex = person + 1
			return checkNumber(newIndex)
		})
	}
	const prevPerson = () => {
		setPerson(person => {
			let newIndex = person - 1
			return checkNumber(newIndex)
		})
	}

	const randomUser = () => {
		let randomNumber = Math.floor(Math.random() * reviews.length)
		if (randomNumber === person) {
			randomNumber = person + 1
		}
		setPerson(checkNumber(randomNumber))
	}

	return (
		<main>
			<article className='review'>
				<div className='img-container'>
					<img className='person-img' src={image} alt={name} />
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>
				<h4 className=''>{name}</h4>
				<p className='job'>{job}</p>
				<p className='info'>{text}</p>
				<div className='btn-container'>
					<button className='prev-btn' type='button' onClick={prevPerson}>
						<GrPrevious />
					</button>
					<button className='next-btn' type='button' onClick={nextPerson}>
						<GrNext />
					</button>
				</div>
				<button className='btn btn-hipster' onClick={() => randomUser()}>
					random user
				</button>
			</article>
		</main>
	)
}

export default App
