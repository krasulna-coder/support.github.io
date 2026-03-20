class ActionButton {
    constructor(element) {
        this.element = element;
        this.action = element.dataset.action;

        this.init();
    }

    init() {
        this.element.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        console.log(`Нажата кнопка: ${this.action}`);
        this.execute();
    }

    execute() {
        alert(`Функционал "${this.action}" пока не реализован`);
    }
}

class ApiTestButton extends ActionButton {
    execute() {
        alert("Тестирование API — скоро будет логика");
    }
}

class DocsButton extends ActionButton {
    execute() {
        alert("Документация — в разработке");
    }
}

class ProductRequestButton extends ActionButton {
    execute() {
        alert("Запрос в продукт — заглушка");
    }
}

class BugReportButton extends ActionButton {
    execute() {
        alert("Баг-репорт — заглушка");
    }
}

class DevTaskButton extends ActionButton {
    execute() {
        alert("Таск в разработку — заглушка");
    }
}

class ButtonFactory {
    static create(element) {
        const action = element.dataset.action;

        switch (action) {
            case 'api': return new ApiTestButton(element);
            case 'docs': return new DocsButton(element);
            case 'product': return new ProductRequestButton(element);
            case 'bug': return new BugReportButton(element);
            case 'task': return new DevTaskButton(element);
            default: return new ActionButton(element);
        }
    }
}

class App {
    init() {
        document.querySelectorAll('.btn').forEach(el => {
            ButtonFactory.create(el);
        });
    }
}

new App().init();
