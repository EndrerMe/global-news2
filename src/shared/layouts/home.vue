
<template>
  <div>
    <!-- Header -->
    <div class="header-wrap">
      <div class="header-content">
        <div class="top-menu-wrap">
          <div class="container">
            <b-navbar class="top-menu" toggleable="md" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">
                    <img src="../../../../assets/images/logo.svg" alt="logo" />
                  </b-nav-item>
                  <b-nav-item href="#" class="current-date">
                    <span>October 8, 2019</span>
                    <span>Tuesday</span>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <span>
                      Currency Converter
                      <font-awesome-icon icon="caret-down" />
                    </span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span class="weather-content">
                      <span>
                        <img src="../../../../assets/images/cloud.svg" alt="cloud" />
                      </span>
                      <span class="weather-value">
                        + 9
                        <span class="celsius-value">&#8451;</span>
                      </span>
                      <span class="weather-dropdown-arrow">
                        <font-awesome-icon icon="caret-down" />
                      </span>
                      <p>Glasgow</p>
                    </span>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <font-awesome-icon icon="search" class="fa-lg" />
                    <font-awesome-icon icon="bell" class="fa-lg" />
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <div class="bottom-menu-wrap">
          <div class="container">
            <b-navbar class="bottom-menu" toggleable="md" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#" class="current-date">
                    <span>Business</span>
                  </b-nav-item>
                  <b-nav-item href="#">
                    <span>Entertainment</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>General</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Health</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Science</span>
                  </b-nav-item>

                  <b-nav-item href="#" class="weather-wrap">
                    <span>Sport</span>
                  </b-nav-item>
                  <b-nav-item href="#" class="weather-wrap">
                    <span>Technology</span>
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <div class="container content">
      <div class="slider-wrap">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
            <div class="slide-title">
              <span>White House vows to boycott impeachment</span>
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <div class="slide-title">
              <span>Second Slide</span>
            </div>
          </b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            <div class="slide-title">
              <span>Third Slide</span>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>

      <!-- Business -->
      <div class="business-wrap">
        <div class="title-wrap">
          <span class="title-text">Business</span>
        </div>
        <div class="content-wrap">
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-1.png" />
            </div>
            <div class="description-wrap">
              <span>A mobile version of video game Call of Duty has been downloaded more than 100 million times in its first week...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>bbc.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-2.png" />
            </div>
            <div class="description-wrap">
              <span>All 555 Thomas Cook shops are to be bought by rival Hays Travel in a move that could save up to 2,500 jobs. The independent...</span>
            </div>
            <div class="creator-info">
              <span>Yestesday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-3.png" />
            </div>
            <div class="description-wrap">
              <span>Goldman Sachs will review its involvement in the planned stock market listing of Chinese artificial intelligence firm Megvii...</span>
            </div>
            <div class="creator-info">
              <span>October 10, 2019</span>
              <span>sourcelink</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Entertainment -->
      <div class="entertainment-wrap">
        <div class="title-wrap">
          <span class="title-text">Entertainment</span>
        </div>
        <div class="content-wrap">
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-4.png" />
            </div>
            <div class="description-wrap">
              <span>On World Mental Health Day, a disabled presenter shares her simple secrets of happiness. Jessica Kellgren-Fozard gets a...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>bbc.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-5.png" />
            </div>
            <div class="description-wrap">
              <span>The Nobel Prize for Literature is set to be awarded on Thursday. Twice. The Handmaid's Tale author Margaret Atwood, fellow...</span>
            </div>
            <div class="creator-info">
              <span>Yestesday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-6.png" />
            </div>
            <div class="description-wrap">
              <span>Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick. The former San Francisco...</span>
            </div>
            <div class="creator-info">
              <span>October 10, 2019</span>
              <span>sourcelink</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Science -->
      <div class="science-wrap">
        <div class="title-wrap">
          <span class="title-text">Science</span>
        </div>
        <div class="content-wrap">
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-7.png" />
            </div>
            <div class="description-wrap">
              <span>Culling badgers drives them to roam further afield, allowing them to disperse tuberculosis over a larger area, new...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>bbc.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-8.png" />
            </div>
            <div class="description-wrap">
              <span>Three scientists have been awarded the 2019 Nobel Prize in Physics for "ground-breaking" discoveries about the Universe...</span>
            </div>
            <div class="creator-info">
              <span>Yestesday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <img src="../../../../assets/images/business/img-9.png" />
            </div>
            <div class="description-wrap">
              <span>Antarctica's Emperor penguins could be in real difficulty come 2100 if the climate warms as expected. Experts say the birds...</span>
            </div>
            <div class="creator-info">
              <span>October 10, 2019</span>
              <span>sourcelink</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div class="container content">
        <div class="content">
          <div class="left-item">
            <img src="../../../../assets/images/logo.svg" alt="logo" />
          </div>
          <div class="center-item">
            <span class="text">Copyright © 2019 Global New. All rights reserved</span>
          </div>
          <div class="right-item">
            <button>Subscribe Us</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Header */
