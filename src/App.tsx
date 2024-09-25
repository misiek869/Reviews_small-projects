import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'

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
			</div>
		</main>
	)
}

export default App
