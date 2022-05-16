import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

import './App.scss';

//Assets
import leftImg from './images/leftImg.png';
import rightImg from './images/rightImg.png';
import arrowRight from './images/arrow-right.svg';
import ellipse1 from './images/ellipse1.svg';

function App() {
  //Declarinig variables
  let app = useRef(null);
  let content = useRef(null);
  let images = useRef(null);
  let tl = new TimelineLite();

  //Individual variables

  useEffect(() => {
    const firstHeadline = content.children[0].children[0];
    const secondHeadline = firstHeadline.nextSibling;
    const contentP = content.children[1];
    const btn = content.children[2];
    const imgRight = images.children[0].children[0];
    const imgLeft = images.children[0].nextSibling.children[0];
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    console.log(app);

    //images animation
    tl.from(imgLeft, 1, { y: 1200, ease: Power3.easeOut }, 'start')
      .from(
        imgLeft.children,
        2,
        {
          scale: 1.6,
          ease: Power3.ease,
        },
        0.2
      )
      .from(imgRight, 1, { y: 1200, ease: Power3.easeOut }, 0.2)
      .from(
        imgRight.children,
        2,
        {
          scale: 1.6,
          ease: Power3.ease,
        },
        0.2
      );
    //content animation
    tl.staggerFrom(
      [firstHeadline.children, secondHeadline.children],
      0.7,
      {
        y: 104,
        ease: Power3.ease,
        delay: 0.8,
      },
      0.15,
      'start'
    )
      .from(contentP, 1, { y: 40, ease: Power3.ease, opacity: 0 }, 1.2)
      .from(btn, 1, { y: 20, ease: Power3.easeOut, opacity: 0 }, 1.5);
  });

  return (
    <div className='hero' ref={(el) => (app = el)}>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-content-inner' ref={(el) => (content = el)}>
            <h1>
              <div className='hero-content-line'>
                <div className='hero-content-line-inner'>Find Your</div>
              </div>
              <div className='hero-content-line second'>
                <div className='hero-content-line-inner second'>
                  Dream House
                </div>
              </div>
            </h1>
            <p>
              Real estate is a crowded field. But with the number of buyers
              purchasing homes through real estate agent and brokers growing 18%
              since 2001, there’s Real estate is a crowded field
            </p>
            <div className='btn-row'>
              <button className='booknow'>Book now</button>
              <button className='explore'>
                Explore
                <span className='arrow-icon'>
                  <img src={arrowRight} alt='' />
                </span>
              </button>
            </div>
          </div>
          <div className='images' ref={(el) => (images = el)}>
            <div className='image-container'>
              <div className='image-right'>
                <img src={rightImg} alt='' />
              </div>
            </div>
            <div className='image-container'>
              <div className='image-left'>
                <img src={leftImg} alt='' />
              </div>
            </div>
            <div className='ellipse1'>
              <img src={ellipse1} alt='' />
            </div>
            <div className='ellipse2'>
              <img src={ellipse1} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
