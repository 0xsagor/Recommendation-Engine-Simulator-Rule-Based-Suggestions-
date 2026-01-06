const items = [
  { name: "AI News Feed", tags: ["tech"] },
  { name: "Stock Market Tracker", tags: ["finance"] },
  { name: "Fitness Planner", tags: ["health"] },
  { name: "UI Design Kit", tags: ["design"] },
  { name: "Startup Analytics Tool", tags: ["tech", "finance"] }
];

function recommend() {
  const selected = Array.from(document.querySelectorAll("input:checked"))
    .map(i => i.value);

  const results = document.getElementById("results");
  results.innerHTML = "";

  if (!selected.length) return;

  const scored = items.map(item => {
    const score = item.tags.filter(t => selected.includes(t)).length;
    return { ...item, score };
  });

  scored
    .filter(i => i.score > 0)
    .sort((a, b) => b.score - a.score)
    .forEach(i => {
      const li = document.createElement("li");
      li.innerText = `${i.name} (score: ${i.score})`;
      results.appendChild(li);
    });
}
