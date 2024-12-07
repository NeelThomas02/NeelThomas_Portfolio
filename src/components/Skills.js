"use client";

import { useEffect } from "react";
import Chart from "chart.js/auto";

export default function Skills() {
  useEffect(() => {
    // Function to render a skill chart
    const renderChart = (id, skill, color, percentage) => {
        const ctx = document.getElementById(id).getContext("2d");
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Skill Level", "Remaining"],
            datasets: [
              {
                label: skill,
                data: [percentage, 100 - percentage], // Skill percentage and remaining
                backgroundColor: [color, "#e0e0e0"],
                borderWidth: 0,
              },
            ],
          },
          options: {
            cutout: "75%", // Adjust the size of the donut hole
            plugins: {
              legend: { display: false },
            },
          },
        });
      };

    // Render charts for each skill
    renderChart("htmlChart", "HTML", "#F16529", 90);
    renderChart("cssChart", "CSS", "#264de4", 85);
    renderChart("jsChart", "JavaScript", "#f7df1e", 80);
    renderChart("reactChart", "React", "#61DBFB", 75);
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-chart">
            <canvas id="htmlChart"></canvas>
            <p>HTML</p>
        </div>
        <div className="skill-chart">
            <canvas id="cssChart"></canvas>
            <p>CSS</p>
        </div>
        <div className="skill-chart">
            <canvas id="jsChart"></canvas>
            <p>JavaScript</p>
        </div>
        <div className="skill-chart">
            <canvas id="reactChart"></canvas>
            <p>React</p>
        </div>
        </div>
    </section>
  );
}
