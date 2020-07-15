import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import PortalDemo from './components/PortalDemo';
// import PureComp from './components/PureComp'
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Counter = lazy(() => import('./components/Counter'));
const Home = lazy(() => import('./components/Home'));
const Form = lazy(() => import('./components/User Entry'));
// const ParentComp = lazy(() => import('./components/ParentComp'))
const RefsDemo = lazy(() => import('./components/RefsDemo'))
const ParentPortal = lazy(() => import('./components/ParentPortal'))
const ErrorBoundaryDemo = lazy (() => import('./components/ErrorBoundaryDemo'))
const HigherOrderComponents = lazy(() => import('./components/HigherOrderComponents'))
// const PortalDemo = lazy(() => import('./components/PortalDemo'))

class App extends React.Component {
  state = {
    characters: []
  }
  removeCharacter = index => {

    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })

  }
  submitHandler = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
  render() {
    const { characters } = this.state
    return (
      <div>
        <Router>
          <Suspense fallback={
          <div className="loadingPage row">
            <div className="col-md-3"></div>
            <div className="col-md-6 well">
              <h1>Please wait while loading......</h1>
              <h3>Proxy script downloaded</h3>
              <p>Check your internet connection</p>
              </div>
            <div className="col-md-3"></div>
          </div>}>
            <Header />
            <Switch>

              <Route path="/" exact render={props =>
                <div >
                  <Form submitHandler={this.submitHandler} />
                  <Home characterData={characters} removeCharacter={this.removeCharacter} />
                </div>} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/counter" exact component={() => <Counter />} />
              {/* <Route path="/parentComp" exact component={() => <ParentComp />} /> */}
              <Route path="/errorboundarydemo" exact component={() => <ErrorBoundaryDemo />} />
              <Route path="/higherordercomponents" exact component={() => <HigherOrderComponents />} />
              <Route path="/parentportal" exact component={() => <ParentPortal />} />
              <Route path="/refsDemo" exact component={() => <RefsDemo />} />
            </Switch>
          </Suspense>
        </Router>

      </div>
    )
  }
}
export default App;