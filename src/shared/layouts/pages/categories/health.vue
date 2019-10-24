
<template>
  <div>
    <!-- Header -->
    <div class="header-wrap">
      <div class="header-content">
        <div class="top-menu-wrap">
          <div class="container content">
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
    <div class="container content">
      <!-- Top title -->
      <div class="main-title-wrap">
        <span class="text">Health</span>
      </div>

      <!-- Top-box with 4 images -->
      <div class="top-box-preview">
        <div class="left-side">
          <div class="gradient"></div>
          <img src="../../../../assets/images/entertainment/img-1.png" />
          <div class="title-wrap">
            <span class="title">
              <p>YouTuber Jessica Kellgren-Fozard:</p>
              <p>"It's OK not to be OK"</p>
            </span>
          </div>
        </div>
        <div class="right-side">
          <div class="image-wrap">
            <div class="gradient"></div>
            <img src="../../../../assets/images/entertainment/img-2.png" />
          </div>
          <div class="right-side-bottom">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-3.png" />
            </div>
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-4.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- Posts -->
      <div class="posts-wrap">
        <div class="row">
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-5.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>How tech changed the way</p>
                  <p>DreamWorks animates</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>DreamWorks Animation has made blockbusters ranging from Shrek to Kung Fu Panda and How to Train Your Dragon. As...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-6.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Five Star: Making Rain or Shine was "an ordeal",</p>
                  <p>says</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>The Nobel Prize for Literature is set to be awarded on Thursday. Twice. The Handmaid's Tale author Margaret Atwood, fellow...</span>
            </div>
            <div class="creator-info">
              <span>2 hours ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-7.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Rapper Jack Grange says music</p>
                  <p>releases ADHD "anger"</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Rihanna's confirmed she turned down the Superbowl halftime show to support Colin Kaepernick. The former San Francisco...</span>
            </div>
            <div class="creator-info">
              <span>Yestrday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-8.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>His Dark Materials: Behind the scenes of the TV</p>
                  <p>adaptation</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Ahead of the eight-part dramatisation of the first of Philip Pullman's best-selling His Dark Materials novels, the BBC's...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-9.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Elton John:</p>
                  <p>"I still want my dad's approval"</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>He may have started out singing cover versions on cheap compilation albums, but Elton John went on to become the...</span>
            </div>
            <div class="creator-info">
              <span>2 hours ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-10.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Brit winner Finley Quaye sentenced for bar</p>
                  <p>manager attack</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>A Brit Award-winning musician has been ordered to carry out 200 hours of unpaid work for punching a bar manager and...</span>
            </div>
            <div class="creator-info">
              <span>Yestrday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-11.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Booker Prize: Margaret Atwood and Bernardine</p>
                  <p>Evaristo share award</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Margaret Atwood and Bernardine Evaristo have been named the joint winners of the 2019 Booker Prize after the judges broke...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-12.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Pharrell says he's "embarrassed" by</p>
                  <p>Blurred Lines lyrics</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Pharrell Williams says the controversy surrounding Blurred Lines made him realise some of his songs "catered" to a sexist...</span>
            </div>
            <div class="creator-info">
              <span>2 hours ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-13.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>John le Carré:</p>
                  <p>"Politicians love chaos - it gives them authority"</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Ahead of the release of his latest novel, novelist and former MI6 spy John le Carré talks to the BBC about our world leaders...</span>
            </div>
            <div class="creator-info">
              <span>Yestrday</span>
              <span>sourcelink.com</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-14.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Russian rappers battle police</p>
                  <p>over protests</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Several Russian musicians with a youth following, have released songs to denounce police action, during recent protests in...</span>
            </div>
            <div class="creator-info">
              <span>6 min ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-15.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Bill Turnbull backs cannabis for medicinal use</p>
                  <p>ahead of cancer doc</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Broadcaster Bill Turnbull says there should be a "proper conversation" in the UK about the use of cannabis for...</span>
            </div>
            <div class="creator-info">
              <span>2 hours ago</span>
              <span>sourcelink.com</span>
            </div>
          </div>
          <div class="elem-wrap">
            <div class="image-wrap">
              <div class="gradient"></div>
              <img src="../../../../assets/images/entertainment/img-16.png" />
              <div class="title-wrap">
                <span class="title">
                  <p>Billy Connolly: 'Nothing else will keep you going</p>
                  <p>like laughter'</p>
                </span>
              </div>
            </div>
            <div class="description-wrap">
              <span>Billy Connolly retired from stand-up in 2018, six years after being diagnosed with Parkinson's Disease. In a new book, he shares...</span>
            </div>
            <div class="creator-info">
              <span>Yestrday</span>
              <span>sourcelink.com</span>
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

<script>
export default {
  name: 'health'
}
</script>

<style scoped>
/* Top-box-preview */
.content .main-title-wrap .text {
  position: relative;
  font-size: 36px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding-left: 86px;
}

.content .main-title-wrap .text::before {
  z-index: -1;
  position: absolute;
  content: "";
  width: 102px;
  height: 37px;
  background-color: #4FA4DD;
  left: 0;
  top: 0;
}

.content .top-box-preview {
  margin-top: 42px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
}

.left-side {
  position: relative;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-side .image-wrap {
  position: relative;
}
.right-side-bottom {
  display: flex;
  justify-content: space-between;
}

.posts-wrap .row {
  margin-right: 0;
  margin-left: 0;
  flex-wrap: unset;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.description-wrap,
.creator-info {
  max-width: 526px;
  text-align: start;
}

.description-wrap {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d3d3;
}

.elem-wrap .image-wrap {
  position: relative;
}

.gradient {
  position: absolute;
  top: 0bott;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9416141456582633) 0%,
    rgba(255, 255, 255, 0) 30%
  );
}

.top-box-preview .left-side {
  position: relative;
}
.top-box-preview .left-side .title-wrap {
  position: absolute;
  bottom: 25px;
  left: 25px;
}

.top-box-preview .left-side .title-wrap span {
  color: white;
  text-align: start;
  font-weight: bold;
  font-size: 32px;
}

.top-box-preview .left-side .title-wrap span p {
  margin-bottom: 5px;
}


.elem-wrap .image-wrap .title-wrap {
  position: absolute;
  bottom: 25px;
  left: 25px;
}

.elem-wrap .image-wrap .title-wrap span {
  color: white;
  text-align: start;
  font-weight: bold;
  font-size: 20px;
}

.elem-wrap .image-wrap .title-wrap span p {
  margin-bottom: 5px;
}

.creator-info {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.creator-info span {
  color: #9e9e9e;
}

/* Header */
.header-wrap .top-menu-wrap .container {
  max-width: 1638px !important;
  padding-right: unset !important;
  padding-left: unset !important;
}
.top-menu-wrap .navbar {
  background-color: #052962 !important;
  padding-left: unset !important;
  padding-right: unset !important;
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
  padding: 0;
}

/* Footer */
footer {
  margin-top: 72px;
  background-color: #052962;
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

