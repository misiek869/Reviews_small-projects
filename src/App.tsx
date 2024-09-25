import { useState } from 'react'

import reviews from './data'

function App() {
	const [person, setPerson] = useState<number>(0)

	const { id, name, job, image, text } = reviews[person]

	return (
		<main>
			<div className='review'></div>
		</main>
	)
}

export default App
