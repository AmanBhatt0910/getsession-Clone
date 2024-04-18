import './App.css';
import Home from './components/Page/Home';
import Blog from "./components/Page/Blog";
import { Routes, Route } from 'react-router-dom';
import Support from './components/Page/Support';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/blog" element = {<Blog/>}/>
          <Route path="/support" element = {<Support/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
