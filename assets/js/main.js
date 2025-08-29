import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

// Initialize menu, scroll reveal, and typewriter effect
menu();
initScrollReveal();
typeWrite(document.querySelector("#typewriter"));

// Custom cursor (transparent circle)
function setCursorCircle() {
  const cursorCircle = document.createElement("div");
  cursorCircle.classList.add("cursor-circle");
  document.body.appendChild(cursorCircle);

  document.addEventListener("mousemove", (event) => {
    cursorCircle.style.left = event.clientX + "px";
    cursorCircle.style.top = event.clientY + "px";
  });

  document.addEventListener("mouseenter", () => {
    cursorCircle.style.display = "block";
  });

  document.addEventListener("mouseleave", () => {
    cursorCircle.style.display = "none";
  });
}
setCursorCircle();

// ================= EDUCATION SECTION =================
hoverChangeExperience(
  ".zuplae", // <-- Your education item class in index.html
  `From 2020 to 2024, I attended RMK College of Engineering & Technology, pursuing a B.Tech in AI & Data Science. 
  This period enriched my academic excellence, leadership, and collaborative teamwork.`,
  "Educational Background",
  "RMK College of Engineering & Technology",
  "2020 - 2024"
);

// ================= EXPERIENCE SECTION =================
hoverChangeExperience(
  ".zuplae", // <-- Example class used in your Experience section
  `Worked on building and deploying ML pipelines for classification tasks, optimizing model performance, and creating dashboards to communicate results.`,
  "Machine Learning Intern",
  "Example Company",
  "Jun 2023 - Dec 2023"
);

// ================= SKILLS SECTION =================
hoverChangeDescription(
  ".python",
  "Python is a versatile programming language widely used for AI, data science, and automation."
);
hoverChangeDescription(
  ".SQL",
  "SQL is a language designed for managing and querying relational databases efficiently."
);
hoverChangeDescription(
  ".data",
  "Data analysis involves inspecting, cleaning, and modeling data to discover useful insights."
);
hoverChangeDescription(
  ".numpy",
  "NumPy is a Python library for numerical computing, enabling fast matrix and array operations."
);
hoverChangeDescription(
  ".pandas",
  "Pandas is a Python library that provides data structures and analysis tools for handling structured data."
);
hoverChangeDescription(
  ".pytorch",
  "PyTorch is an open-source deep learning framework widely used for building neural networks."
);
hoverChangeDescription(
  ".webs",
  "Web development involves creating and maintaining websites and web applications."
);
hoverChangeDescription(
  ".seaborn",
  "Seaborn is a Python data visualization library based on matplotlib, optimized for statistical graphics."
);
