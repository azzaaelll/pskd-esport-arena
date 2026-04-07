document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wa-morph-container");
  const morphButtons = document.querySelectorAll(".wa-morph-btn");

  morphButtons.forEach(button => {
    const nameText = button.querySelector(".wa-name-label");
    nameText.textContent = button.getAttribute("data-name");

    button.addEventListener("click", function(e) {
      const isClosing = e.target.classList.contains("wa-close-morph");
      const isLinkClick = e.target.closest(".wa-content-hidden");

      if (isClosing) {
        this.classList.remove("active");
        container.classList.remove("dimmed");
        return;
      }

      if (this.classList.contains("active")) {
        if (isLinkClick) {
          const waLink = this.getAttribute("data-link");
          window.open(waLink, "_blank");
        }
        return;
      }

      container.classList.add("dimmed");
      this.classList.add("active");
    });
  });
});
