import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from '../pages/about/about'
import Home from '../pages/home/home'

export default class AppRoutes extends React.Component {

  public static pageTitle = 'over-react-ts-pages'
  public static links = {
    about: `/${AppRoutes.pageTitle}/about`,
    home: `/${AppRoutes.pageTitle}/`
  }

  public render() {
    return (
      <Switch>
        <Route exact={true} path={`${AppRoutes.links.home}`} render={this.myHome}/>
        <Route exact={true} path={`${AppRoutes.links.about}`} component={About}/>
      </Switch>
    )
  }

  private myHome = () => {
    return <Home text={'hello!'} testNumber={100}/>
  }
}
