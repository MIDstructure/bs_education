import { action, makeObservable, observable } from "mobx"

class ThemeStore {
  
  theme = true
  constructor() {
    makeObservable(this, {
      theme: observable,
      toggle: action,
    })
  }

  toggle() {
    this.theme = !this.theme
  }

}

export default new ThemeStore()