import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer.tsx'
import './assets/styles/index.scss'
import './assets/styles/post.scss'
import Post from './components/post.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Post title='test' description='test' date='now' imageSrc='src/assets/images/emailIcon.png' imageAlt='image' readMoreLink='varzesh3.com'></Post>
    <Footer />
    
  </React.StrictMode>,
)
