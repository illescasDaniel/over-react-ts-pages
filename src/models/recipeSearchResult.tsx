import Recipe from './recipe'

export default class RecipeSearchResult {

  public title: string
  public version: string
  public href: string
  public results: [Recipe]

  constructor(title: string, version: string, href: string, results: [Recipe]) {
    this.title = title
    this.version = version
    this.href = href
    this.results = results
  }
}
