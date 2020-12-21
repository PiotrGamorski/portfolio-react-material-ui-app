import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "relative",
    opacity: 0.3,
  },
});

const ParticlesJS = () => {
  const classes = useStyles();

  return (
    <Particles
      className={classes.particlesCanva}
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "tomato",
            },
          },
          size: {
            value: 2,
            random: false,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: true,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: true,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesJS;
