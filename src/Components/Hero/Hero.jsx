import "./Hero.scss";
import mariad from "../../assets/images/mariad.png";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <img src={mariad} alt='Image of Maria' className='hero__profileImg' />
        <div className='hero__text-wrapper'>
          <h1 className='hero__title'>
            <span className='hero__name'>Maria Duta</span>.
          </h1>
          <p className='hero__subheading'>Software Engineer</p>
          <p className='hero__introduction'>
          Highly motivated and results-driven graduate software engineer, seeking a varied role in a creative,
collaborative environment where I can leverage my technical skills and knowledge to develop innovative
solutions.
          </p>
        </div>
      </div>

      <a
        href='https://www.linkedin.com/in/maria-georgiana-duta-1b54b4192/'
        target={"_blank"}
        className='hero__contact'
      >
        CONTACT ME
      </a>

      <div className='hero__line'></div>
    </section>
  );
};

export default Hero;
