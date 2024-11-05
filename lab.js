const data = {
  SAT: {
    "8:00 AM": [
      "12F-32L",
      "09F-25L",
      "FT10-03L",
      "10G-32L",
      "09F-27L",
      "FT11-04L",
      "12F-31L",
      "12D-26L",
      "12B-20L",
    ],
    "11:00 AM": [
      "FT10-02L",
      "10G-32L",
      "09F-27L",
      "FT11-04L",
      "12F-31L",
      "09B-10L",
    ],
    "2:00 PM": [
      "12D-27L",
      "10G-33L",
      "09F-27L",
      "10G-32L",
      "FT10-03L",
      "FT11-04L",
      "12F-30L",
    ],
  },
  SUN: {
    "8:00 AM": ["FT11-04L", "12F-31L"],
    "11:00 AM": ["FT10-01L", "12F-31L", "09B-08L"],
    "2:00 PM": ["12B-20L", "FT10-03L", "10G-34L"],
  },
  MON: {
    "8:00 AM": [
      "12D-27L",
      "10G-33L",
      "FT10-03L",
      "FT11-04L",
      "12F-30L",
      "09B-08L",
    ],
    "11:00 AM": ["12F-32L", "10G-32L", "FT08-04L", "12F-31L", "12B-20L"],
    "2:00 PM": ["10G-34L", "FT10-02L", "FT11-04L", "09B-08L"],
  },
  TUE: {
    "8:00 AM": [
      "12F-32L",
      "09F-25L",
      "10G-32L",
      "09F-27L",
      "10G-33L",
      "FT11-04L",
      "12F-31L",
      "12D-26L",
    ],
    "11:00 AM": ["09B-09L", "FT10-03L", "FT11-04L", "12F-31L", "12B-20L"],
    "2:00 PM": [
      "12F-32L",
      "12D-27L",
      "09B-09L",
      "FT10-02L",
      "10G-33L",
      "09F-27L",
      "FT11-04L",
    ],
  },
  WED: {
    "8:00 AM": [
      "10G-34L",
      "09E-21L",
      "10G-33L",
      "FT08-04L",
      "FT11-04L",
      "09B-10L",
      "12F-31L",
      "12D-26L",
      "09F-26L",
    ],
    "11:00 AM": ["10G-34L", "FT10-02L", "09E-21L", "10G-33L", "FT11-04L"],
    "2:00 PM": ["10G-34L", "10G-33L", "FT11-04L", "09B-08L", "12B-20L"],
  },
  THU: {
    "8:00 AM": [
      "12F-32L",
      "12D-27L",
      "09F-25L",
      "09E-21L",
      "FT10-01L",
      "09B-11L",
      "10G-34L",
      "10G-32L",
      "10G-33L",
      "FT11-04L",
      "12F-30L",
      "12D-26L",
    ],
    "11:00 AM": [
      "12D-27L",
      "FT10-01L",
      "09E-21L",
      "10G-33L",
      "FT11-04L",
      "12F-30L",
      "12D-26L",
    ],
    "2:00 PM": [
      "FT10-02L",
      "09B-11L",
      "FT10-03L",
      "10G-32L",
      "10G-33L",
      "FT11-04L",
      "09F-24L",
      "12F-30L",
      "09B-10L",
    ],
  },
};
const daySelect = document.getElementById("day");
const timeSelect = document.getElementById("time");
const resultDiv = document.getElementById("result");
const form = document.getElementById("inpform");
// let stat = false;

function displayResult() {
  // stat = true;
  const selectedDay = daySelect.value;
  const selectedTime = timeSelect.value;

  if (data[selectedDay] && data[selectedDay][selectedTime]) {
    const result = data[selectedDay][selectedTime];

    const ul = document.createElement("ul");
    result.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    resultDiv.innerHTML = "";
    resultDiv.appendChild(ul);
  } else {
    resultDiv.innerHTML = "No data available for the selected day and time.";
  }
}

displayResult();

daySelect.addEventListener("change", displayResult);
timeSelect.addEventListener("change", displayResult);
// form.addEventListener('submit', displayResult);
