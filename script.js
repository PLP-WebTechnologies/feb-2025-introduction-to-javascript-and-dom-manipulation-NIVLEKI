// Function to change the text content of the paragraph
function changeText() {
    const desc = document.getElementById("description");
    desc.textContent = "Nivlek Solutions: Empowering Businesses Through Innovation!";
    desc.style.color = "crimson";
    desc.style.fontWeight = "bold";
  }
  
  // Function to toggle (add or remove) the box
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "box";
      newBox.textContent = "This is a box where I will place the nivlek solutions image!";
      container.appendChild(newBox);
    }
  }
  