const data = {
  "MON": {
      "11:00 AM": [
          "09F-27L",
          "10E-26L",
          "10G-32L",
          "12B-20L",
          "FT10-04L",
          "FT11-01L"
      ],
      "2:00 PM": [
          "10G-32L",
          "10G-33L",
          "10G-34L",
          "12D-27L",
          "12F-31L",
          "12F-32L",
          "FT08-04L",
          "FT10-03L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "09F-25L",
          "10G-32L",
          "12D-26L",
          "12F-31L",
          "FT10-02L",
          "FT11-01L"
      ]
  },
  "SAT": {
      "11:00 AM": [
          "09F-26L",
          "10E-26L",
          "10G-32L",
          "12B-20L",
          "12D-26L",
          "12D-27L",
          "12F-31L",
          "12F-32L",
          "FT10-01L",
          "FT10-04L"
      ],
      "2:00 PM": [
          "09F-25L",
          "09F-27L",
          "10E-26L",
          "10G-32L",
          "12D-26L",
          "12D-27L",
          "12F-31L",
          "12F-32L",
          "FT08-04L",
          "FT10-03L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "09B-10L",
          "09E-22L",
          "09F-25L",
          "10E-26L",
          "10G-32L",
          "12D-27L",
          "12F-32L",
          "FT10-02L",
          "FT11-01L"
      ]
  },
  "SUN": {
      "11:00 AM": [
          "10E-26L",
          "10G-32L",
          "12F-32L",
          "FT10-01L",
          "FT10-03L",
          "FT10-04L",
          "FT11-01L"
      ],
      "2:00 PM": [
          "09B-09L",
          "09F-25L",
          "10E-26L",
          "FT08-04L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "12D-27L",
          "12F-32L",
          "FT08-04L",
          "FT10-02L",
          "FT10-04L",
          "FT11-01L"
      ]
  },
  "THU": {
      "11:00 AM": [
          "09B-10L",
          "09F-24L",
          "10E-26L",
          "10G-32L",
          "10G-33L",
          "12D-26L",
          "12D-27L",
          "12F-32L",
          "FT10-01L",
          "FT11-01L"
      ],
      "2:00 PM": [
          "09F-24L",
          "09F-25L",
          "09F-27L",
          "10E-26L",
          "10G-32L",
          "10G-33L",
          "12D-26L",
          "12D-27L",
          "12F-32L",
          "FT10-03L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "09B-08L",
          "09B-10L",
          "10E-26L",
          "10G-32L",
          "10G-33L",
          "10G-34L",
          "12B-20L",
          "12D-27L",
          "12F-32L",
          "FT08-04L",
          "FT10-02L",
          "FT11-01L"
      ]
  },
  "TUE": {
      "11:00 AM": [
          "10E-27L",
          "12B-20L",
          "12F-32L",
          "FT11-01L"
      ],
      "2:00 PM": [
          "10G-34L",
          "12D-27L",
          "FT10-02L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "10E-26L",
          "10G-32L",
          "12F-32L",
          "FT08-04L",
          "FT10-03L",
          "FT11-01L"
      ]
  },
  "WED": {
      "11:00 AM": [
          "09F-25L",
          "12D-27L",
          "12F-32L",
          "FT10-01L",
          "FT10-03L",
          "FT11-01L"
      ],
      "2:00 PM": [
          "10G-32L",
          "10G-34L",
          "12D-27L",
          "12F-32L",
          "FT10-02L",
          "FT11-01L"
      ],
      "8:00 AM": [
          "09B-10L",
          "10E-26L",
          "10E-27L",
          "12B-20L",
          "12D-26L",
          "12D-27L",
          "12F-32L",
          "FT08-04L",
          "FT11-01L"
      ]
  }
}
;


const daySelect = document.getElementById('day');
const timeSelect = document.getElementById('time');
const resultDiv = document.getElementById('result');
const form = document.getElementById('inpform'); 
let stat = false;

function displayResult() {
    stat = true;
    const selectedDay = daySelect.value;
    const selectedTime = timeSelect.value;


    if (data[selectedDay] && data[selectedDay][selectedTime]) {

        const result = data[selectedDay][selectedTime];


        const ul = document.createElement('ul');
        result.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });


        resultDiv.innerHTML = '';
        resultDiv.appendChild(ul);
    } else {
        resultDiv.innerHTML = 'No data available for the selected day and time.';
    }
}

if (stat)  {
  displayResult();
}


// daySelect.addEventListener('change', displayResult);
// timeSelect.addEventListener('change', displayResult);
form.addEventListener('submit', displayResult);