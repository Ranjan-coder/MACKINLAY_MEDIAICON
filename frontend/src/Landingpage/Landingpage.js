import React from 'react'
import landingpage from './Landingpage.module.css'
import doctorimg from '../Assets/doctorimg.jpg'
import baby from '../Assets/baby.png'
import gastroenterology from '../Assets/gastroenterology.png'
import mentalhealth from '../Assets/mentalhealth.png'
import kidney from '../Assets/kidney.png'
import dermis from '../Assets/dermis.png'
import virus from '../Assets/virus.png'
import doctorwithpatient from '../Assets/doctorwithpatient.jpg'
import biotechnology from '../Assets/biotechnology.jpg'
import medicaladvancetechnology from '../Assets/medicaladvancetechnology.jpg'
import arvrmodel from '../Assets/arvrmodel.jpg'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twiter from '../Assets/twiter.png'
import { Link } from 'react-router-dom'
// import facebook from '../Assets/linkedin.png'


const Landingpage = () => {
  
  return (
    <>
      <div className={landingpage.main_header}>
        <div className={landingpage.main_logo}><span>Mediconnect AI</span></div>
        <div className={landingpage.btm_lgsg}>
          <Link to='/user/login_signup' state={"login"} className={landingpage.btm_lg} >Log in</Link>
          <Link to='/user/login_signup' state={"signup"} className={landingpage.btm_lg}>Sign in</Link>
        </div>
      </div>
      <section className={landingpage.sectionone}>
        <h1 className={landingpage.textheading}>We are providing hassel free medical service</h1>
        <div className={landingpage.contentbox_parent}>
          <div className={landingpage.landingcontent_box}>
            <div>Are you looking for : </div>
            <div className={landingpage.smallboxcontent}>
              <div className={landingpage.smallboxchild}>
                <div>Doctors</div>
                <div>Book an appointment</div>
              </div>
              <div className={landingpage.smallboxchild}>
                <div>Consult</div>
                <div>With top doctors</div>
              </div>
              <div className={landingpage.smallboxchild}>
                <div>Pharmacy</div>
                <div>Medicine Products</div>
              </div>
              <div className={landingpage.smallboxchild}>
                <div>Diagnostics</div>
                <div>Tests and Checkup</div>
              </div>
            </div>
          </div>
        </div>
        <div className={landingpage.imgcntnr}><img className={landingpage.doctorimg} src={doctorimg} alt='doctorimg' /></div>
      </section>
      <section>
        <h2 className={landingpage.textheading}>Consult Top Doctor Online For Any Health Concern</h2>
        <p className={landingpage.landing_textparagraph}>Private online consultation with verified doctors in all specialists</p>
        <div className={landingpage.landing_parentcategory}>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={baby} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Baby Health</p>
          </div>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={gastroenterology} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Stomach</p>
          </div>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={mentalhealth} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Psychiatry</p>
          </div>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={kidney} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Urology</p>
          </div>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={dermis} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Dermatology</p>
          </div>
          <div className={landingpage.landing_categorybox}>
            <img className={landingpage.landing_smallcard} src={virus} alt='small card' />
            <p className={landingpage.landing_smallcardtext}>Infectous Disease</p>
          </div>
        </div>
        {/* <div>See All Specialities</div> */}

      </section>
      <section className={landingpage.landing_sectionthree}>
        <div className={landingpage.landing_parentsmallcard}>
          <div className={landingpage.landing_carddetails}>
            <div className={landingpage.landing_cardtextbox}>
              <div className={landingpage.landing_cardtext}>Urgent Online Care</div>
              <p className={landingpage.landing_cardtextpgr}>Tell us your health concern and we will assign<br /> you a top doctor</p>
              <button className={landingpage.landing_cardappbtm}>Take Appointment</button>
            </div>
            <div className={landingpage.landing_cardimgparent}>
              <img className={landingpage.landing_dctrptnt} src={doctorwithpatient} alt='doctorwithpatient' />
            </div>
          </div>
          <div className={landingpage.landing_carddetails}>
            <div className={landingpage.landing_cardimgparent}>
              <img className={landingpage.landing_dctrptnt} src={biotechnology} alt='doctorwithpatient' />
            </div>
            <div className={landingpage.landing_cardtextbox}>
              <div className={landingpage.landing_cardtext}>Get your Diagnosis Consultation</div>
              <p className={landingpage.landing_cardtextpgr}>Take suggesation from expert doctor<br /> for your diagnosis</p>
              <button className={landingpage.landing_cardappbtm}>Take Appointment</button>
            </div>

          </div>
          <div className={landingpage.landing_carddetails}>
            <div className={landingpage.landing_cardtextbox}>
              <div className={landingpage.landing_cardtext}>Advance Technology</div>
              <p className={landingpage.landing_cardtextpgr}>You take care of your<br /> we focus on the technology</p>
              <button className={landingpage.landing_cardappbtm}>Take Appointment</button>
            </div>
            <div className={landingpage.landing_cardimgparent}>
              <img className={landingpage.landing_dctrptnt} src={medicaladvancetechnology} alt='doctorwithpatient' />
            </div>
          </div>
          <div className={landingpage.arvrbox}>
            <div className={landingpage.textarvr}>To provide you better experience we are working on the latest technology</div>
            <img className={landingpage.landing_dctrptnt} src={arvrmodel} alt='arvrmodel' />
          </div>
        </div>
      </section>
      <footer className={landingpage.footercontent}>
        <div className={landingpage.footercontainer}>
          <div className={landingpage.footerbox}>Home</div>
          <div className={landingpage.footerbox}>About</div>
          <div className={landingpage.footerbox}>Services</div>
          <div className={landingpage.footerbox}>Contact Us</div>
          <div className={landingpage.footerbox}>Technology</div>
        </div>
        <div className={landingpage.mediailogosectn}>
          <div className={landingpage.medilogoapp}>Medi AI</div>
          <div className={landingpage.socialicon}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} className={landingpage.socialiconsize} alt='facebook' />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twiter} className={landingpage.socialiconsize} alt='twiter' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className={landingpage.socialiconsize} alt='instagram' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                {/* <img src={linkedin} className={landingpage.socialiconsize} alt='linkedin'/> */}
              </a>
            </div>
          </div>

      </footer>
    </>
  )
}

export default Landingpage