.header-wrap .top-menu-wrap .container {
  max-width: 1638px !important;
  padding-right: unset !important;
  padding-left: unset !important;
}
.top-menu-wrap .navbar {
  background-color: #052962 !important;
}
.top-menu-wrap {
  background-color: #052962;
}
nav.bottom-menu {
  background-color: unset !important;
  margin: 0 auto;
  padding: 41px !important;
}
.bottom-menu button {
  background: black;
}
.bottom-menu ul li a span {
  color: #3f3f3f;
  font-size: 26px;
  font-weight: bold;
}
.bottom-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .navbar-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu-wrap .navbar-nav li a svg {
  margin: 0 20px;
  color: rgb(248, 198, 26);
}
.top-menu-wrap .navbar-nav li.weather-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .navbar-nav li.weather-wrap .weather-dropdown-arrow {
  position: absolute;
  top: 25px;
  right: -46px;
}
.top-menu-wrap .navbar-nav li.weather-wrap p {
  margin-bottom: 0;
}
.top-menu-wrap .navbar-nav li .nav-link {
  padding: 0 !important;
}
.top-menu-wrap .navbar-nav li a span {
  color: #f9f9f9;
}
.top-menu-wrap .navbar-nav li a {
  color: #f9f9f9;
}
.top-menu-wrap .navbar-nav li .nav-item {
  color: #f9f9f9;
}
.top-menu-wrap .navbar {
  padding: 17px;
}
.top-menu-wrap .navbar-brand {
  padding: 0;
}
.top-menu-wrap .current-date a {
  display: flex;
  flex-direction: column;
}
.top-menu-wrap .weather-value {
  font-family: "Semibold";
  font-size: 28px;
}
.top-menu-wrap .weather-value .celsius-value {
  font-size: 20px;
  position: absolute;
}
@media (max-width: 1199px) {
  .bottom-menu ul li a span {
    font-size: 23px;
  }
}
@media (max-width: 991px) {
  .bottom-menu ul li a span {
    font-size: 17px;
  }
}

/* Content */
.container.content {
  max-width: 1638px;
  /* padding-bottom: 80px; */
}

/* Content */
/* Slider */
.carousel-caption {
  position: absolute;
  right: unset !important;
  bottom: 140px !important;
  left: 30px !important;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
.carousel-caption .slide-title {
  max-width: 400px;
}
.carousel-caption .slide-title span {
  font-size: 40px;
}
.carousel-indicators {
  display: flex;
  align-items: center;
}
.carousel-indicators li {
  width: 7px !important;
  height: 7px !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  opacity: 0.7 !important;
  cursor: pointer;
  background-color: #f8c61a !important;
  background-clip: unset !important;
  border-radius: 10px;
  border-top: unset !important;
  border-bottom: unset !important;
}
.carousel-indicators .active {
  width: 12px !important;
  height: 12px !important;
}
.carousel-control-prev span,
.carousel-control-next span {
  display: none;
}
.carousel-control-prev,
.carousel-control-next {
  background: #453333;
  width: 50px !important;
  height: 50px !important;
  bottom: unset !important;
  top: 35px !important;
}
.carousel .carousel-control-prev {
  right: 100px !important;
  left: unset !important;
}
.carousel .carousel-control-next {
  right: 35px !important;
}
.carousel .carousel-control-prev::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(45deg);
  left: 19px;
}
.carousel .carousel-control-next::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-left: 2px solod red;
  border-top: 2px solod red;
  border-bottom: 3px solid;
  border-left: 3px solid;
  transform: rotate(223deg);
  left: 12px;
}

/* Common for Business, Entertainment, Science */
.content-wrap {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
.elem-wrap {
  width: 526px;
}
.description-wrap {
  padding: 19px 0 10px 0;
  border-bottom: 2px solid #b3abab;
}
.creator-info {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.description-wrap span {
  font-size: 16px;
  font-weight: bold;
}

/* Content */
/* Business */
.business-wrap {
  margin-top: 60px;
  text-align: start;
}
.business-wrap .title-wrap {
  border-left: 5px solid #c710a2;
}
.business-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}

/* Content */
/* Entertainment */
.entertainment-wrap {
  margin-top: 60px;
  text-align: start;
}
.entertainment-wrap .title-wrap {
  border-left: 5px solid #ff995e;
}
.entertainment-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}

/* Content */
/* Science */
.science-wrap {
  margin-top: 60px;
  text-align: start;
}
.science-wrap .title-wrap {
  border-left: 5px solid #10c7ba;
}
.science-wrap .title-wrap .title-text {
  display: block;
  font-size: 32px;
  font-family: "Poppins";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 6px 30px;
}

/* Footer */
footer {
  background-color: #052962;
  margin-top: 72px;
}
footer .content {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}

footer .left-item,
footer .right-item {
  margin: auto 0;
}

footer .center-item {
  display: flex;
}
footer .center-item .text {
  color: white;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;
  font-size: 10px;
}

footer .right-item button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  color: #052962;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  letter-spacing: 1px;
}

</style>

