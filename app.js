class Button {
  constructor(el) {
    this.el = el;
    this.action = el.dataset.action;
    this.init();
  }

  init() {
    this.el.addEventListener("click", () => this.handleClick());
  }

  handleClick() {
    console.log("Clicked:", this.action);
    this.execute();
  }

  execute() {
    alert(`"${this.action}" пока не реализовано`);
  }
}

class ButtonFactory {
  static create(el) {
    return new Button(el);
  }
}

class App {
  init() {
    document.querySelectorAll("button").forEach(btn => {
      ButtonFactory.create(btn);
    });
  }
}

new App().init();
