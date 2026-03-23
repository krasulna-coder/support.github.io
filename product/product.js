class ProductForm {
  constructor() {
    this.tool = document.getElementById("tool");
    this.help = document.getElementById("help");
    this.task = document.getElementById("task");
    this.question = document.getElementById("question");
    this.output = document.getElementById("output");

    this.generateBtn = document.getElementById("generateBtn");
    this.copyBtn = document.getElementById("copyBtn");

    this.init();
  }

  init() {
    this.generateBtn.addEventListener("click", () => this.generate());
    this.copyBtn.addEventListener("click", () => this.copy());
  }

  generate() {
    const data = {
      tool: this.tool.value.trim(),
      help: this.help.value.trim(),
      task: this.task.value.trim(),
      question: this.question.value.trim()
    };

    const message = this.buildMessage(data);
    this.output.textContent = message;
  }

  buildMessage(data) {
    return `**Инструмент Ройстат**: ${data.tool}
**Ссылки help**: ${data.help}
**Задача**: ${data.task}
**Вопрос**: ${data.question}`;
  }

  copy() {
  const text = this.output.textContent;
  if (!text) return;

  navigator.clipboard.writeText(text);

  // меняем текст кнопки
  const originalText = this.copyBtn.textContent;
  this.copyBtn.textContent = "✓ Скопировано";

  // возвращаем обратно через 2 сек
  setTimeout(() => {
    this.copyBtn.textContent = originalText;
  }, 2000);
}
}

class App {
  init() {
    new ProductForm();
  }
}

new App().init();