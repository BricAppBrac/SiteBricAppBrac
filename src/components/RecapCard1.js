import React from "react";

const RecapCard1 = () => {
  return (
    <div className="recap-card">
      <h3>RECAP Initialisation d'une appli React utilisant un routeur</h3>
      <div class="trait-title"> </div>
      <h4>Créer le projet React</h4>
      <p>Créer un répertoire pour le projet</p>
      <p>Ouvrir un terminal dans VSCode au niveau du projet:</p>
      <h5>...\projet&gt;npx create-react-app projet</h5>
      <p>Ouvrir un environnement de travail:</p>
      <h5>...\projet&gt;code .</h5>
      <h4>Supprimer les fichiers générés inutiles</h4>
      <p>Dans public: on supprime logo512.png</p>
      <p>Dans src: on garde App.js et index.js</p>
      <h4>index.js:</h4>
      <div className="code">
        <div className="r1index">
          <p>import React from "react";</p>
          <p>import ReactDOM from "react-dom/client";</p>
          <p>import App from "./App";</p>
          <p> import "./styles/index.scss";</p>
          <p>&nbsp;</p>
          <p>
            const root = ReactDOM.createRoot(document.getElementById("root"));
          </p>
          <p>root.render(</p>
          <p> &ensp;&lt;React.StrictMode&gt;</p>
          <p> &emsp;&lt;App /&gt;</p>
          <p> &ensp;&lt;/React.StrictMode&gt;</p>
          <p>);</p>
        </div>
      </div>
      <h4>App.js:</h4>
      <div className="code">
        <div className="r1app">
          <p>import React from "react";</p>
          <p>
            import &#123; BrowserRouter, Routes, Route &#125; from
            "react-router-dom";
          </p>
          <p>import HomeAppli from "./pages/HomeAppli";</p>
          <p>import HomeDev from "./pages/HomeDev";</p>
          <p>&nbsp;</p>
          <p>const App &#61; &#40;&#41;&nbsp;&#61;&gt; &#123;</p>
          <p>&nbsp;return (</p>
          <p>&nbsp;&ensp;&lt;BrowserRouter&gt;</p>
          <p>&nbsp;&emsp;&lt;Routes&gt;</p>
          <p>
            &nbsp;&nbsp;&emsp;&lt;Route path="/*" element=&#123;&lt;HomeAppli
            /&gt;&#125; /&gt;
          </p>
          <p>
            &nbsp;&nbsp;&emsp;&lt;Route path="/homedev"
            element=&#123;&lt;HomeDev /&gt;&#125; /&gt;
          </p>
          <p>&nbsp;&emsp;&lt;/Routes&gt;</p>
          <p>&nbsp;&ensp;&lt;/BrowserRouter&gt;</p>
          <p>);</p>
          <p>&#125;;</p>

          <p>export default App;</p>
        </div>
      </div>
      <h4>index.html:</h4>
      <div className="code">
        <div className="r1html">
          <p>&lt;!DOCTYPE html&gt;</p>
          <p>&lt;html lang="fr"&gt;</p>
          <p>&nbsp;&lt;head&gt;</p>
          <p>&nbsp;&ensp;&lt;meta charset="utf-8" /&gt;</p>
          <p>
            &nbsp;&ensp;&lt;link rel="icon" href="%PUBLIC_URL%/favicon.ico"
            /&gt;
          </p>
          <p>
            &nbsp;&ensp;&lt;meta name="viewport" content="width=device-width,
            initial-scale=1" /&gt;
          </p>
          <p>&nbsp;&ensp;&lt;meta name="theme-color" content="#000000" /&gt;</p>
          <p>&nbsp;&ensp;&lt;meta</p>
          <p>&nbsp;&nbsp;&ensp;name="description"</p>
          <p>
            &nbsp;&nbsp;&ensp;content="Web site created using create-react-app"
          </p>
          <p>&nbsp;&ensp;/&gt;</p>
          <p>
            &nbsp;&ensp;&lt;link rel="apple-touch-icon"
            href="%PUBLIC_URL%/logo192.png" /&gt;
          </p>
          <p>&nbsp;&ensp;&lt;title&gt;Projet&lt;/title&gt;</p>
          <p>&nbsp;&lt;/head&gt;</p>
          <p>&nbsp;&lt;body&gt;</p>
          <p></p>
          <p>&nbsp;&ensp;&lt;div id="root"&lt;&gt;/div&gt;</p>
          <p></p>
          <p>&nbsp;&lt;/body&gt;</p>
          <p>&lt;/html&gt;</p>
        </div>
      </div>
      <h4>Installation des bib react-router-dom et sass</h4>
      <h5>cf RECAP Installation d'un routeur</h5>
      <h5>cf RECAP Installation de SASS</h5>
      <h4>Lancer l'application</h4>
      <h5>...\projet&gt;npm start</h5>
      <p>Si erreur eslint:</p>
      <div className="code">
        <div className="r1erreslint">
          <p>Compiled with problems:</p>
          <p>ERROR</p>
          <p>
            [eslint] Plugin "react" was conflicted between "package.json »
            eslint-config-react-app
          </p>
        </div>
      </div>
      <p>Enlever de package.json:</p>
      <div className="code">
        <div className="r1packeslint">
          <p>"eslintConfig": &#123;</p>
          <p>"extends": [</p>
          <p>"react-app",</p>
          <p> ]</p>
          <p> &#125;,</p>
        </div>
      </div>
    </div>
  );
};

export default RecapCard1;
