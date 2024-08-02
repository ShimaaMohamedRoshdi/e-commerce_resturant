import React from "react";
import Header from './Header'
import './Home.css'

import prideimage from './../../assets/1 (2).png'
import ingrediants from './../../assets/2 (1).png'
import Data from "../../data";
import { Carousel } from 'react-bootstrap';

import item1 from './../../assets/1 (3).jpg';
import item2 from './../../assets/2 (2).jpg';
import image from './../../assets/2 (2).jpg'


const Home = () => {

  const blogitem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} alt="blogitem" />
          <h5> {item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button ><a href="#">Order Now</a></button>
      </div>
    )
  })

  return (
    <div>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>3463+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>9765+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimage} title="img" />

            </div>
            <div className="col-md-6">
              <h3>We pride ourselves on making real food from the best ingredients.</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <button><a href="#">Learn more</a></button>
            </div>
          </div>
        </div>

      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Etiam sed dolor ac diam volutpat.</li>
              </ul>
              <button><a href="#">Learn more</a></button>
            </div>
            <div className="col-md-6  ">
              <img src={ingrediants} alt="ingrediants" />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>When a man's stomach is full it makes no<br />
                difference whether he is rich or poor.</h2>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>

              <a href='#'>Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Food</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>


            </div>
          </div>

          <div className=" row">
            {blogitem}
          </div>
        </div>

      </section>

      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2 className="text-light"> Testimonials</h2>


              <Carousel>
                <Carousel.Item>
                  <img src={item1} />
                  <br />
                  <Carousel.Caption >
                    <span>Frontend developer-ShimaaMOhamed</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item2} />
                  <Carousel.Caption>
                    <span>Graphic designer-YahiaMohamed</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>

            </div>
          </div>
        </div>
      </section>

      {/* <section className="frequently">
<div class="container">
  <div class="about-inline text-center d-block">
                <h3>Frequently Asked Questions </h3>
            </div>
            </div>
            
  <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Do you bake breads containing animal fats or products?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> Can I order your products online?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="faq">
                        <h4> <span>~</span> When are you opening a shop near me?</h4>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
            <div class="space100"></div>
        </div>
</section> */}

      <section className="frequently">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="about-inline text-center d-block">
                <h3>Frequently Asked Questions</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="faq">
                <h4><span>~</span> Is Foodera Bread really baked fresh each day?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq">
                <h4><span>~</span> Do you bake breads containing animal fats or products?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq">
                <h4><span>~</span> Can I order your products online?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq">
                <h4><span>~</span> When are you opening a shop near me?</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-content2 parallax2 text-center" >
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div class="row">
              <div class="col-md-4">
                <button><a href="#">Learn More</a></button>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="Hurrry">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hurry-inline text-center d-block">
                <h3>Hurry up! Subscribe our newsletter<br />
                  and get 25% Off</h3>
                <p>Limited time offer for this month. No credit card required.</p>
              </div>
            </div>
          </div>

          <form className="intro-newsletter" action="#" id="invite" method="POST">
            <div class="row">
              <div class="col-md-8">
                <input className="e-mail" placeholder="Email Address here" name="email" id="eaddress" type="email" />
              </div>
              <div class="col-md-4">
                <button ><a href="#">Subscribe</a></button>
              </div>
            </div>
          </form>
        </div>
      </section>


      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="footer-links ">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p className="copyright">
          &copy; 2024  Foodera. All rights reserved.
        </p>
      </div>
     
    </div>
   
  </div>
</footer>


    </div>

  )
}


export default Home;