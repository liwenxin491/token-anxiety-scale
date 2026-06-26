const dimensions = [
  {
    id: "RMA",
    name: "Resource Monitoring and Anticipatory Concern",
    summary:
      "Checking, tracking, or thinking about remaining AI usage before or during tasks.",
  },
  {
    id: "UBU",
    name: "Unpredictability and Black-Box Usage",
    summary:
      "Feeling unable to predict or understand how AI usage is counted.",
  },
  {
    id: "EBS",
    name: "Economic Burden and Spend Inhibition",
    summary:
      "Cost concerns that shape model choice, exploration, and willingness to use AI freely.",
  },
  {
    id: "WIC",
    name: "Workflow Interruption and Context Loss",
    summary:
      "Threats to flow, continuity, long conversations, coding sessions, and complex work.",
  },
  {
    id: "PFT",
    name: "Platform Control, Fairness, and Trust",
    summary:
      "How transparent, stable, and fair users perceive product usage rules to be.",
  },
  {
    id: "CSW",
    name: "Conservation, Substitution, and Workarounds",
    summary:
      "Behavior changes such as shortening prompts, switching models, or delaying tasks.",
  },
  {
    id: "AID",
    name: "AI Dependence and Capability Pressure",
    summary:
      "Perceived performance pressure and disadvantage when AI access is limited.",
  },
  {
    id: "EDS",
    name: "Emotional Distress",
    summary:
      "Anxiety, frustration, regret, tension, relief after reset, and unease around usage decisions.",
  },
];

