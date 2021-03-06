import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useSelector } from "react-redux";
import leaf from "../../Assets/Projects/leaf.png";
import clima from "../../Assets/Projects/clima.png";
import food from "../../Assets/Projects/food.png";
import slay from "../../Assets/Projects/slay.png";
import chichat from "../../Assets/Projects/chichat.png";
import poke from "../../Assets/Projects/poke.png";
import film from "../../Assets/Projects/film.png";

function Projects() {
  const len = useSelector((state) => state.len);

  return len === "ES" ? (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          En que he estado <strong className="purple">Trabajando </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui hay algunos de los proyectos en los que trabaje recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Coding To Help"
              description="Un gran proyecto realizado en un equipo de 8 desarrolladores. El objetivo de CTL es ayudar a las pequeñas ONG a crecer y ganar visibilidad permitiéndoles recibir donaciones y difundir su filosofía."
              link="https://github.com/MDVeloper/ong-client"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clima}
              isBlog={false}
              title="Weather App"
              description="Weather App permite tener una prevision meteorológica internacional y local de las ciudades, así como una geolocalización en tiempo real."
              link="https://github.com/Florengo/clima"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Tasty Meals Done Dirty Cheap"
              description="Una SPA que utiliza la API de Spoonacular para proporcionar información sobre +5000 recetas y permite buscar, aprender y también publicar nuevas recetas."
              link="https://github.com/chicha099/Tasty-Meals-Done-Dirty-Cheap"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poke}
              isBlog={false}
              title="Poke App"
              description="Básicamente una Pokedex que también te permite crear nuevos Pokemons."
              link="https://github.com/Florengo/PokeApp"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chichat}
              isBlog={false}
              title="ChiChat"
              description="Una aplicación web de mensajería instantánea y grupos como Slack o Discord hecha sobre Reactjs utilizando CometChat y Firebase para el manejo de mensajes y usuarios respectivamente."
              link="https://chi-chat.vercel.app/login"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slay}
              isBlog={false}
              title="RogueLike insipirado en Slay The Spire (En progreso)"
              description="React no está pensado para hacer videojuegos pero quise tomar el desafío de intentarlo. Aun está en progreso pero ya puedes luchar contra enemigos nuevos en cada sala, aplicar cambios de estado y algunas funcionalidades mas."
              link="https://github.com/chicha099/card-game"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Movies App"
              description="Permite ver los últimos y mas relevantes estrenos de películas de cine además de ver la información detallada y los trailers de cada una."
              link="https://github.com/Florengo/MoviesApp"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  ) : (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clima}
              isBlog={false}
              title="Weather App"
              description="The Heavy Weather app provide an international and local weather forecast for cities, as well as a real-time geolocalization."
              link="https://github.com/Florengo/clima"
            />
          </Col>

      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poke}
              isBlog={false}
              title="Poke App"
              description="Basically a Pokedex that also let you can create a new Pokemons"
              link="https://github.com/Florengo/PokeApp"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Movie App"
              description="Allows you to see the latest and most relevant movie releases as well as detailed information and trailers for each film."
              link="https://github.com/Florengo/MoviesApp"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
