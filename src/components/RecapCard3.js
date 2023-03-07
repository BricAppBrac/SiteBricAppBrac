import React from "react";

const RecapCard3 = () => {
  return (
    <div className="recap-card">
      <h3>RECAP Installation de SASS</h3>
      <div class="trait-title"> </div>
      <h4>Installer sass</h4>
      <p>Dans un terminal de VSCode au niveau du projet:</p>
      <h5>...\projet&gt;npm i sass</h5>
      <h4>Créer le répertoire styles dans src</h4>
      <h4>Créer les fichiers _settings.scss et index.scss dans src:</h4>
      <h6>_settings.scss pour les paramètres communs</h6>
      <h6>et index.scss donnant la liste des fichiers de style</h6>
      <div className="code">
        <div className="r3index1">
          <p>@import "./settings";</p>
        </div>
      </div>
      <h4>Pour les projets nécessitant plusieurs fichiers de style:</h4>
      <h6>Dans src/styles: créer le répertoire layouts</h6>
      <p>
        Dans src/styles/layouts: créer les fichiers _page1.scss et _page2.scss
      </p>
      <h4>index.scss doit contenir alors la liste des fichiers style:</h4>
      <div className="code">
        <div className="r3index2">
          <p>@import "./settings";</p>
          <p>@import "./layouts/page1";</p>
          <p>@import "./layouts/page2";</p>
        </div>
      </div>
    </div>
  );
};

export default RecapCard3;
