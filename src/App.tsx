import * as React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import MediaQuery from 'react-responsive';

class App extends React.Component {
  public render() {
    return (
      <div className="main">
        <Header />
        <MediaQuery query="(min-width: 768px)">
          <Main />
        </MediaQuery>
      </div>
    );
  }
}

export default App;