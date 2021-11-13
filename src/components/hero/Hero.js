import React from "react";
import { useCycle } from "framer-motion";
import { useEffect } from "react";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { circuloScene, atomoScene, romboScene } from "./scenes";

import "./Hero.css";

function Hero() {
  const [currentScene, setCurrentScene] = useCycle(
    circuloScene,
    atomoScene,
    romboScene
  );

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, 3000);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className="figuraImagen figuraImagenUno"
      />
      <ImageHolder
        img={currentScene.image2}
        className="figuraImagen figuraImagenDos"
      />
      <ImageHolder
        img={currentScene.image3}
        className="figuraImagen figuraImagenTres"
      />
    </div>
  );
}

export default Hero;
