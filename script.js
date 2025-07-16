function placeBet() {
  let amount = document.getElementById("bet-amount").value;
  document.getElementById("status-log").innerText = "Plane Flying... Bet ₹" + amount;
}

function predict(color) {
  alert("You predicted: " + color);
}

function submitWingo() {
  let result = ["Red", "Green", "Purple"];
  let random = result[Math.floor(Math.random() * result.length)];
  document.getElementById("wingo-result").innerText = "Result: " + random;
}

function startMines() {
  const grid = document.getElementById("mines-grid");
  grid.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let btn = document.createElement("button");
    btn.innerText = "?";
    btn.onclick = () => {
      btn.innerText = Math.random() > 0.3 ? "✅" : "💣";
    };
    grid.appendChild(btn);
  }
}