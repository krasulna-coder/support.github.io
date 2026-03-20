class Button {
  constructor(el) {
    this.el = el;
    this.action = el.dataset.action;
    this.init();
  }

  init() {
    this.el.addEventListener("click", () => this.handle());
  }

  handle() {
    switch (this.action) {
      case "api":
        window.open("https://hoppscotch.io/", "_blank");
        break;

      case "docs":
        this.toggleModal("docsModal");
        break;

      case "bug":
        this.toggleModal("bugModal");
        break;

      default:
        alert("Пока не реализовано");
    }
  }

  toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle("show");

    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    };
  }
}

class App {
  init() {
    document.querySelectorAll("button[data-action]").forEach(btn => {
      new Button(btn);
    });
  }
}

new App().init();
