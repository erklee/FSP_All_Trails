import './Footer.css'
import github from '../../../images/github60.png'
import linkedIn from '../../../images/linked60.png'
import react from '../../../images/react60white.png'
import rails from '../../../images/rails64.png'
import css from '../../../images/css64.png'
import html from '../../../images/icons8-html-60.png'
import javascript from '../../../images/js60.png'
import portfolio from '../../../images/portfolio60.png'



function Footer() {

    return(
        <>
            <footer className='aboutme-footer'>
                <h1>About Me:</h1>
                    <div id='about-me-icons-wrapper'>
                        <a href="https://github.com/erklee">
                            <img src={github} className="github-icon" alt="github-icon" />    
                        </a>
                        <a href="https://www.linkedin.com/in/eric-lee-0184aa1a2/">
                            <img src={linkedIn} className="linkedin-icon" alt="linked-icon" />
                        </a>
                        
                        <a href="https://erklee.github.io/Portfolio/">
                            <img src={portfolio} className="portfolio-icon" alt="portfolio" />
                        </a>
                    </div>
                    <br />
                <h1>Technologies:</h1>
                    <div id='tech-icon-wrapper'>
                        <img src={react} alt="react-icon" />
                        <img src={rails} alt="rails-icon" />
                        <img src={css} alt="css-icon" />
                        <img src={html} alt="html-icon" />
                        <img src={javascript} alt="javascript-icon" />
                    </div>
            </footer>
        </>
    )
}

export default Footer