import Recipe from './recipe'

export default class RecipeSearchResult {
  public title: string
  public version: string
  public href: string
  public results: Recipe[]
}
