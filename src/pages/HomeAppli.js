import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeAppli = () => {
  return (
    <div className="homeappli">
      <Navbar />
      <div className="homeappli-content">
        <div className="homeappli-text">
          <div className="homeappli-text-container">
            <h2>
              Le Bric-à-Brac <br />
              des Applications qui simplifient la vie: <br />
            </h2>
            <h1>
              Menu Planner : <br />
              une application pour gagner du temps <br />
              en planifiant les menus de la semaine!
            </h1>
            <div class="e-mail" id="inscription">
              <button>
                Inscription gratuite: mail à bricappbrac@gmail.com
              </button>
            </div>

            <h2>Comment gagner du temps quotidiennement?</h2>
            <h3>
              En s'attaquant à une question qui revient pous les jours:
              "Qu'est-ce qu'on mange?"
            </h3>
            <p></p>
            <div class="trait"></div>

            <p>
              Comment passer de l'ouverture désespérée du frigo à une assiette
              saine et savoureuse?
            </p>

            <p>
              1- anticiper les menus de la semaine: rapides, sains et délicieux
            </p>
            <p>2- courses adaptées</p>
            <p>
              3- commencer la préparation du repas au bon moment en fonction du
              temps nécessaire
            </p>
            <p></p>

            <div class="trait">
              <h3>
                Je commence donc mon BricAppBrac avec une application web et
                mobile permettant de s'organiser pour ne plus perdre de temps et
                manger en fonction de nos choix.
              </h3>
            </div>
            <h3>
              Cette application permettra de constituer facilement et rapidement
              les menus de la semaine, grâce à une base de recettes. Il ne
              restera plus qu'à choisir pour constituer le menu de la semaine et
              générer la liste de courses correspondante!
            </h3>

            <p>
              Si cette application vous intéresse, faites-le moi savoir en
              laissant votre adresse email.
            </p>
            <p>
              Vous pourrez être les premiers avertis lors de la mise en ligne!
            </p>
            <div class="flash" id="planifmenus">
              <div class="e-mail">
                <button>Ecrivez-moi sur bricappbrac@gmail.com</button>
              </div>
            </div>
            <div class="name">
              <h5>Mélissande</h5>
              <h6>Contact: bricappbrac@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeAppli;
