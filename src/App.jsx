import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from 'src/routes/homePage/HomePage'
import SingleBreedPage from 'src/routes/singleBreedPage/SingleBreedPage'
import NotFoundPage from 'src/routes/notFoundPage/NotFoundPage'


const App = () => {

  return (
    <Router>
      <Routes>
        {/* General */}
        <Route path="/" element={<HomePage />} />
        <Route path="/breed/:id" element={<SingleBreedPage />} />
        
        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
