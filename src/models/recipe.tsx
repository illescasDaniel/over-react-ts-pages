export default class Recipe {

  public href: string
  public ingredients: string
  public thumbnail: string
  public title: string

  constructor(href: string, ingredients: string, thumbnail: string, title: string) {
   this.href = href
   this.ingredients = ingredients
   this.thumbnail = thumbnail
   this.title = title
  }
}
