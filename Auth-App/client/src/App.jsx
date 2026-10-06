import React from 'react'
import Home from './components/Home'
import Counter from './components/Counter'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<About/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/stopwatch" element={<h1>Stopwatch App</h1>}/>
        <Route path="/store" element={<h1>Store Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Route>
      </Routes></BrowserRouter>
    </div>
  )
}

export default App