const coreItems = [
  ["RMA1", "Resource Monitoring and Anticipatory Concern", "I find myself checking how much AI usage I have left before starting a task."],
  ["RMA2", "Resource Monitoring and Anticipatory Concern", "I keep track of my remaining messages, credits, or token budget while using AI tools."],
  ["RMA3", "Resource Monitoring and Anticipatory Concern", "Even when an AI task is going well, I worry that I may run into a usage limit."],
  ["RMA4", "Resource Monitoring and Anticipatory Concern", "I think about my remaining AI allowance before deciding how much context to give the tool."],
  ["RMA5", "Resource Monitoring and Anticipatory Concern", "I monitor reset times or renewal dates so I know when I can use AI again."],
  ["RMA6", "Resource Monitoring and Anticipatory Concern", "I feel more cautious with AI when I know my usage allowance is limited."],
  ["UBU1", "Unpredictability and Black-Box Usage", "It is hard for me to predict how much AI usage a task will consume."],
  ["UBU2", "Unpredictability and Black-Box Usage", "A task that looks simple can use more AI resources than I expected."],
  ["UBU3", "Unpredictability and Black-Box Usage", "I feel uneasy when an AI platform does not clearly show how my usage is being counted."],
  ["UBU4", "Unpredictability and Black-Box Usage", "I do not always understand why one AI conversation uses more of my allowance than another."],
  ["UBU5", "Unpredictability and Black-Box Usage", "Hidden or changing usage rules make me less comfortable relying on AI tools."],
  ["UBU6", "Unpredictability and Black-Box Usage", "I worry that long context, tool calls, or agentic workflows may use more resources than I realize."],
  ["EBS1", "Economic Burden and Spend Inhibition", "I hesitate to use AI freely because I am concerned about cost."],
  ["EBS2", "Economic Burden and Spend Inhibition", "I sometimes avoid using a better AI model because it may cost more."],
  ["EBS3", "Economic Burden and Spend Inhibition", "I think carefully before spending extra money on AI usage beyond my plan or allowance."],
  ["EBS4", "Economic Burden and Spend Inhibition", "I have changed how I use AI because of subscription, credit, or API costs."],
  ["EBS5", "Economic Burden and Spend Inhibition", "I feel pressure to get enough value out of the AI resources I pay for."],
  ["EBS6", "Economic Burden and Spend Inhibition", "I worry that heavy AI use could become a noticeable personal expense."],
  ["WIC1", "Workflow Interruption and Context Loss", "I worry that hitting an AI usage limit will interrupt my work at a bad time."],
  ["WIC2", "Workflow Interruption and Context Loss", "Running out of AI usage during a task makes it harder for me to stay focused."],
  ["WIC3", "Workflow Interruption and Context Loss", "I am concerned about losing the continuity of a long AI conversation or coding session."],
  ["WIC4", "Workflow Interruption and Context Loss", "When a usage limit interrupts a task, I feel that the progress I built with the AI is disrupted."],
  ["WIC5", "Workflow Interruption and Context Loss", "I worry about reaching a limit before an AI agent or assistant finishes the job."],
  ["WIC6", "Workflow Interruption and Context Loss", "Context-window or conversation-length limits make me anxious during complex tasks."],
  ["PFT1", "Platform Control, Fairness, and Trust", "I feel less in control when an AI platform can change usage limits without much warning."],
  ["PFT2", "Platform Control, Fairness, and Trust", "I become frustrated when I pay for an AI plan but still cannot use it as much as I need."],
  ["PFT3", "Platform Control, Fairness, and Trust", "I want AI platforms to be more transparent about how usage limits are calculated."],
  ["PFT4", "Platform Control, Fairness, and Trust", "I feel uneasy when the same plan seems to provide different amounts of usable access at different times."],
  ["PFT5", "Platform Control, Fairness, and Trust", "I question whether AI usage limits are fair when the rules are difficult to understand."],
  ["PFT6", "Platform Control, Fairness, and Trust", "I trust an AI service less when I cannot tell how close I am to a limit."],
  ["CSW1", "Conservation, Substitution, and Workarounds", "I shorten prompts or reduce context to conserve AI usage."],
  ["CSW2", "Conservation, Substitution, and Workarounds", "I use cheaper or less capable models for tasks I consider less important."],
  ["CSW3", "Conservation, Substitution, and Workarounds", "I split tasks into smaller parts to avoid using too much AI at once."],
  ["CSW4", "Conservation, Substitution, and Workarounds", "I delay some AI tasks until my usage limit resets or my allowance renews."],
  ["CSW5", "Conservation, Substitution, and Workarounds", "I switch between AI tools or models to manage usage limits."],
  ["CSW6", "Conservation, Substitution, and Workarounds", "I sometimes do work manually because I want to save AI resources for later."],
  ["AID1", "AI Dependence and Capability Pressure", "When I cannot use AI, I feel less capable of completing certain tasks efficiently."],
  ["AID2", "AI Dependence and Capability Pressure", "I worry that limited AI access puts me at a disadvantage compared with people who have more access."],
  ["AID3", "AI Dependence and Capability Pressure", "I feel pressure to use AI because others can work faster with it."],
  ["AID4", "AI Dependence and Capability Pressure", "Once I have used a more capable AI model, it is difficult to go back to a weaker one."],
  ["AID5", "AI Dependence and Capability Pressure", "My expectations for how fast I should work have changed because of AI tools."],
  ["AID6", "AI Dependence and Capability Pressure", "I worry that not having enough AI access could affect my academic or professional performance."],
  ["EDS1", "Emotional Distress", "I feel anxious when I am close to an AI usage limit."],
  ["EDS2", "Emotional Distress", "I feel frustrated when I have to stop using AI because of a limit."],
  ["EDS3", "Emotional Distress", "I feel uneasy when I do not know whether I can afford enough AI usage for my tasks."],
  ["EDS4", "Emotional Distress", "I feel a sense of relief when my AI allowance resets or is renewed."],
  ["EDS5", "Emotional Distress", "I feel regret when an AI task uses more resources than I expected."],
  ["EDS6", "Emotional Distress", "I feel tense when deciding whether a task is worth spending AI resources on."],
];

const demoItemOrder = [
  "UBU1",
  "EDS2",
  "CSW1",
  "AID2",
  "RMA3",
  "PFT3",
  "EBS1",
  "WIC3",
  "CSW5",
  "UBU6",
  "EDS1",
  "RMA2",
  "PFT5",
  "AID5",
  "WIC1",
  "EBS5",
  "UBU3",
  "CSW2",
  "RMA5",
  "EDS6",
  "PFT1",
  "EBS2",
  "AID1",
  "WIC4",
];

const demoItems = demoItemOrder
  .map((id) => coreItems.find((item) => item[0] === id))
  .filter(Boolean);

const dimensionGrid = document.querySelector("#dimensionGrid");
const filter = document.querySelector("#dimensionFilter");
const tableBody = document.querySelector("#itemsTableBody");
const demoForm = document.querySelector("#tasDemoForm");
const scoreDemoButton = document.querySelector("#scoreDemo");
const clearDemoButton = document.querySelector("#clearDemo");
const demoError = document.querySelector("#demoError");
const questionnaireProgress = document.querySelector("#questionnaireProgress");
const demoResults = document.querySelector("#demoResults");
const profileTitle = document.querySelector("#profileTitle");
const profileSummary = document.querySelector("#profileSummary");
const totalScore = document.querySelector("#totalScore");
const topDimension = document.querySelector("#topDimension");
const lowDimension = document.querySelector("#lowDimension");
const dimensionBars = document.querySelector("#dimensionBars");
const resultExplanation = document.querySelector("#resultExplanation");

