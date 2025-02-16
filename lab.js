const data = {
  SAT: {
    "8:00 AM": [
      "FT11-04L",
      "09B-11L",
      "FT11-03L",
      "12F-32L",
      "FT10-04L",
    ],
    "11:00 AM": [
      "12F-32L",
      "FT10-01L",
    ],
    "2:00 PM": [
      "FT11-03L",
      "09B-10L",
      "10G-33L",
      "FT10-03L",
    ],
  },
  SUN: {
    "8:00 AM": [
      "FT11-04L",
      "FT11-03L",
      "09E-21L",
      "FT10-03L",
      "10G-32L",
      "09F-25L",
      "FT08-04L",
      "12F-32L",
      "12F-30L",
      "12F-31L",
      "FT10-01L",
    ],
    "11:00 AM": [
      "09F-24L",
      "FT11-04L",
      "FT10-02L",
      "FT11-03L",
      "10G-32L",
      "09F-25L",
      "12F-31L",
    ],
    "2:00 PM": [
      "FT11-04L",
      "12F-31L",
      "09F-25L",
    ],
  },
  MON: {
    "8:00 AM": [
      "09F-24L",
      "10G-33L",
      "FT11-04L",
      "10G-32L",
    ],
    "11:00 AM": [
      "FT11-04L",
      "FT10-02L",
      "09F-25L",
      "FT10-04L",
    ],
    "2:00 PM": [
      "FT11-04L",
      "09E-22L",
      "FT11-03L",
      "09F-26L",
      "09F-25L",
      "12F-32L",
    ],
  },
  TUE: {
    "8:00 AM": [
      "FT11-04L",
      "12D-27L",
      "09E-22L",
      "FT11-03L",
      "09E-21L",
      "10G-33L",
      "10G-32L",
      "09F-25L",
      "FT10-04L",
    ],
    "11:00 AM": [
      "FT11-04L",
      "FT11-03L",
      "FT08-04L",
      "12F-32L",
      "12F-31L",
    ],
    "2:00 PM": [
      "FT11-04L",
      "09E-21L",
      "10G-32L",
      "12F-31L",
      "FT10-01L",
    ],
  },
  WED: {
    "8:00 AM": [
      "FT11-04L",
      "FT11-03L",
      "FT10-03L",
      "FT08-04L",
      "12F-32L",
      "12F-31L",
    ],
    "11:00 AM": [
      "09F-24L",
      "FT11-04L",
      "09E-22L",
      "FT11-03L",
      "10G-32L",
      "FT08-04L",
      "12F-31L",
    ],
    "2:00 PM": [
      "09F-24L",
      "FT11-04L",
      "FT11-03L",
      "10G-32L",
      "12F-32L",
    ],
  },
  THU: {
    "8:00 AM": [
      "FT11-04L",
      "09E-22L",
      "FT10-02L",
      "FT11-03L",
      "FT10-03L",
      "09F-25L",
      "10E-27L",
    ],
    "11:00 AM": [
      "FT11-04L",
      "09B-11L",
      "09E-22L",
      "FT10-02L",
      "FT11-03L",
      "10G-33L",
      "09F-25L",
      "12F-32L",
    ],
    "2:00 PM": [
      "FT11-04L",
      "09E-22L",
      "FT11-03L",
      "09E-21L",
      "10G-32L",
      "09F-25L",
    ],
  },
}
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
