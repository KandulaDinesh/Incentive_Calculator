function calculate() {
  let pipe = parseFloat(document.getElementById("pipe").value);
  let achieved = parseFloat(document.getElementById("achieved").value);

  if (isNaN(pipe) || isNaN(achieved) || pipe <= 0) {
    document.getElementById("result").innerHTML = "<p style='color:red'>⚠️ Please enter valid numbers.</p>";
    document.getElementById("breakdown").innerHTML = "";
    return;
  }

  let percent = (achieved / pipe) * 100;
  let finalPercent = 0;
  let steps = [];

  // Apply slabs with breakdown
  if (percent <= 70) {
    finalPercent = percent * 0.8;
    steps.push(`${percent.toFixed(2)}% × 0.8 = ${finalPercent.toFixed(2)}%`);
  } else if (percent <= 100) {
    let first = 70 * 0.8;
    let second = (percent - 70) * 1.5;
    finalPercent = first + second;
    steps.push(`70% × 0.8 = ${first.toFixed(2)}%`);
    steps.push(`${(percent - 70).toFixed(2)}% × 1.5 = ${second.toFixed(2)}%`);
  } else {
    let first = 70 * 0.8;
    let second = 30 * 1.5;
    let third = (percent - 100) * 2;
    finalPercent = first + second + third;
    steps.push(`70% × 0.8 = ${first.toFixed(2)}%`);
    steps.push(`30% × 1.5 = ${second.toFixed(2)}%`);
    steps.push(`${(percent - 100).toFixed(2)}% × 2 = ${third.toFixed(2)}%`);
  }

  // Show results
  document.getElementById("result").innerHTML = `
    <p>📊 Percentage Achieved: <span class="highlight">${percent.toFixed(2)}%</span></p>
    <p>🏆 Final Percentage (with slabs): <span class="highlight">${finalPercent.toFixed(2)}%</span></p>
  `;

  // Show breakdown
  document.getElementById("breakdown").innerHTML = `
    <h4>Calculation Breakdown:</h4>
    <ul>${steps.map(step => `<li>${step}</li>`).join("")}</ul>
  `;
}
