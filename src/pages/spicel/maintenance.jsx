import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import bg1 from '../../assets/images/bg/04.jpg'
import logoLight from '../../assets/images/logo-light.png'
import BackToHome from '../../components/back-to-home';

export default function Maintenance() {
  const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);
        var seconds = 3599;
        function calculateTimeRemaining() {
            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;
            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);
            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }
        return () => {
            clearInterval(intervalId);
        };
    }, []);
  return (
   <>
    <section className="position-relative" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay"></div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="d-flex flex-column min-vh-100 p-4">
                      <div className="text-center">
                          <Link to="">
                            <img src={logoLight} alt=""/>
                          </Link>
                      </div>

                      <div className="title-heading text-center my-auto">
                          <h4 className="text-white title-dark display-5 fw-bold mb-4">Site is under maintenance</h4>
                          <p className="text-white-50 para-desc mx-auto mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
      
                          <span id="maintenance" className="timer h1 text-white title-dark">{minutes} : {remainingSeconds}</span><span className="d-block h6 text-uppercase text-white-50">Minutes</span>
      
                      </div>

                      <div className="text-center">
                          <small className="mb-0 text-light title-dark">© {new Date().getFullYear()} Superex. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <BackToHome/>
   </>
  )
}
