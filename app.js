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

      case "task":
        window.location.href = "task-dev/task-dev.html"; // <-- новая страница Таск в разработку
        break;

      case "product":
        window.location.href = "product/product.html";
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

    // 📚 ДОКУМЕНТАЦИЯ — ссылки
    const docsLinks = {
      "Внешняя": "https://help-ru.roistat.com/",
      "Внутренняя": "https://roistat.platrum.ru/wiki/page/3490-reshenie-problem",
      "API": "https://help-ru.roistat.com/API/methods/about/",
      "JS SDK": "https://help-ru.roistat.com/API/JS_API/"
    };

    document.querySelectorAll("#docsModal button").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.textContent.trim();
        const url = docsLinks[text];

        if (url) {
          window.open(url, "_blank");
        }
      });
    });

    // 🐞 БАГ-РЕПОРТ — переходы
    const bugLinks = {
      "Баг в Roistat": "bug-roistat/bug.html",
      "Баг в ERP": "bug-erp/bug-erp.html"
    };
    
    document.querySelectorAll("#bugModal button").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.textContent.trim();
        const url = bugLinks[text];
    
        if (url) {
          window.location.href = url;
        }
      });
    });

    // ✅ ТАСК В РАЗРАБОТКУ — переходы (если есть своё модальное окно)
    const taskLinks = {
      "Таск в разработку": "task-dev/task-dev.html"
    };

    const taskModal = document.getElementById("taskModal");
    if(taskModal){
      taskModal.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          const text = btn.textContent.trim();
          const url = taskLinks[text];
          if(url){
            window.location.href = url;
          }
        });
      });
    }
  }
}

new App().init();