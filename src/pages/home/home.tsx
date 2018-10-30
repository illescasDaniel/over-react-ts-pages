import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as React from 'react'
import {Button} from 'reactstrap'
import Cors from '../../config/cors'
import Recipe from '../../models/recipe'
import RecipeSearchResult from '../../models/recipeSearchResult'
import logo from '../../resources/logo.svg'
import Log from '../../utils/log'
import * as styles from './styles/home.css'

export interface IHomeProps {
  text: string
  testNumber?: number
}

export interface IHomeState {
  recipeTitles: JSX.Element[]
}

export default class Home extends React.Component<IHomeProps, IHomeState> {

  public readonly state: Readonly<IHomeState> = {recipeTitles: []}

  public constructor(props: IHomeProps) {
    super(props)
    this.fetchAPI()
  }

  public async fetchAPI() {
    // http://www.recipepuppy.com/about/api/
    // This is just a test
    // For HTTP requests you should prepend the cors url, or use your own...
    // Outside of github pages you just have to enable cors in your server
    const response: Response = await fetch(Cors.anywhereURL+"http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3")
    const recipeSearchResult: RecipeSearchResult = await response.json()
    let i = 0
    this.setState({
      recipeTitles: recipeSearchResult.results
        .map((recipe: Recipe) => recipe.title.trim())
        .map(recipeTitle => <p key={i++}>{recipeTitle}</p>)
    })
  }

  public render() {
    Log.out({test: 'hii'}, 'lol')
    const { text, testNumber} = this.props
    const { recipeTitles } = this.state
    return (
      <div>
        <Button onClick={this.onForm1ButtonClick}>
          <FontAwesomeIcon icon={faCoffee} /> {text} {testNumber}
        </Button>
        <img src={logo} className={styles.imgLogo} />
        <p>This is an async fetch example from this <a href="http://www.recipepuppy.com/about/api/">recipes api</a></p>
        <div>
          {recipeTitles}
        </div>
      </div>
    )
  }

  private onForm1ButtonClick = (event: React.MouseEvent) => {
    const buttonElement = event.nativeEvent.target as HTMLButtonElement
    if (buttonElement != null) {
      buttonElement.innerText = 'changed!'
    }
  }
}
