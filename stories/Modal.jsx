import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./modal.css";

/**
 * Primary UI component for user interaction
 */

export const Modal = ({ label, textarea }) => {
  let [inOpen, setInOpen] = useState(true);

  // const cerrar = () => {
  //   let close = !inOpen ? ".cerrar" : "bloque";
  //   alert(close);
  // };
  return (
    <>
      {inOpen && (
        <div className="modal ">
          <div className="header-modal">
            <h3>{label}</h3>
            <button
              type="button"
              className="boton-modal"
              onClick={() => setInOpen(false)}
            >
              x
            </button>
          </div>
          <div className="body-modal">{textarea}</div>
          <div className="footer-modal">
            <button className="azul" onClick={() => setInOpen(false)}>
              Aceptar
            </button>
            <button className="gris" onClick={() => setInOpen(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Modal.defaultProps = {
  onClick: undefined,
};
