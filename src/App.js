import './App.css'
import { FaRegUser } from 'react-icons/fa';
import IntroImg from './image.jpg'
import Image1 from './image1.jpeg'
import Image2 from './image2.jpeg'

function App() {
  const OnClickHamburger = () => {
    const navIcon = document.querySelector('#nav-icon4');
    navIcon.classList.toggle('open');
    const navLinks = document.querySelector('.navLinks');
    navLinks.classList.toggle('hide');
  }
  
  return (
    <>
    <div className='nav'>
      <nav>
        <div className='brand-name'>
          <FaRegUser />
          <h6>Brand Name</h6>
        </div>
        <div id='nav-icon4' onClick={OnClickHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='navLinks hide' onClick={OnClickHamburger}>
          <ul><hr />
            <li><a href='App.js'>HOME</a></li><hr /><span>|</span>
            <li><a href='#professional'>PROFESSIONAL</a></li><hr /><span>|</span>
            <li><a href='#experience'>EXPERIENCE</a></li><hr /><span>|</span>
            <li><a href='#portfolio'>PORTFOLIO</a></li><hr /><span>|</span>
            <li><a href='#contact'>CONTACT</a></li><hr />
          </ul>
        </div>
      </nav>
    </div>
    <div  className='intro-col'>
    <div className='intro-row'>
    <div className='intro'>
    <img src={IntroImg} alt=''></img>
      <div className='intro-span'>
        <h1>I</h1>
        <span><h1>'</h1></span>
        <h1>M</h1>
      </div>
      <h1>ROBERT</h1>
      <div className='intro-span'>
        <h1>CARO</h1>
        <span><h1>.</h1></span>
      </div>
      <h5 id='h5-intro'>UX/UI DESIGNER & WEB</h5>
      <h5>DEVELOPER</h5>
    </div>
    </div>
    </div>
    <div className='professional' id='professional'>
      <div className='pro-heading'>
        <h3>01 PROFESSIONAL</h3>
        <h5>MY KNOWLEDGE LEVEL IN SOFTWARE</h5>
      </div>
      <div className='progress-bars'>
        <div className='progress-bar'>
        <p>WORDPRESS</p>
        <div className='bar' id='bar1'></div>
        <p>75%</p>
        </div>
        <div className='progress-bar'>
        <p>DRUPAL</p>
        <div className='bar' id='bar2'></div>
        <p>70%</p>
        </div>
        <div className='progress-bar'>
        <p>JAVASCRIPT</p>
        <div className='bar' id='bar3'></div>
        <p>85%</p>
        </div>
        <div className='progress-bar'>
        <p>WIX</p>
        <div className='bar' id='bar4'></div>
        <p>95%</p>
        </div>
        <div className='progress-bar'>
        <p>PHOTOSHOP</p>
        <div className='bar' id='bar5'></div>
        <p>85%</p>
        </div>
        <div className='progress-bar'>
        <p>ILLUSTATOR</p>
        <div className='bar' id='bar6'></div>
        <p>80%</p>
        </div>
        <div className='progress-bar'>
        <p>HTML & CSS</p>
        <div className='bar' id='bar7'></div>
        <p>80%</p>
        </div>
      </div>
    </div>
    <div className='portfolio' id='portfolio'>
    <div className='pro-heading'>
        <h3>02 PORTFOLIO</h3>
        <h5>MY LATEST WORK</h5>
      </div>
      <div className='port-img'>
        <img src={IntroImg} alt='' height='300px' width='300px'></img>
        <img src={Image1} alt='' height='300px' width='300px'></img>
        <img src={Image2} alt='' height='300px' width='300px'></img>
      </div>
    </div>
    <div className='experience' id='experience'>
    <div className='pro-heading'>
        <h3>03 EXPERIENCE</h3>
    </div>
    <div className='event-row'>
    <div className='vertical'></div>
    <div className='event-right'>
      <div className='circle' id='cir1'></div>
      <div className='event-info' id='event1'>
        <p className='event-year'>2014-2016</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    {/* <div className='event-left'>
      <div className='circle' id='cir2'></div>
      <div className='event-info' id='event2'>
        <p className='event-year'>2012-2014</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <div className='event-right'>
      <div className='circle' id='cir3'></div>
      <div className='event-info'>
        <p className='event-year'>2011-2012</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div> */}
    <div className='event-right'>
      <div className='circle' id='cir3'></div>
      <div className='event-info' id='event2'>
        <p className='event-year'>2011-2012</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <div className='event-right'>
      <div className='circle' id='cir5'></div>
      <div className='event-info' id='event3'>
        <p className='event-year'>2005-2006</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <div>
      <div className='circle' id='cir2'></div>
      <div className='event-info' id='event4'>
        <p className='event-year'>2012-2014</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p className='event-left'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <div>
      <div className='circle' id='cir4'></div>
      <div className='event-info' id='event5'>
        <p className='event-year'>2012-2014</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p className='event-left'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    <div>
      <div className='circle' id='cir6'></div>
      <div className='event-info' id='event6'>
        <p className='event-year'>2012-2014</p>
        <h5>HOP!</h5>
        <p className='heading'>Creative Design Lead</p>
        <p className='event-left'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.</p>
      </div>
    </div>
    </div>
    </div>
    <div className='contact' id='contact'>
    <div className='contact-detail'>
      <h2>Contact</h2>
      <p>Looking forward to contact me?</p>
      <div className='contact-phone'>
        <h5>Phone</h5>
        <a href='#'>1800 1800 1800</a>
      </div>
      <div className='contact-email' id='margin'>
        <h5>Email</h5>
        <a href='#'>xyz@gmail.com</a>
      </div>
    </div>
    <div className='form'>
      <form>
        <div className='row'>
        <div className='form-name'>
          <p>First Name</p>
          <input type='text' name='firstName'></input>
        </div>
        <div className='form-name'>
          <p>Last Name</p>
          <input type='text' name='lastName'></input>
        </div>
        </div>
        <div className='row'>
        <div className='form-name'>
          <p>Email *</p>
          <input type='text' name='email'></input>
        </div>
        <div className='form-name'>
          <p>Subject</p>
          <input type='text' name='subject'></input>
        </div>
        </div>
        <div className='row'>
        <div className='form-name' id='submit-btn'>
          <p>Message</p>
          <input type='text' name='message'></input>
        </div>
        <div className='form-name'>
          <button>Submit</button>
        </div>
        </div>
      </form>
    </div>
    </div>
</>
  );
}

export default App;
