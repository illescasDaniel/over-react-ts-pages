import * as React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import AppRoutes from '../../config/appRoutes'
import './styles/App.css'

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <header/>
          <main role="main">
            <p>hello</p>
            <div className="d-flex flex-column">
              <Link to={AppRoutes.links.home}>Home</Link>
              <Link to={AppRoutes.links.about}>About</Link>
            </div>
            <AppRoutes/>
          </main>
          <footer/>
        </div>
      </BrowserRouter>
    )
  }
}
