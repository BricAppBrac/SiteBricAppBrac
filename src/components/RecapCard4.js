import React from "react";

const RecapCard4 = () => {
  return (
    <div className="recap-card">
      <h3>RECAP Insérer une image en CSS</h3>
      <div class="trait-title"> </div>
      <h4>HTML: Déclarer une classe img dans un container</h4>
      <p>image</p>
      <h4>CSS: donner une taille au contenant de l'image</h4>
      <p>soit une min-width ou max-width</p>
      <p>soit une width et une height</p>
      <h4>
        CSS: url de l'image en background en center/cover et avec une min-height
        100%
      </h4>
      <div className="code">
        <div className="r4image">
          <p>.image-container &#123;</p>
          <p> width: 50px;</p>
          <p> height: 50px;</p>
          <p> margin: 0 auto;</p>
          <p> &nbsp;.img &#123;</p>
          <p> &nbsp;&nbsp;background: url(../img/image.jpg) center/cover;</p>
          <p> &nbsp;&nbsp;min-height: 100%;</p>
          <p> &nbsp;&#125;</p>
          <p> &#125;</p>
        </div>
      </div>
      <p>image</p>
    </div>
  );
};

export default RecapCard4;
