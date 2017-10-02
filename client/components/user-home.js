import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props
  const products = props.landing
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Made by nature</div>
          <div className="intro-heading">Certified Pure Therapeutic Grade<br/>by dōTERRA</div>
          <div className="intro-lead-out">Let's find what works for you</div>
          <a className="btn btn-xl js-scroll-trigger" href="#services">Start here</a>
        </div>
      </div>
    </header>

    <section id="uses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Uses</h2>
            <h3 className="section-subheading text-muted">Discover the full gamut of uses for essential oils</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-child fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="use-heading">Child care</h4>
            <p className="text-muted">Beauty may be skin deep, but baby products go deeper still. From baby wipes to diaper rash, what you put on your baby's skin is important. Make your own baby products with these all-natural essential oils.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-medkit fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="use-heading">Health</h4>
            <p className="text-muted">Feeling sick? Minor burn? Before you turn to concoctions from Big Pharma, check out if certified therapeutic grade essential oils from dōTERRA can help you.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-s15 fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="use-heading">Household</h4>
            <p className="text-muted">Stop inhaling chemicals when you clean your house and see which essential oils can make your house sparkle—naturally.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Products</h2>
            <h3 className="section-subheading text-muted">These are just a few of the many dōTERRA products that can change your life.</h3>
          </div>
        </div>
        <div className="row">
          {products && products.map((product, i) => {
            return (
              <div key={i+1} className='col-md-3 col-sm-6 product-item'>
                <a className="product-link" data-toggle="modal" href={`#productModal${product.id}`}>
                  <div className="product-hover">
                    <div className="product-hover-content">
                      <i className="fa fa-info-circle fa-4x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={product.photo} alt=""/>
                </a>
                <div className="product-caption">
                  <h4>{product.name}</h4>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>

    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part
                    <br/>Of Our
                    <br/>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
              <h4>Mildred Tong</h4>
              <p className="text-muted">dōTERRA Expert</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
              <h4>Larry Parker</h4>
              <p className="text-muted">Lead Marketer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
              <h4>You!</h4>
              <p className="text-muted">Join our team</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>

    {/* -- Clients -- */}
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <a href="#">
              <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number."/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" className="btn btn-xl" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Essential Oils Helps</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    {/* <!-- Product Modals --> */}
    {products && products.map((product, index) => {
      console.log('product', product)
      console.log('index', index)
      return (
        <div key={product.id} className="product-modal modal fade" id={`productModal${product.id}`} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl"></div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2>{product.name}</h2>
                      <p className="item-intro text-muted">{product.summary}</p>
                      <img className="img-fluid d-block mx-auto" src={product.photo} alt=""/>
                      <p>{product.description}</p>
                      <h4>Benefits</h4>
                      <ul className="list-inline">
                        {product.benefits && product.benefits.map((benefit, idx) => {
                          return (
                            <li key={idx}>{benefit}</li>
                          )
                        })}
                      </ul>
                      <h4>Uses</h4>
                      <ul className="list-inline">
                        {product.uses && product.uses.map((use, indx) => {
                          return (
                            <li key={indx}>{use}</li>
                          )
                        })}
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fa fa-times"></i>
                        Close Product</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
