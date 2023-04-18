import "./Projects.scss";
import weather from "../../assets/images/weather.jpg";


const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='projects__heading'>Projects</h1>

      <div className='projects__container'>
        <div className='projects__project'>
          <img className='projects__img' src={weather} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>Weather Widget</h1>
            <div className='projects__skills'>
              <p>React</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://react-weather-widget.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/MariaDuta/weather-widget'
                target={"_blank"}
              >
                VIEW CODE
              </a>
			  <a
                className='projects__link'
                href='https://main--shop-checkout-system.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/MariaDuta/checkout-system'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        </div>
        </section>
  );
};

export default Projects;
