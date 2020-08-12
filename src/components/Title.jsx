import React from 'react';

const styles = {
  headingOne: {
    color: "#2474ff",
    textTransform: "uppercase",
    textAlign: "center"
  }
}

const Title = () => {
  return (
    <div>
      <h1 style={styles.headingOne}>
        Your plans!
      </h1>
    </div>
  )
}

export default Title;
