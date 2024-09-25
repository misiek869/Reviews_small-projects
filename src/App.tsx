import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { GrPrevious, GrNext } from 'react-icons/gr'

import reviews from './data'

function App() {
	const [person, setPerson] = useState<number>(1)

	const { id, name, job, image, text } = reviews[person]

	return (
		<main>
			<div className='review'>
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
					<button className='prev-btn' type='button'>
						<GrPrevious />
					</button>
					<button className='next-btn' type='button'>
						<GrNext />
					</button>
				</div>
			</div>
		</main>
	)
}

export default App
