import React from "react";

const RecapCard2 = () => {
  return (
    <div className="recap-card">
      <h3>RECAP Installation d'un routeur</h3>
      <div class="trait-title"> </div>
      <h4>Installer react-routeur-dom</h4>
      <p>Dans un terminal de VSCode au niveau du projet:</p>
      <h5>...\projet&gt;npm i react-router-dom</h5>
      <h4>Créer les pages du projet</h4>
      <p>Dans src: créer le répertoire pages</p>
      <p>Dans src/pages: créer Page1.js et Page2.js</p>
      <h4>Ex: Page1.js:</h4>
      <div className="code">
        <div className="r2page1">
          <p>import React from "react";</p>
          <p>&nbsp;</p>
          <p>const Page1 = () &#61;&gt; &#123;</p>
          <p>&nbsp;return &lt;h1&gt;Page1 en cours de création&lt;/h1&gt;;</p>
          <p>&#125;;</p>
          <p>&nbsp;</p>
          <p>export default Page1;</p>
        </div>
      </div>
      <h4>Appel à BrowserRouter, Routes et Route dans App.js:</h4>
      <div className="code">
        <div className="r2app">
          <p>import React from "react";</p>
          <p>
            import &#123; BrowserRouter, Routes, Route &#125; from
            "react-router-dom";
          </p>
          <p>import Page1 from "./pages/Page1";</p>
          <p>import Page2 from "./pages/Page2";</p>
          <p>&nbsp;</p>
          <p>const App &#61; &#40;&#41;&nbsp;&#61;&gt; &#123;</p>
          <p>&nbsp;return (</p>
          <p>&nbsp;&ensp;&lt;BrowserRouter&gt;</p>
          <p>&nbsp;&emsp;&lt;Routes&gt;</p>
          <p>
            &nbsp;&nbsp;&emsp;&lt;Route path="/*" element=&#123;&lt;Page1
            /&gt;&#125; /&gt;
          </p>
          <p>
            &nbsp;&nbsp;&emsp;&lt;Route path="/Page2" element=&#123;&lt;Page2
            /&gt;&#125; /&gt;
          </p>
          <p>&nbsp;&emsp;&lt;/Routes&gt;</p>
          <p>&nbsp;&ensp;&lt;/BrowserRouter&gt;</p>
          <p>);</p>
          <p>&#125;;</p>

          <p>export default App;</p>
        </div>
      </div>
      <p>L'application a maintenant accès à 2 pages.</p>
    </div>
  );
};

export default RecapCard2;
