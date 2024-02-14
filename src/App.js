import './App.css'
import { Route,Routes } from 'react-router-dom'
import BookPage from './Pages/BookPage'
import AuthorPage from './Pages/AuthorPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<BookPage/>} />
        <Route path='/author' element={<AuthorPage/>} />
      </Routes>
    </div>
  )
}

export default App;