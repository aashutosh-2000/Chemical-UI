// Sample data of chemicals
const chemicalData = [
    { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, name: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
    { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
    // Add more rows here as required
];

// Populate the table on page load
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('chemicalBody');
    chemicalData.forEach(chemical => {
        let row = createRow(chemical);
        tableBody.appendChild(row);
    });
});

function createRow(chemical) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${chemical.id}</td>
        <td>${chemical.name}</td>
        <td>${chemical.vendor}</td>
        <td>${chemical.density.toFixed(2)}</td>
        <td>${chemical.viscosity.toFixed(2)}</td>
        <td>${chemical.packaging}</td>
        <td>${chemical.packSize}</td>
        <td>${chemical.unit}</td>
        <td>${chemical.quantity.toFixed(2)}</td>
    `;
    return tr;
}


function sortTable(columnIndex) {
    const table = document.getElementById('chemicalTable');
    let rows = Array.from(table.rows).slice(1); 
    let isAscending = table.rows[0].cells[columnIndex].getAttribute('data-order') === 'asc';
    rows.sort((row1, row2) => {
        let cell1 = row1.cells[columnIndex].innerText;
        let cell2 = row2.cells[columnIndex].innerText;
        if (!isNaN(cell1) && !isNaN(cell2)) {
            return isAscending ? cell1 - cell2 : cell2 - cell1;
        } else {
            return isAscending ? cell1.localeCompare(cell2) : cell2.localeCompare(cell1);
        }
    });
    isAscending = !isAscending;
    table.rows[0].cells[columnIndex].setAttribute('data-order', isAscending ? 'asc' : 'desc');
    rows.forEach(row => table.appendChild(row));
}


document.getElementById('addRowBtn').addEventListener('click', () => {
    const tableBody = document.getElementById('chemicalBody');
    
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>  <!-- Auto increment ID -->
        <td contenteditable="true">New Chemical</td>
        <td contenteditable="true">New Vendor</td>
        <td contenteditable="true">0.00</td>
        <td contenteditable="true">0.00</td>
        <td contenteditable="true">N/A</td>
        <td contenteditable="true">0.00</td>
        <td contenteditable="true">kg</td>
        <td contenteditable="true">0.00</td>
    `;
    
    tableBody.appendChild(newRow);
});


document.getElementById('deleteRowBtn').addEventListener('click', () => {
    const tableBody = document.getElementById('chemicalBody');
    const selectedRow = document.querySelector('.active-row');

    if (selectedRow) {
        tableBody.removeChild(selectedRow);
    } else {
        alert("Please select a row to delete.");
    }
});

document.querySelectorAll('#chemicalBody tr').forEach(row => {
    row.addEventListener('click', function() {
        document.querySelectorAll('#chemicalBody tr').forEach(r => r.classList.remove('active-row'));
        this.classList.add('active-row');
    });
});



document.getElementById('saveBtn').addEventListener('click', () => {
    const tableBody = document.getElementById('chemicalBody');
    const rows = tableBody.querySelectorAll('tr');
    const tableData = [];

    rows.forEach(row => {
        const columns = row.querySelectorAll('td');
        const rowData = {
            id: columns[0].innerText,
            name: columns[1].innerText,
            vendor: columns[2].innerText,
            density: parseFloat(columns[3].innerText) || 0,
            viscosity: parseFloat(columns[4].innerText) || 0,
            packaging: columns[5].innerText,
            packSize: parseFloat(columns[6].innerText) || 0,
            unit: columns[7].innerText,
            quantity: parseFloat(columns[8].innerText) || 0
        };
        tableData.push(rowData);
    });

    console.log(JSON.stringify(tableData));

    localStorage.setItem('chemicalTableData', JSON.stringify(tableData));

    alert('Table data has been saved!');
});

