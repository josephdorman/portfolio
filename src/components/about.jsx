import '../styles/about.css'

function About() {
  return (
    <>
      <div className='about'>
        <h2 className="title">
          <p>( 01 )</p>
          <span>ABOUT ME</span>
        </h2>
        <p className='desc'>Hey, Im <b>Joseph</b>, a <b>Full-Stack Developer</b> currently based in <b>Texas</b>. Being a problem solver by heart and by trade, I love taking on <b>complex</b> and <b>challenging</b> projects. Im always open to <b>new</b> technologies, constantly <b>increasing</b> my experience with current and new tools available to me so I can <b>consistanly</b> create fast, responsive, and beautiful websites, <b>increasing</b> the user experience for <b>everyone</b>.</p>
        <div className='carousel'>
          <p>( Some Specialties )</p>
          <div className="scroller">
            <ul className="scroller-inner">
              <li>REACT</li>
              <li>NODEJS</li>
              <li>JAVASCRIPT</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>UI/UX</li>
              <li>GITHUB</li>
              <li>MONGODB</li>
              <li aria-hidden="true" >REACT</li>
              <li aria-hidden="true" >NODEJS</li>
              <li aria-hidden="true" >JAVASCRIPT</li>
              <li aria-hidden="true" >HTML</li>
              <li aria-hidden="true" >CSS</li>
              <li aria-hidden="true" >UI/UX</li>
              <li aria-hidden="true" >GITHUB</li>
              <li aria-hidden="true" >MONGODB</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About