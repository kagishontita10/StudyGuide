// script.js

// Back arrow function
function goBack() {
  window.history.back();
}

// Search bar functionality (works on all pages)
// Search bar functionality (works on all pages)
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput") || document.getElementById("faqSearchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = searchInput.value.toLowerCase().trim();

        // Faculty keywords
        if (query.includes("commerce")) {
          window.location.href = "commerce.html";
        } else if (query.includes("engineering")) {
          window.location.href = "engineering.html";
        } else if (query.includes("law")) {
          window.location.href = "law.html";
        } else if (query.includes("medicine")) {
          window.location.href = "medicine.html";
        } else if (query.includes("education")) {
          window.location.href = "education.html";
        } else if (query.includes("humanities")) {
          window.location.href = "humanities.html";
        } else if (query.includes("science")) {
          window.location.href = "science.html";
        } else if (query.includes("it") || query.includes("information technology")) {
          window.location.href = "IT.html";

        // FAQ keywords
        } else if (query.includes("purpose")) {
          window.location.href = "faqs.html#purpose";
        } else if (query.includes("who") || query.includes("audience")) {
          window.location.href = "faqs.html#audience";
        } else if (query.includes("pay") || query.includes("free")) {
          window.location.href = "faqs.html#payment";
        } else if (query.includes("courses") || query.includes("faculties")) {
          window.location.href = "faqs.html#courses";
        } else if (query.includes("accuracy") || query.includes("reliable")) {
          window.location.href = "faqs.html#accuracy";
        } else if (query.includes("apply") || query.includes("application")) {
          window.location.href = "faqs.html#apply";
        } else if (query.includes("affiliation") || query.includes("institution")) {
          window.location.href = "faqs.html#affiliation";
        } else if (query.includes("update") || query.includes("refresh")) {
          window.location.href = "faqs.html#updates";
        } else if (query.includes("suggest") || query.includes("feedback")) {
          window.location.href = "faqs.html#suggestions";
        } else if (query.includes("mobile") || query.includes("responsive")) {
          window.location.href = "faqs.html#mobile";
        } else if (query.includes("resources") || query.includes("download")) {
          window.location.href = "faqs.html#resources";
        } else if (query.includes("educators") || query.includes("classroom")) {
          window.location.href = "faqs.html#educators";
        } else if (query.includes("contact") || query.includes("team")) {
          window.location.href = "faqs.html#contact";
        }else if (query.includes("fees") || query.includes("tuition")) {
          window.location.href = "faqs.html#fees";
        } else if (query.includes("bursaries") || query.includes("scholarships")) {
          window.location.href = "faqs.html#bursaries";
        } else if (query.includes("duration") || query.includes("years")) {
          window.location.href = "faqs.html#duration";
        } else if (query.includes("part-time") || query.includes("online")) {
          window.location.href = "faqs.html#parttime";
        } else if (query.includes("career") || query.includes("jobs")) {
          window.location.href = "faqs.html#career";
        } else if (query.includes("internships") || query.includes("practicals")) {
          window.location.href = "faqs.html#internships";
        } else if (query.includes("international") || query.includes("foreign")) {
          window.location.href = "faqs.html#international";
        } else if (query.includes("housing") || query.includes("residence")) {
          window.location.href = "faqs.html#housing";
        } else if (query.includes("support") || query.includes("services")) {
          window.location.href = "faqs.html#support";
        } else if (query.includes("exams") || query.includes("assessments")) {
          window.location.href = "faqs.html#exams";

        // Default
        } else {
          alert("No matching result found. Try again.");
        }
      }
    });
  }
});


// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  // Find or create the confirmation box
  let confirmation = document.querySelector(".confirmation");
  if (!confirmation) {
    confirmation = document.createElement("div");
    confirmation.className = "confirmation";
    form.parentNode.appendChild(confirmation);
  }

  // Set the message text
  confirmation.textContent =
    "✅ Thank you! Your query has been received. We'll contact you via your provided details.";

  // Show it
  confirmation.classList.add("show");

  // Clear the form
  form.reset();
  
  // Hide after 3 seconds with fade-out
  setTimeout(() => {
    confirmation.classList.remove("show");
  }, 3000);
});

  }
});

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
      } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
      }
    });
  }
});

