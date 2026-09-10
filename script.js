// FAST STRENGTH INTERACTIONS
// Edit index.html for page content and styles.css for appearance.
// This file handles the training finder, copy button, and video choices.
// The defer attribute in index.html waits for the page elements to exist.
"use strict"; // Catch common JavaScript mistakes instead of silently ignoring them.

// 1. TRAINING DIRECTIONS
// Each key matches an HTML option value and a program link's data-goal.
// Edit title and description to change the recommendation wording.
// To add a goal, also add its option and program card in index.html.
const paths = {
    athletic: {
        title: "Athletic performance",
        description:
            "Your goal points toward speed, power, and strength that support your sport. " +
            "Coaching can balance gym work with practices and competition."
    },
    strongman: {
        title: "Strongman training",
        description:
            "Your goal points toward event preparation: carries, presses, pulls, grip, " +
            "and bracing. The events you want to train for help set the direction."
    },
    powerlifting: {
        title: "Powerlifting",
        description:
            "Your goal points toward squat, bench press, and deadlift development, " +
            "with technique practice and measurable progression."
    },
    fitness: {
        title: "Everyday strength",
        description:
            "Your goal points toward foundational strength, movement quality, " +
            "and work capacity that support everyday life."
    }
};

// A # selector finds an element by its id in index.html.
const form = document.querySelector("#path-form");
const result = document.querySelector("#path-result");

// Keep the current recommendation in memory for the copy button.
// It is not saved to a database or sent to a server.
let summary = "";

// 2. BUILD THE RECOMMENDATION
// Run when the visitor clicks "Show my starting point" or submits with Enter.
form.addEventListener("submit", (event) => {
    // Stop the browser's usual form submission and page reload.
    event.preventDefault();

    // Read the dropdown selections using their HTML name attributes.
    const values = new FormData(form);
    const goal = values.get("goal");
    const path = paths[goal];
    const equipment = values.get("equipment");

    // Backticks allow ${...} to insert a value inside a text string.
    let context = `You have ${values.get("days")} days available each week. `;

    // Add guidance appropriate to the selected experience level.
    // += appends text to the existing context string.
    if (values.get("experience") === "new") {
        context +=
            "Start the conversation with technique, manageable training demands, " +
            "and support as you build consistency. ";
    } else {
        context +=
            "Bring your recent training history so we can discuss progression " +
            "and what is limiting your results. ";
    }

    // Account for equipment limits. && means both conditions must be true.
    if (equipment === "home") {
        context +=
            "Your equipment list will help identify suitable exercises " +
            "and whether gym access would support your goal.";
    } else if (goal === "strongman" && equipment !== "events") {
        context +=
            "A standard gym can support strength development; discuss access " +
            "to event equipment for specific practice.";
    } else {
        context += "Discuss how your available equipment can support this direction.";
    }

    // Insert plain text in the result elements; textContent does not interpret HTML.
    document.querySelector("#result-title").textContent = path.title;
    document.querySelector("#result-description").textContent = path.description;
    document.querySelector("#result-context").textContent = context;

    // Combine the result for copying. Each \n creates a new line when pasted.
    summary = `${path.title}\n${path.description}\n${context}`;

    // Clear the previous copy message and reveal the previously hidden result.
    document.querySelector("#copy-status").textContent = "";
    result.hidden = false;
});

// 3. KEEP ANSWERS AND RESULTS IN SYNC
// Hide old guidance after any dropdown changes; submit again for an updated result.
form.addEventListener("change", () => {
    result.hidden = true;
    summary = "";
});

// Find every program-card shortcut. forEach attaches a handler to each link.
// dataset.goal reads its HTML data-goal attribute.
document.querySelectorAll("[data-goal]").forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector("#goal").value = link.dataset.goal;
        result.hidden = true;
        summary = "";

        // The link's normal href="#finder" behavior scrolls to the questionnaire.
    });
});

// 4. COPY THE RESULT
// async/await waits for the browser's clipboard operation to finish.
document.querySelector("#copy-summary").addEventListener("click", async () => {
    const status = document.querySelector("#copy-status");

    try {
        // Clipboard access can depend on browser permissions and a secure context.
        await navigator.clipboard.writeText(summary);
        status.textContent = "Copied. Paste your summary into the consultation form.";
    } catch {
        // Provide a useful fallback if copying is blocked or unsupported.
        status.textContent =
            "Copy is unavailable in this browser. Select and copy the summary above.";
    }
});

// 5. TRAINING VIDEO PLAYLIST
// src is the file path; label describes the clip in accessible status messages.
// HTML data-video="0" selects the first entry, "1" the second, and so on.
// When adding a video, add a matching button in index.html with the next index.
const videos = [
    {
        src: "videos/Squat.mp4",
        label: "Squat"
    },
    {
        src: "videos/Max-log.mp4",
        label: "Log press"
    },
    {
        src: "videos/Raw-squat.mp4",
        label: "Raw squat"
    },
    {
        src: "videos/Silver-dollar.mp4",
        label: "Silver dollar deadlift"
    }
];

// Reuse the video player and its visible status-message element.
const player = document.querySelector("#rotating-video");
const videoStatus = document.querySelector("#video-status");

// Attach a click handler to each playlist button.
document.querySelectorAll("[data-video]").forEach((button) => {
    button.addEventListener("click", () => {
        // Convert the button's text attribute into a numeric array index.
        const video = videos[Number(button.dataset.video)];

        // Stop the previous clip before switching to the selected file.
        player.pause();
        player.src = video.src;
        player.setAttribute("aria-label", `${video.label} training footage`);

        // Only the clicked button is selected. CSS uses aria-pressed to highlight it,
        // and assistive technology can announce this same selection state.
        document.querySelectorAll("[data-video]").forEach((item) => {
            item.setAttribute("aria-pressed", String(item === button));
        });

        // Load the new source, but let the visitor decide when to press play.
        videoStatus.textContent = `${video.label} selected. Press play when you’re ready.`;
        player.load();
    });
});

// Show a readable message if the selected media cannot be loaded.
player.addEventListener("error", () => {
    videoStatus.textContent =
        "This video could not be loaded. Try another lift or view training on Instagram.";
});
