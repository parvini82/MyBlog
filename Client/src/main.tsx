import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer.tsx'
import Post from './components/post.tsx' 
import './assets/styles/index.scss'
import './assets/styles/post.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Footer />
    
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('home')!).render(
  <React.StrictMode>
    
    <Post title='Java' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used
      as a platform in itself. It is a fast, secure, reliable programming language for coding everything from
       mobile apps and enterprise software to big data applications and server-side technologies.'
      date='now' imageSrc='src/assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>
      <Post title='Python' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used
      as a platform in itself. It is a fast, secure, reliable programming language for coding everything from
       mobile apps and enterprise software to big data applications and server-side technologies.'
      date='now' imageSrc='src/assets/images/Python.png' imageAlt='image' readMoreLink='https://www.python.org/'></Post>
      <Post title='Java' description='Java is a widely-used programming language for coding web applications.
     It has been a popular choice among developers for over two decades, with millions of Java applications 
     in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used
      as a platform in itself. It is a fast, secure, reliable programming language for coding everything from
       mobile apps and enterprise software to big data applications and server-side technologies.'
      date='now' imageSrc='src/assets/images/Java.png' imageAlt='image' readMoreLink='https://www.java.com/'></Post>

    
  </React.StrictMode>
)