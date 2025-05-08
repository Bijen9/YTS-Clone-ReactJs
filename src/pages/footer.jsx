import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='rowFooter'>
          <ul className='text-center'>
            <li>YTS © 2011 - 2025</li>
            <li>-</li>
            <li>
              <a href="https://yts.mx/blog">Blog</a>
            </li>
            <li>-</li>
            <li>
              <a href="">DMCA</a>
            </li>
            <li>-</li>
            <li>
              <a href="">API</a>
            </li>
            <li>-</li>
            <li>
              <a href="">RSS</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Browse Movies</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Requests</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Login</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Language</a>
            </li>
          </ul>
        </div>

        <div className="rowFooter">
          <ul className='text-center'>
            <li>
              <a href="">EZTV</a>
            </li>
            <li>-</li>
            <li>
              <a href="">YIFY Status</a>
            </li>
            <li>-</li>
            <li>
              <a href="">YTS Proxies</a>
            </li>
            <li>-</li>
            <li>
              <a href="">YTS Proxies (TOR)</a>
            </li>
            <li>-</li>
            <li>
              <a href="">YTS Official Link</a>
            </li>
            <li>-</li>
            <li>
              <a href="">Follow @ytsyify</a>
            </li>
          </ul>
        </div>

        <div className='rowFooter'>
          <ul className='text-center'>
            <li>By using this site you agree to and accept our 
            <a href="">User Agreement</a>
            , which can be read
            <a href="">here</a>
            .
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </footer>
  )
}

export default Footer