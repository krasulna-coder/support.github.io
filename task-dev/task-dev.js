class TaskDevForm {
  constructor() {
    this.fields = {
      title: document.getElementById("title"),
      pr: document.getElementById("pr"),
      st: document.getElementById("st"),
      task: document.getElementById("task"),
      analysis: document.getElementById("analysis"),
    };

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
    const f = this.fields;

    const text = `**Заголовок:** ${f.title.value}
**PR:** ${f.pr.value}
**ST:** ${f.st.value}
**Задача:** ${f.task.value}
**Анализ:** ${f.analysis.value}`;

    this.output.textContent = text.trim();
  }

  copy() {
    const text = this.output.textContent;
    if (!text) return;

    navigator.clipboard.writeText(text);

    const original = this.copyBtn.textContent;
    this.copyBtn.textContent = "✓ Скопировано";

    setTimeout(() => {
      this.copyBtn.textContent = original;
    }, 2000);
  }
}

class App {
  init() {
    new TaskDevForm();
  }
}

new App().init();