const profileDefinitions = {
  "Resource Monitoring and Anticipatory Concern": {
    title: "The Resource Monitor",
    summary:
      "Your profile suggests that the most salient part of token anxiety is anticipatory monitoring: checking, tracking, and mentally budgeting AI access before or during work.",
  },
  "Unpredictability and Black-Box Usage": {
    title: "The Black-Box Sensitive User",
    summary:
      "Your profile suggests that unclear or hard-to-predict usage rules are especially stressful. Better cost estimates, clearer counters, and more transparent limits would likely matter to you.",
  },
  "Economic Burden and Spend Inhibition": {
    title: "The Cost-Conscious AI User",
    summary:
      "Your profile suggests that cost and plan value strongly shape how freely you use AI. You may hesitate to explore when usage feels expensive or hard to justify.",
  },
  "Workflow Interruption and Context Loss": {
    title: "The Flow-Protection User",
    summary:
      "Your profile suggests that the biggest concern is interruption: losing momentum, context, or continuity when a limit appears in the middle of meaningful work.",
  },
  "Platform Control, Fairness, and Trust": {
    title: "The Fairness-and-Transparency Seeker",
    summary:
      "Your profile suggests that trust depends heavily on whether AI products make limits feel stable, explainable, and fair.",
  },
  "Conservation, Substitution, and Workarounds": {
    title: "The AI Resource Strategist",
    summary:
      "Your profile suggests that you actively manage scarce AI resources by switching models, shortening context, delaying tasks, or saving stronger tools for harder work.",
  },
  "AI Dependence and Capability Pressure": {
    title: "The Capability-Pressure User",
    summary:
      "Your profile suggests that limited AI access feels tied to performance, speed, or competitive disadvantage compared with people who have more access.",
  },
  "Emotional Distress": {
    title: "The Emotionally Activated User",
    summary:
      "Your profile suggests that usage limits are not just a planning issue; they are emotionally charged, producing anxiety, frustration, regret, tension, or relief after reset.",
  },
};

function renderDimensions() {
  dimensionGrid.innerHTML = dimensions
    .map(
      (dimension, index) => `
        <article class="dimension-card">
          <span>${dimension.id} · ${String(index + 1).padStart(2, "0")}</span>
          <h3>${dimension.name}</h3>
          <p>${dimension.summary}</p>
        </article>
      `,
    )
    .join("");
}

function setupFilter() {
  dimensions.forEach((dimension) => {
    const option = document.createElement("option");
    option.value = dimension.name;
    option.textContent = dimension.name;
    filter.appendChild(option);
  });
}

function renderItems(selected = "all") {
  const items =
    selected === "all"
      ? coreItems
      : coreItems.filter((item) => item[1] === selected);

  tableBody.innerHTML = items
    .map(
      ([id, dimension, text]) => `
        <tr>
          <td>${id}</td>
          <td>${dimension}</td>
          <td>${text}</td>
        </tr>
      `,
    )
    .join("");
}

function renderQuestionnaire() {
  if (!demoForm) return;

  demoForm.innerHTML = demoItems
    .map(([id, dimension, text], index) => {
      const options = [1, 2, 3, 4, 5, 6, 7]
        .map(
          (value) => `
            <label class="likert-option" title="${value}">
              <input type="radio" name="${id}" value="${value}" aria-label="${id} response ${value}" />
              <span>${value}</span>
            </label>
          `,
        )
        .join("");
      const reminder =
        index % 6 === 0
          ? `
            <div class="scale-reminder">
              <span class="scale-reminder-label">Scale guide</span>
              <div class="scale-guide" aria-label="Response scale guide">
                <div class="scale-endpoints">
                  <span>Strongly disagree</span>
                  <span>Strongly agree</span>
                </div>
                <div class="survey-anchor-row">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                </div>
              </div>
            </div>
          `
          : "";

      return `
        ${reminder}
        <fieldset class="question-block">
          <legend class="sr-only">Question ${index + 1}</legend>
          <p class="question-text">${text}</p>
          <div class="likert-row" role="radiogroup" aria-label="${id}: ${text}">
            ${options}
          </div>
        </fieldset>
      `;
    })
    .join("");
}

function getResponses() {
  const responses = {};
  demoItems.forEach(([id]) => {
    const selected = demoForm?.querySelector(`input[name="${id}"]:checked`);
    if (selected) responses[id] = Number(selected.value);
  });
  return responses;
}

