import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error, Landing, Register } from './pages'
import { AllActivity, Profile, AddActivity, SharedLayout } from './pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={

              <SharedLayout />

          }
        >
          <Route path='all-activity' element={<AllActivity />} />
          <Route path='add-activity' element={<AddActivity />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
