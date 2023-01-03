import React from "react";
import logo from "./img/logo-white.png";
import photoComp1 from "./img/nat-1-large.jpg";
import photoComp2 from "./img/nat-2-large.jpg";
import photoComp3 from "./img/nat-3-large.jpg";
import storyPhoto1 from "./img/nat-8.jpg";
import storyPhoto2 from "./img/nat-9.jpg";
import videoBg from "./img/video.mp4";
import videoBg2 from "./img/video.webm";
import footerLogo from "./img/logo-green-2x.png";

function App() {
  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">
            <span class="navigation__icon-span">&nbsp;</span>
            <span class="navigation__icon-span">&nbsp;</span>
            <span class="navigation__icon-span">&nbsp;</span>
            <span class="navigation__icon-span">&nbsp;</span>
            <span class="navigation__icon-span">&nbsp;</span>
            <span class="navigation__icon-span">&nbsp;</span>
          </span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#section-about" className="navigation__link">
                <span>01</span> About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-features" className="navigation__link">
                <span>02</span> Your benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="section-tours" className="navigation__link">
                <span>03</span> Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-stories" className="navigation__link">
                <span>04</span> Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-book" className="navigation__link">
                <span>05</span> Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">TOJTEX</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventerous people
            </h2>
          </div>

          <div class="row">
            <div class="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You are going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                numquam rem eaque soluta laboriosam pariatur, itaque doloremque
                necessitatibus magni earum quibusdam officia illo, animi placeat
                incidunt aut quae et quia!
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                You are going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt corrupti maiores sequi officiis cumque quasi quo
              </p>
              <a href="#s" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div class="col-1-of-2">
              <div className="composition">
                <img
                  src={photoComp1}
                  alt="Photo1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={photoComp2}
                  alt="Photo2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={photoComp3}
                  alt="Photo3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i class="feature-box__icon icon-basic-world"> </i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi numquam rem eaque
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i class="feature-box__icon icon-basic-compass"> </i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi numquam rem eaque
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i class="feature-box__icon icon-basic-map"> </i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi numquam rem eaque
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i class="feature-box__icon icon-basic-heart"> </i>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi numquam rem eaque
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The Sea explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 day tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hostels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-val">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The Forest Hiker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>7 day tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-val">$497</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The Show Adventurer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 day tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-val">$897</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="f" className="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={videoBg} type="video/mp4" />
              <source src={videoBg2} type="video/webm" />
              Your browser is not supported
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={storyPhoto1}
                  alt="Persons on the tour"
                  className="story__image"
                />
                <figcaption className="story__caption">Marry Smith</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt corrupti maiores sequi officiis cumque quasi quo.
                  Incidunt corrupti maiores sequi officiis cumque quasi
                  quo.Commodi numquam rem eaque soluta laboriosam pariatur,
                  itaque doloremque necessitatibus magni earum quibusdam
                  officia.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src={storyPhoto2}
                  alt="Persons on the tour"
                  className="story__image"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>

              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  WoW! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt corrupti maiores sequi officiis cumque quasi quo.
                  Incidunt corrupti maiores sequi officiis cumque quasi
                  quo.Commodi numquam rem eaque soluta laboriosam pariatur,
                  itaque doloremque necessitatibus magni earum quibusdam
                  officia.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="f" className="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now </h2>
                  </div>
                  <div action="#" className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full Name
                    </label>
                  </div>

                  <div action="#" className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email Address
                    </label>
                  </div>

                  <div
                    action="#"
                    className="form__group u-margin-bottom-medium"
                  >
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <img src={footerLogo} alt="" className="footer__logo" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="h" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="j" className="footer__link">
                    Contact Us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="j" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="j" className="footer__link">
                    Pricacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="j" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="f" className="footer__link">
                Shera Kosimi
              </a>{" "}
              Copyright &copy; by Shera Kosimi for his personal purposes. You
              are 100% allowed to use this webpage for both personal and
              commercial use, but NOT to claim it as your own design. A credit
              to the original author, Shera Kosimi, is of course highly
              appreciated!
            </p>
          </div>
        </div>
      </footer>

      <div class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__left">
            <img src={storyPhoto1} alt="Tour" class="popup__img" />
            <img src={storyPhoto2} alt="Tour" class="popup__img" />
          </div>
          <div class="popup__right">
            <a href="#section-tours" class="popup__close">
              &times;
            </a>
            <h2 class="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p class="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <a href="#s" class="btn btn--green">
              Book now
            </a>
          </div>
        </div>
      </div>

      {/* <section class="grid-test">
        <div class="row">
          <div class="col-1-of-2">Col 1 of 2</div>
          <div class="col-1-of-2">Col 1 of 2</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-1-of-3">Col 1 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-3">Col 1 of 3</div>
          <div class="col-2-of-3">Col 2 of 3</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-2-of-4">Col 2 of 4</div>
        </div>
        <div class="row">
          <div class="col-1-of-4">Col 1 of 4</div>
          <div class="col-3-of-4">Col 3 of 4</div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
