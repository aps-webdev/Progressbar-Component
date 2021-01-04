import React from "react";
import ProgressBar from "../progressbar/progressbar.index";

function Dashboard() {
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevState) => {
        const value = prevState + 2;
        if (value === 100) {
          clearInterval(interval);
        }
        return value;
      });
    }, 1000);
  }, []);
  return (
    <React.Fragment>
      <ProgressBar value={percent}/>
    </React.Fragment>
  );
}

export default Dashboard;
