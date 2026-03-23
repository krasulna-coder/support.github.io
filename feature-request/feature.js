class FeatureForm {
  constructor() {
    this.problem = document.getElementById("problem");
    this.goals = document.getElementById("goals");
    this.currentIssues = document.getElementById("currentIssues");
    this.businessImpact = document.getElementById("businessImpact");
    this.featureDescription = document.getElementById("featureDescription");
    this.clientLink = document.getElementById("clientLink");
    this.tool = document.getElementById("tool");

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
    const toolText = this.tool.options[this.tool.selectedIndex].text;
    const data = {
      problem: this.problem.value.trim(),
      goals: this.goals.value.trim(),
      currentIssues: this.currentIssues.value.trim(),
      businessImpact: this.businessImpact.value.trim(),
      featureDescription: this.featureDescription.value.trim(),
      clientLink: this.clientLink.value.trim(),
      tool: toolText === "Выберите инструмент" ? "" : toolText
    };

    this.output.textContent = this.buildMessage(data);
  }

  buildMessage(data) {
    return `**Проблема клиента**: ${data.problem}
**Цели клиента / текущий подход**: ${data.goals}
**Проблемы текущего подхода**: ${data.currentIssues}
**Влияние на бизнес**: ${data.businessImpact}
**Описание доработки**: ${data.featureDescription}
**Ссылка на аккаунт**: ${data.clientLink}
**Инструмент**: ${data.tool}`;
  }

  copy() {
    if (!this.output.textContent) return;

    navigator.clipboard.writeText(this.output.textContent);

    const originalText = this.copyBtn.textContent;
    this.copyBtn.textContent = "✓ Скопировано";

    setTimeout(() => {
      this.copyBtn.textContent = originalText;
    }, 2000);
  }
}

class App {
  init() {
    new FeatureForm();
  }
}

new App().init();