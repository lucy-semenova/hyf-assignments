export class Screenshot {
  constructor(id, url, image, time) {
    this.id = id;
    this.url = url;
    this.image = image;
    this.time = time;
  }

  renderPreview() {
    const container = document.getElementById("output-screenshot");

    // clear previous preview (optional)
    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "screenshot-card";

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = `Screenshot of ${this.url}`;

    const urlText = document.createElement("p");
    urlText.textContent = this.url;

    const timeText = document.createElement("p");
    timeText.textContent = `Captured at: ${new Date(this.time).toLocaleString()}`;

    card.appendChild(img);
card.appendChild(urlText);
card.appendChild(timeText);
container.appendChild(card);
  }

    renderSavedCard() {
      const container = document.getElementById("saved-screenshot");
    const card = document.createElement("div");
    card.className = "screenshot-card";

    const img = document.createElement("img");
    img.src = this.image;
    img.alt = `Screenshot of ${this.url}`;

    const urlText = document.createElement("p");
    urlText.textContent = this.url;

    const timeText = document.createElement("p");
    timeText.textContent = `Captured at: ${new Date(this.time).toLocaleString()}`;

    const visitButton = document.createElement("button");
    visitButton.type = "button";
    visitButton.textContent = "Visit";
    visitButton.addEventListener("click", () => {
      this.visitSavedUrl();
    });
      const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => card.remove());

    card.append(img, urlText, timeText, visitButton, deleteButton);
    container.appendChild(card);
  }

  visitSavedUrl() {
    window.open(this.url, "_blank");
  }
}