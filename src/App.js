import Layout from './app/layout';
import Notes from './app/main/notes';
import Note from './app/main/note';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './app/main/login';
import Auth from './app/context/Auth';

const App = () => {
  return (
    <Auth>
      <Router>
          <Layout>
            <Switch>
              <Route path="/" component={Notes} exact />
              <Route path="/notes/:id" component={Note} exact />
              <Route path="/login" component={Login} exact />
            </Switch>
          </Layout>
      </Router>
    </Auth>
  );
}

export default App;
