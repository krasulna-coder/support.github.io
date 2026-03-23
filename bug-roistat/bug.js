class BugForm {
  constructor() {
    this.fields = {
      title: document.getElementById("title"),
      pr: document.getElementById("pr"),
      st: document.getElementById("st"),
      problem: document.getElementById("problem"),
      analysis: document.getElementById("analysis"),
      steps: document.getElementById("steps"),
      result: document.getElementById("result"),
      expected: document.getElementById("expected"),
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

    const text = `${f.title.value}

**PR:** ${f.pr.value}
**ST:** ${f.st.value}
**Проблема:** ${f.problem.value}

**Анализ:**
${f.analysis.value}

**Воспроизведение:**
${f.steps.value}

**Результат:**
${f.result.value}

**Ожидаемый результат:**
${f.expected.value}`;

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
    new BugForm();
  }
}

new App().init();