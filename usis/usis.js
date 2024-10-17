document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'http://4.227.165.27:5001/data';
    fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
        return response.json();
    })
    .then(jsonData => {
        populateTable(jsonData);
    })
    .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    });

    const tableBody = document.querySelector("#data-table tbody");
    const searchInput = document.querySelector("#search");

    function populateTable(data) {
    tableBody.innerHTML = "";
    data.rows.forEach((row) => {
        const tr = document.createElement("tr");
        row.cell.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
    }

    function filterTable(query) {
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        let match = false;
        cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(query.toLowerCase())) {
            match = true;
        }
        });
        row.style.display = match ? "" : "none";
    });
    }
    // populateTable(jsonData);


    searchInput.addEventListener("keyup", () => {
      filterTable(searchInput.value);
    });
  });
  