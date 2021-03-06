import React from "react";
import { StyledComponent } from "styled-components";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeart,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import RectanguloNegro from "./RectanguloNegro/RectanguloNegro";
import inscripcion from "../images/signup-image.png";

type Props = {
  anchura: number;
};

/**
 * Un componente que renderiza más información sobre
 * la aplicación de manera similar a la cabecera
 * utilizando el componente RectanguloNegro.
 */
const ContenidoInferior = ({ anchura }: Props) => {
  //** Dos elementos "p" que se usarán como texto principal en RectanguloNegro */
  const contenido = () => {
    return (
      <div className={anchura <= 767 ? "text-center my-4" : undefined}>
        <p className="mb-1">
          <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-1" />{" "}
          Enumera los productos que tú{" "}
          <FontAwesomeIcon icon={faHeart} className="text-danger" /> amas.
        </p>
        <p>
          <FontAwesomeIcon icon={faCheckCircle} className="text-white mr-1" />{" "}
          Se <FontAwesomeIcon icon={faGift} className="text-warning" />{" "}
          recompensado.
        </p>
      </div>
    );
  };

  /** Dos botones que se usarán como pie en RectanguloNegro*/
  const pie = (Boton: StyledComponent<Button, any, {}, never>) => {
    return (
      <div>
        <Row>
          <Col className={anchura > 520 ? "pr-1" : undefined}>
            <Button variant="light" type="button" className="btn-block ">
              Regístrate
            </Button>
          </Col>

          {anchura > 520 && (
            <Col className="pl-1">
              <Boton variant="danger" type="button" className="btn-block">
                Conoce más
              </Boton>
            </Col>
          )}
          {anchura > 767 && <Col xs={2}></Col>}
        </Row>

        {anchura <= 520 && (
          <Row>
            <Col className="mt-3">
              <Boton variant="danger" type="button" className="btn-block">
                Conoce más
              </Boton>
            </Col>
          </Row>
        )}
      </div>
    );
  };

  /** Rénder */
  return (
    <div>
      <RectanguloNegro
        anchura={anchura}
        titulo="¿Por qué no publicas tus enlaces aquí también?"
        contenido={contenido}
        pie={pie}
        imagen={{
          url: inscripcion,
          alt: "Una ilustración de un celular de tamaño humano con dos mujeres a ",
          width: "100%",
          col: 6,
          colClases: "px-0",
        }}
      />
    </div>
  );
};

export default ContenidoInferior;
