import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Header />
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
              }
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.5,
                sync: false,

              }
            }
          },
        }}
      />
    </div>
  );
};

export default Home;
