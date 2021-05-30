import React from 'react'
import PropTypes from 'prop-types'
// import './Footer.css'
function Footer (){
    return (
      <footer class="footer">
    <div class="container">
        <div class="row">
        <div class="col-sm-3">
            <h4 class="title">Sumi</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
            <ul class="social-icon">
            <a href="#" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#" class="social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="#" class="social"><i class="fa fa-google" aria-hidden="true"></i></a>
            <a href="#" class="social"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            </ul>
            </div>
        <div class="col-sm-3">
            <h4 class="title">My Account</h4>
            <span class="acount-icon">
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> Wish List</a>
            <a href="#"><i class="fa fa-cart-plus" aria-hidden="true"></i> Cart</a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
            <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Language</a>
          </span>
            </div>
        <div class="col-sm-3">
            <h4 class="title">Category</h4>
            <div class="category">
            <a href="#">men</a>
            <a href="#">women</a>
            <a href="#">boy</a>
            <a href="#">girl</a>
            <a href="#">bag</a>
            <a href="#">teshart</a>
            <a href="#">top</a>
            <a href="#">shos</a>
            <a href="#">glass</a>
            <a href="#">kit</a>
            <a href="#">baby dress</a>
            <a href="#">kurti</a>
            </div>
            </div>
        <div class="col-sm-3">
            <h4 class="title">Payment Methods</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ul class="payment">
            <li><a href="#"><i class="fa fa-cc-amex" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-paypal" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-cc-visa" aria-hidden="true"></i></a></li>
            </ul>
            </div>
        </div>
        <hr/>

        <div class="row text-center"> © 2017. Made with  by sumi9xm.</div>
        </div>


    </footer>
    )
  }
export default Footer
