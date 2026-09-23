"use strict";
// Goal matching is transparent guidance, not a workout prescription.
// Edit the text here when the finder needs to explain a different direction.
const paths = {
  athletic: {
    title: "Athletic performance",
    description:
      "Your goal points toward speed, power, and strength that support your sport. Coaching can balance gym work with practices and competition.",
  },
  strongman: {
    title: "Strongman training",
    description:
      "Your goal points toward event preparation: carries, presses, pulls, grip, and bracing. The events you want to train for help set the direction.",
  },
  powerlifting: {
    title: "Powerlifting",
    description:
      "Your goal points toward squat, bench press, and deadlift development, with technique practice and measurable progression.",
  },
  fitness: {
    title: "Everyday strength",
    description:
      "Your goal points toward foundational strength, movement quality, and work capacity that support everyday life.",
  },
};
const form = document.querySelector("#path-form");
const result = document.querySelector("#path-result");
let summary = "";

// Build a recommendation from the visitor's answers without sending data away.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = new FormData(form);
  const goal = values.get("goal");
  const path = paths[goal];
  const equipment = values.get("equipment");
  let context = `You have ${values.get("days")} days available each week. `;
  context +=
    values.get("experience") === "new"
      ? "Start the conversation with technique, manageable training demands, and support as you build consistency. "
      : "Bring your recent training history so we can discuss progression and what is limiting your results. ";
  if (equipment === "home")
    context +=
      "Your equipment list will help identify suitable exercises and whether gym access would support your goal.";
  else if (goal === "strongman" && equipment !== "events")
    context +=
      "A standard gym can support strength development; discuss access to event equipment for specific practice.";
  else
    context +=
      "Discuss how your available equipment can support this direction.";
  document.querySelector("#result-title").textContent = path.title;
  document.querySelector("#result-description").textContent = path.description;
  document.querySelector("#result-context").textContent = context;
  summary = `${path.title}\n${path.description}\n${context}`;
  document.querySelector("#copy-status").textContent = "";
  result.hidden = false;
});
// Clear stale guidance whenever the visitor changes their answers.
form.addEventListener("change", () => {
  result.hidden = true;
  summary = "";
});

// Program cards jump to the finder and preselect the matching goal.
document.querySelectorAll("[data-goal]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#goal").value = link.dataset.goal;
    result.hidden = true;
    summary = "";
  });
});

// Let visitors copy the recommendation into the consultation form.
document.querySelector("#copy-summary").addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText(summary);
    status.textContent =
      "Copied. Paste your summary into the consultation form.";
  } catch {
    status.textContent =
      "Copy is unavailable in this browser. Select and copy the summary above.";
  }
});
// No autoplay: the visitor chooses each clip and when it plays.
const videos = [
  { src: "videos/Squat.mp4", label: "Squat" },
  { src: "videos/Max-log.mp4", label: "Log press" },
  { src: "videos/Raw-squat.mp4", label: "Raw squat" },
  { src: "videos/Silver-dollar.mp4", label: "Silver dollar deadlift" },
];
const player = document.querySelector("#rotating-video");
const videoStatus = document.querySelector("#video-status");

// Playlist buttons swap the source and keep the selected state accessible.
document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => {
    const video = videos[Number(button.dataset.video)];
    player.pause();
    player.src = video.src;
    player.setAttribute("aria-label", `${video.label} training footage`);
    document
      .querySelectorAll("[data-video]")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    videoStatus.textContent = `${video.label} selected. Press play when you’re ready.`;
    player.load();
  });
});
player.addEventListener("error", () => {
  videoStatus.textContent =
    "This video could not be loaded. Try another lift or view training on Instagram.";
});
