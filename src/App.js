// routing stuff
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Commission from "./components/commission/Commission"

// layout
import RootLayout from './layouts/RootLayout';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/Art-Portfolio-main" element={<RootLayout />}>
      <Route index element={<Home />} /> 
      {/* <Route path="home" element={<Home />} /> */}
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />} />
      <Route path='commission' element={<Commission />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