function updateProgress() {
  if (!questionnaireProgress) return;
  const answered = Object.keys(getResponses()).length;
  questionnaireProgress.textContent = `${answered} of ${demoItems.length} answered`;
}

function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function scoreByDimension(responses, items = coreItems) {
  return dimensions.map((dimension) => {
    const values = items
      .filter((item) => item[1] === dimension.name)
      .map(([id]) => responses[id])
      .filter((value) => typeof value === "number");

    return {
      ...dimension,
      score: values.length ? mean(values) : 0,
      answered: values.length,
    };
  });
}

function getOverallLabel(score) {
  if (score < 2.5) return "Low token-anxiety signal";
  if (score < 4.5) return "Moderate token-anxiety signal";
  if (score < 5.8) return "Elevated token-anxiety signal";
  return "High token-anxiety signal";
}

function getBand(score) {
  if (score < 2.5) return "Low";
  if (score < 4.5) return "Moderate";
  if (score < 5.8) return "Elevated";
  return "High";
}

function getScoreInterpretation(score) {
  if (score < 2.5) {
    return "Your responses suggest that AI usage limits are currently a relatively low-salience stressor. You may notice limits, but they do not appear to strongly shape your emotions or workflow.";
  }
  if (score < 4.5) {
    return "Your responses suggest a moderate token-anxiety signal. AI usage limits matter to you in some situations, but the concern appears uneven rather than globally intense.";
  }
  if (score < 5.8) {
    return "Your responses suggest an elevated token-anxiety signal. Usage limits, costs, or resource uncertainty may meaningfully shape how you plan, ration, or emotionally experience AI work.";
  }
  return "Your responses suggest a high token-anxiety signal. AI usage resources may feel strongly tied to continuity, control, cost, or performance pressure in your current workflow.";
}

function renderResults() {
  const responses = getResponses();
  const answered = Object.keys(responses).length;

  if (answered < demoItems.length) {
    demoError.textContent = `Please answer all ${demoItems.length} items before generating a profile. You have answered ${answered}.`;
    demoResults.hidden = true;
    return;
  }

  demoError.textContent = "";
  const scoredDimensions = scoreByDimension(responses, demoItems);
  const overall = mean(Object.values(responses));
  const sorted = [...scoredDimensions].sort((a, b) => b.score - a.score);
  const highest = sorted[0];
  const lowest = sorted[sorted.length - 1];
  const profile = profileDefinitions[highest.name];

  totalScore.textContent = overall.toFixed(2);
  profileTitle.textContent = `${getOverallLabel(overall)} · ${profile.title}`;
  profileSummary.textContent = profile.summary;
  topDimension.textContent = `${highest.name} (${highest.score.toFixed(2)} / 7). This is the dimension most shaping your prototype profile.`;
  lowDimension.textContent = `${lowest.name} (${lowest.score.toFixed(2)} / 7). This appears less central in your current response pattern.`;
  resultExplanation.innerHTML = `
    <h4>How to read this result</h4>
    <p>${getScoreInterpretation(overall)}</p>
    <p>The profile title is based on your highest-scoring dimension, while the overall signal is the mean across this 24-item experience version.</p>
  `;

  dimensionBars.innerHTML = scoredDimensions
    .map((dimension) => {
      const width = `${((dimension.score - 1) / 6) * 100}%`;
      const isHighest = dimension.name === highest.name;
      const isLowest = dimension.name === lowest.name;
      return `
        <div class="bar-row ${isHighest ? "is-highest" : ""} ${isLowest ? "is-lowest" : ""}">
          <span class="bar-label">${dimension.name}<small>${getBand(dimension.score)}</small></span>
          <span class="bar-track" aria-hidden="true">
            <span class="bar-fill" style="width: ${width}"></span>
          </span>
          <span class="bar-score">${dimension.score.toFixed(2)}</span>
        </div>
      `;
    })
    .join("");

  demoResults.hidden = false;
  demoResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearQuestionnaire() {
  demoForm?.reset();
  demoError.textContent = "";
  if (demoResults) demoResults.hidden = true;
  updateProgress();
}

filter.addEventListener("change", (event) => {
  renderItems(event.target.value);
});

renderDimensions();
setupFilter();
renderItems();
renderQuestionnaire();
updateProgress();

demoForm?.addEventListener("change", updateProgress);
scoreDemoButton?.addEventListener("click", renderResults);
clearDemoButton?.addEventListener("click", clearQuestionnaire);
