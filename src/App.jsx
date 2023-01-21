import React from "react"
import ScrollToTop from "react-scroll-to-top";

function App(){
  return(
<div>

{/* SECTION ACCUEIL */}
    <section class="white-section acc-section">    
      <div class="container-fluid">
        
        <img class="img-resto" src="./images/terrassev2.jpg" alt="terrasse"/>  
        <p class="mot-accueil">
            Petit restaurant familial situé à Padern. 
            Épicerie d'appoint disponible. 
            Cuisine fait maison de type bistrot.          
        </p>
        <a class="btn" href="#contact"><i class="btn-icons fa-solid fa-utensils"> </i>Réserver !</a> 
     
      </div>
    </section>

{/* SECTION MENU */}
    <section class="colored-section menu-section" id="menu">
      <div class="container-fluid">
      
        <h1>Découvrir le menu</h1>

        {/* <!-- Carousel photo menu --> */}
        <div id="menu-carousel" class="carousel slide" data-bs-ride="false">
             
          <div class="carousel-indicators">    
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
                  
            <div class="carousel-item active">  
              <img src="./images/hamburger.jpeg" class="carousel-img" alt="menu-photo"/>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="carousel-text">Hamburger</h5>       
              </div>
            </div>
          
            <div class="carousel-item">    
              <img src="./images/Tartare.jpeg" class="carousel-img" alt="menu-photo"/>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="carousel-text">Tartare</h5>
              </div>
            </div>
          
            <div class="carousel-item">
              <img src="./images/morue.jpeg" class="carousel-img" alt="menu-photo"/>
              <div class="carousel-caption d-none d-md-block">
                <h5 class="carousel-text">Brandade de morue</h5>
              </div>
            </div>

         </div>
        
          <button class="carousel-control-prev" type="button" data-bs-target="#menu-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button class="carousel-control-next" type="button" data-bs-target="#menu-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
        {/* Bouton vers menu */}
        <a class="btn btn-lg" href="https://cdn.website.dish.co/media/6b/df/5446331/Menu.pdf" target="_blank"><i class="btn-icons fa-solid fa-book-open"> </i> Menu</a>
      
      </div>
    </section>

{/* SECTION CONTACT */}
    <section class="white-section contact-section" id="contact">
      <div class="container-fluid">
            
        <h1>Où nous trouver</h1>
        {/* <!-- google maps map via iframe --> */}
        <iframe 
          class="google-maps" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d731.0601179789419!2d2.657300879414523!3d42.86776831601832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b03d36156ef59d%3A0x47fe3d0db3befe5a!2sLa%20P&#39;tite%20Ardoise!5e0!3m2!1sfr!2sfr!4v1658505197589!5m2!1sfr!2sfr" 
          width="40%" 
          height="300px" 
          style={{border:0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <div class="horaire">
          <p>Du lundi au dimanche service de 
            <span class="underline"> 12h</span> jusqu'à 
            <span class="underline"> 14h30</span> et le soir de  
            <span class="underline"> 18h30</span> jusqu'à 
            <span class="underline"> 21h30</span>
          </p>
          <p class="bold">Fermé le mercredi</p>
          <p> Pour réserver veuillez nous contacter au <span class="underline"> +33 4 68 33 19 31</span></p>  
        </div>
      
      </div>
    </section>

{/* SECTION SERVICES */}
    <section class="colored-section" id="services">
      <div class="container-fluid">
        <h1>Nos services</h1>
        
        <div class="row">
          
          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x fa-solid fa-wheelchair"></i>
            <p class="service-text">Accesible aux personnes à mobilité réduite</p>
          </div>

          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x fa-solid fa-temperature-arrow-down"></i>
            <p class="service-text">Climatisation</p>
          </div>

          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x  fa-solid fa-paw"></i>
            <p class="service-text">Animaux domestiques autorisés</p>
          </div>

          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x fa-solid fa-champagne-glasses"></i>
            <p class="service-text">Évènements privés</p>
          </div>

          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x fa-solid fa-square-parking"></i>
            <p class="service-text">Parking gratuit disponible</p>
          </div>

          <div class="col col-lg-1 col-sm-4">
            <i class="service-icon fa-2x fa-solid fa-bag-shopping"></i>
            <p class="service-text">À emporter</p>
          </div>
        
        </div>

      </div>
    </section>

{/* SECTION EVENT */}
    <section class="white-section event-section" id="event">
      <div class="container-fluid event-div">
        <h1 class="head-title">Évènements organisés</h1>
        
        <div class="paella-div">
          <img class="img-paella" src="./images/paella.jpeg" alt="paella"/>      
          <h3 class="title-event">Journée paella</h3>
          <p class="text-event">Aliquam id euismod augue. Vestibulum facilisis enim in dui condimentum cursus. Pellentesque ut magna quis mi rutrum aliquet. Nunc dignissim scelerisque purus.</p>
        </div>

        <div class="concert-div">
          <img class="img-concert" src="./images/concert.jpeg" alt="pizza"/>
          <h3 class="title-event">Soirée pizza & concert </h3>
          <p class="text-event"> Aliquam id euismod augue. Vestibulum facilisis enim in dui condimentum cursus. Pellentesque ut magna quis mi rutrum aliquet. Nunc dignissim scelerisque purus.</p>
        </div>
      
      </div>
    </section>

{/* FOOTER */}
    <section id="footer">
      <div class="container-fluid">
    
        <a class="footer-icon fa-brands fa-facebook-f" href="https://www.facebook.com/profile.php?id=100057890640014" target="_blank"></a>
        <a class="footer-icon fa-brands fa-instagram" href="https://www.instagram.com/la_ptite_ardoise/?igshid=YmMyMTA2M2Y%3D" target="_blank"></a>
        <p>© La P'tite Ardoise</p>
        <ScrollToTop smooth style={{ backgroundColor: "#4E598C" }} color= "white" />
      
      </div>
      </section>
</div>)
}
export default App;  