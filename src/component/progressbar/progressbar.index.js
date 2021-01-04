import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./progressbar.styles.scss";

const Container = styled.div`
  progress[value] {
    appearance: none;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: none;
    border-radius: 20px;
  }
  progress[value]::-webkit-progress-bar {
    border: none;
    border-radius: 20px;
    background: #eee;
  }
  progress[value]::-webkit-progress-value {
    background-color: ${(props) => props.color};
    border-radius: 10px;
  }
  progress[value]::-moz-progress-bar {
    background-color: ${(props) => props.color};
    border-radius: 10px;
  }
`;

function ProgressBar(props) {
  console.log(props);

  const completedValue = Math.floor((props.value / props.max) * 100);
  return (
    <Container width={props.width} height={props.height} color={props.color}>
      <progress max={props.max} value={props.value} />
      <span className="indicator">{completedValue}%</span>
    </Container>
  );
}

ProgressBar.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  width: "50%",
  height: "16px",
  color: "#28a745",
};

export default ProgressBar;
