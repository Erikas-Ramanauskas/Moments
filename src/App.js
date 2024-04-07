import styles from "./App.module.css";

// created components
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="" render={() => <h1>Home page</h1>}></Route>
          <Route exact path="/signin" render={() => <h1>Sign in</h1>}></Route>
          <Route exact path="/signout" render={() => <h1>Sign out</h1>}></Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
