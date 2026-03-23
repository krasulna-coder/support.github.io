class BugERPForm {
  constructor() {
    this.fields = {
      problem: document.getElementById("problem"),
      where: document.getElementById("where"),
      steps: document.getElementById("steps"),
      expected: document.getElementById("expected"),
      proof: document.getElementById("proof"),
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

    const text = `**Проблема:** ${f.problem.value}
**Где возникла проблема:** ${f.where.value}
**Шаги к воспроизведению:** ${f.steps.value}
**Какой результат ожидали увидеть:** ${f.expected.value}
**Подтверждение проблемы:** ${f.proof.value}`;

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
    new BugERPForm();
  }
}

new App().init();