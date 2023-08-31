import React from 'react';
import Layout from '@src/layout';

import './projects.scss';
import Slide from 'react-reveal/Slide';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    
  }



  render () {

    return (
      <Layout>
        <div className="container projectsContainer py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Slide left>
            <p className="heading mb-0 display-2 fontPrimary"><strong>Projects</strong></p>
            </Slide>
          </div>
         
         {/* Tablet/Desktop Screens */}
         <div className="row d-none d-md-flex">

         <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front websiteImg" >
                </div>
              </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Personal Website</h4>
              <p className="fontSecondary">Full-Stack Personal Website to display facts about me, professional experience, projects, skills, and insight on my journey into Information Technology, that you are currently viewing this on!</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-website' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbImg" >
                </div>
              </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Full-Stack Airbnb Website</h4>
              <p className="fontSecondary">Full-Stack prototype of Airbnb website using Stripe payments web-hook to complete bookings of properties. API developed using Ruby on Rails. Upon user creation, you have the ability to post properties to be booked, and book and reserve other users posted properties. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, REST APIs, Ruby, Ruby on Rails, AWS S3, Stripe Web-hook.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/airbnb_clone' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front twitterImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Full-Stack Twitter Website</h4>
              <p className="fontSecondary">Full-Stack, Fully functional, Twitter.com website. Website allows for user creation and user posts, and can all be seen on the main feed. API created through ruby on rails. Programming languages and libraries used; HTML, CSS, JavaScript, REST APIs, Reactjs, Ruby, Ruby on Rails, AWS S3, postgresql.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/twitter_clone_fs' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front xchangeImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Xchange: Currency Converter</h4>
              <p className="fontSecondary">Intuitive and extremely user friendly currency converter application that helps a user convert any input amount from a selected base currency to a selected converted currency. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, REST APIs, Jquery.</p>
              <a role='button' className="viewRepo btn fontSecondary" href='https://github.com/collindapper/collins-currency-converter' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front movieFinderImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Movie Finder</h4>
              <p className="fontSecondary">Interested in finding more information about your favorite movie or show? This movie finder will show you loads of information about your searches, such as, release date, plot, poster, and imdb ratings. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, Jquery, REST APIs, Dynamic Website.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/movie-finder-2' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front mathGameImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">10 Second Math game</h4>
              <p className="fontSecondary">A 10 second game where the user needs to input the correct answer to a basic arithmetic equation. If the user runs out of time, the game ends. If the user correctly answers, 1 second is added. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, Jquery, Dynamic Website.</p>
              <a role='button' className="viewRepo btn fontSecondary" href='https://github.com/collindapper/collins-10-second-math-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front toDoListImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">API To-Do List</h4>
              <p className="fontSecondary">This "To Do List" web application is connected to a ATDAPI service. It was created to have persistent data so that every time you visit the page, the list of tasks is the same as you left it. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, Jquery, AJAX, REST APIs.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-api-to-do-list' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front shoppingCartImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Dynamic Shopping List</h4>
              <p className="fontSecondary">Ever wondering just about how much your shopping bill will be? With this application, you are allowed the freedom to create an item, add its price, and quantity to calculate total price for that item, as well as, the total of all items you have added. This dynamic shopping list was created with JQuery to reduce HTML coding and build applications of all types using primarily JavaScript. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, JQuery.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-shopping-list' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front blackJackImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">BlackJack Browser Game</h4>
              <p className="fontSecondary">Want to prepare yourself for some card games at the casino this weekend? Come practice your game with this BlackJack browser game! The goal is simple, beat the dealer. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, JQuery.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-blackjack-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front rockPaperScissorsImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Rock Paper Scissors JavaScript Game</h4>
              <p className="fontSecondary">Can you beat the computer in a game of Rock, Paper, Scissors ? Try this game here and play head-to-head or best of 3! Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-rock-paper-scissors-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbBookingImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Airbnb Booking Webpage</h4>
              <p className="fontSecondary">Personal adaptation of the Airbnb Booking Webpage (Front-End). Programming languages used; HTML, CSS, Bootstrap v4</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-airbnb-booking' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbNewsImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Airbnb News Webpage</h4>
              <p className="fontSecondary">Personal adaptation of the Airbnb News Webpage (Front-End). Programming languages and libraries used; HTML, CSS, Bootstrap v5.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-airbnb-news' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front newsweekImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Newsweek Webpage</h4>
              <p className="fontSecondary">Personal adaptation of the Newsweek Webpage (Front-End). Programming languages and libraries used; HTML, CSS, Bootstrap v4.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-newsweek-website' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-6 mb-1 mb-md-4">
              <div className="flip-card-inner">
                <div className="flip-card-front appleImg" >
              </div>
            </div>
            </div>
            <div className="col-6">
              <h4 className="fontPrimary mt-2">Apple Store Webpage</h4>
              <p className="fontSecondary">Personal adaptation of the Apple Store Webpage (Front-End). HTML | CSS | Bootstrap v4</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary" href='https://github.com/collindapper/collins-apple-webpage' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          </div> 

          {/* Phone Screens */}
          <div className="row d-flex d-md-none">

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front websiteImg" >
                </div>
              </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Personal Website</h4>
              <p className="fontSecondary text-center">Full-Stack Personal Website to display facts about me, professional experience, projects, skills, and insight on my journey into Information Technology, that you are currently viewing this on!</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-website' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>
          
          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbImg" >
                </div>
              </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Full-Stack Airbnb Website</h4>
              <p className="fontSecondary text-center">Complete Full-Stack prototype of Airbnb website using Stripe payments web-hook to complete bookings of properties. API developed using Ruby on Rails. Upon user creation, you have the ability to post properties to be booked, and book and reserve other users posted properties. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, REST APIs, Ruby, Ruby on Rails, AWS S3, Stripe Web-hook.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/airbnb_clone' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front twitterImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Full-Stack Twitter Website</h4>
              <p className="fontSecondary text-center">Full-Stack, Fully functional, Twitter.com website. Website allows for user creation and user posts, and can all be seen on the main feed. API created through ruby on rails. Programming languages and libraries used; HTML, CSS, JavaScript, REST APIs, Reactjs, Ruby, Ruby on Rails, AWS S3, postgresql.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/twitter_clone_fs' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front xchangeImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Xchange: Currency Converter</h4>
              <p className="fontSecondary text-center">Intuitive and extremely user friendly currency converter application that helps a user convert any input amount from a selected base currency to a selected converted currency. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, REST APIs, Jquery.</p>
              <a role='button' className="viewRepo btn fontSecondary mb-5" href='https://github.com/collindapper/collins-currency-converter' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front movieFinderImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Movie Finder</h4>
              <p className="fontSecondary text-center">Interested in finding more information about your favorite movie or show? This movie finder will show you loads of information about your searches, such as, release date, plot, poster, and imdb ratings. Programming languages and libraries used; HTML, CSS, JavaScript, Reactjs, Jquery, REST APIs, Dynamic Website.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/movie-finder-2' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front mathGameImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">10 Second Math game</h4>
              <p className="fontSecondary text-center">A 10 second game where the user needs to input the correct answer to a basic arithmetic equation. If the user runs out of time, the game ends. If the user correctly answers, 1 second is added. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, Jquery, Dynamic Website.</p>
              <a role='button' className="viewRepo btn fontSecondary mb-5" href='https://github.com/collindapper/collins-10-second-math-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front toDoListImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">API To-Do List</h4>
              <p className="fontSecondary text-center">This "To Do List" web application is connected to a ATDAPI service. It was created to have persistent data so that every time you visit the page, the list of tasks is the same as you left it. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, Jquery, AJAX, REST APIs.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-api-to-do-list' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front shoppingCartImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Dynamic Shopping List</h4>
              <p className="fontSecondary text-center">Ever wondering just about how much your shopping bill will be? With this application, you are allowed the freedom to create an item, add its price, and quantity to calculate total price for that item, as well as, the total of all items you have added. This dynamic shopping list was created with JQuery to reduce HTML coding and build applications of all types using primarily JavaScript. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, JQuery.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-shopping-list' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front blackJackImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">BlackJack Browser Game</h4>
              <p className="fontSecondary text-center">Want to prepare yourself for some card games at the casino this weekend? Come practice your game with this BlackJack browser game! The goal is simple, beat the dealer. Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5, JQuery.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-blackjack-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front rockPaperScissorsImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Rock Paper Scissors JavaScript Game</h4>
              <p className="fontSecondary text-center">Can you beat the computer in a game of Rock, Paper, Scissors ? Try this game here and play head-to-head or best of 3! Programming languages and libraries used; HTML, CSS, JavaScript, Bootstrap v5.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-rock-paper-scissors-game' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbBookingImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Airbnb Booking Webpage</h4>
              <p className="fontSecondary text-center">Personal adaptation of the Airbnb Booking Webpage (Front-End). Programming languages used; HTML, CSS, Bootstrap v4</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-airbnb-booking' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front airbnbNewsImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Airbnb News Webpage</h4>
              <p className="fontSecondary text-center">Personal adaptation of the Airbnb News Webpage (Front-End). Programming languages and libraries used; HTML, CSS, Bootstrap v5.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-airbnb-news' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front newsweekImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Newsweek Webpage</h4>
              <p className="fontSecondary text-center">Personal adaptation of the Newsweek Webpage (Front-End). Programming languages and libraries used; HTML, CSS, Bootstrap v4.</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-newsweek-website' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          <Slide right>
            <div className="flip-card col-12 mb-1">
              <div className="flip-card-inner">
                <div className="flip-card-front appleImg" >
              </div>
            </div>
            </div>
            <div className="col-12">
              <h4 className="fontPrimary mt-2 text-center">Apple Store Webpage</h4>
              <p className="fontSecondary text-center">Personal adaptation of the Apple Store Webpage (Front-End). HTML | CSS | Bootstrap v4</p>
              <a role='button' className="viewRepo btn mt-2 fontSecondary mb-5" href='https://github.com/collindapper/collins-apple-webpage' target="_blank">View GitHub Repo</a>
            </div>
          </Slide>

          </div> 

        </div>
      </Layout>
    );
  }
}

export default Projects;