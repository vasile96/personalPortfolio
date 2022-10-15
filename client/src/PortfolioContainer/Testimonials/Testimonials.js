import React, {useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Testimonials.css";
import lady from '../../../src/assets/Testimonial/lady.png';
import mike from '../../../src/assets/Testimonial/mike.png';
import man from '../../../src/assets/Testimonial/man.png';
import shape from "../../assets/Testimonial/shape-bg.png";





export default function Testimonials(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
      loop: true,
      margin: 0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    };

    useEffect(() => {
      return () => {
        fadeInSubscription.unsubscribe();
      };
    }, [fadeInSubscription]);

  return (
    <div>
      <ScreenHeading 
       title={'Testimonials'}
       subHeading={'What My Client Say About Me'}
      />
      <section className='testimonials-section fade-in' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel'
            {...options}>
               <div className='col-lg-12'>
                <div className='testi-items'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left'/>
                      Sorry for not having any testimonials yet, but you can be the first leaving one.
                      <i className='fa fa-quote-right'/>

                    </p>
                    <ul className='start list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={lady} alt='No internet conection' />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InessGlobal</p>
                  </div>
                </div>
               </div>
               <div className='col-lg-12'>
                <div className='testi-items'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left'/>
                      Sorry for not having any testimonials yet, but you can be the first leaving one.
                      <i className='fa fa-quote-right'/>

                    </p>
                    <ul className='start list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={man} alt='No internet connection'></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InessGlobal</p>
                  </div>
                </div>
               </div>
               <div className='col-lg-12'>
                <div className='testi-items'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left'/>
                        Sorry for not having any testimonials yet, but you can be the first leaving one.
                      <i className='fa fa-quote-right'/>

                    </p>
                    <ul className='start list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star-half-alt' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img src={mike} alt='No internet connection'></img>
                    <h5>Daisy Dominic</h5>
                    <p>CEO InessGlobal</p>
                  </div>
                </div>
               </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  )
}
