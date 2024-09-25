import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { GrPrevious, GrNext } from 'react-icons/gr'

import reviews from './data'

function App() {
	const [person, setPerson] = useState<number>(1)

	const { name, job, image, text } = reviews[person]

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
					<button
						className='prev-btn'
						type='button'
						onClick={() => setPerson(person - 1)}>
						<GrPrevious />
					</button>
					<button
						className='next-btn'
						type='button'
						onClick={() => setPerson(person + 1)}>
						<GrNext />
					</button>
				</div>
				<button className='btn btn-hipster' onClick={() => {}}>
					random user
				</button>
			</article>
		</main>
	)
}

export default App
