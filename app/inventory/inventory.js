let inventory = JSON.parse(localStorage.getItem('kitchenInv')) || [];
// Toggle inputs based on location
function toggleInputs() {
    const loc = document.getElementById('location').value;
    const binInput = document.getElementById('bins');
    const casesInput = document.getElementById('cases');
    const bagsInput = document.getElementById('bags');

    binInput.style.display = (loc === 'Walk-in') ? 'block' : 'none';
    casesInput.style.display = (loc === 'Wing') ? 'none' : 'block';
    bagsInput.style.display = 'block';
}
// Add item to inventory
function addItem() {
    const itemName = document.getElementById('itemName').value;
    const bagValue = parseInt(document.getElementById('bags').value) || 0;

    const item = {
        id: Date.now(),
        name: document.getElementById('itemName').value,
        location: document.getElementById('location').value,
        bins: (parseInt(document.getElementById('bins').value) || 0) * 6,
        cases: parseInt(document.getElementById('cases').value) || 0,
        bags: itemName === 'Chicken' ? (praseInt(document.getElementById('bags').value) || 0) * 2.5 : bagValue,
    };

    if (!item.name) return alert("Enter an item name!");

    inventory.push(item);
    saveAndRender();
    clearForm();
}
// Save and render
function saveAndRender() {
    localStorage.setItem('kitchenInv', JSON.stringify(inventory));
    renderTables();
}
// Render tables
function renderTables() {
    const container = document.getElementById('inventoryDisplay');
    const locations = ['Freezer', 'Walk-in', 'Wing'];

    container.innerHTML = locations.map(loc => {
        const items = inventory.filter(i => i.location === loc);
        return `
            <h3>${loc}</h3>
            <table>
                <thead> <!-- Table headers -->
                        <tr>
                            <th>Item</th>
                            ${loc === 'Walk-in' ? '<th>Bins</th>' : ''}
                            ${loc !== 'Wing' ? '<th>Cases</th>' : ''}
                            <th>Bags</th>
                            <th>Action</th>
                            <th>Total</th>
                        </tr>
                </thead>
                <tbody> <!-- Render tables -->
                    ${items.map(i => {
            let totalStr = '';
            if (i.name === 'Chicken') {
                const chixBg = i.bags * 2.5;  // Find logic to calculate bags @ 2.5 lbs each and display the correct number when bags are added.
                const chixCs = (i.cases * 10) + chixBg;
                totalStr = `${i.cases} cs, ${i.bags} bags (Total: ${chixCs} lbs)`;
            } else {
                totalStr = `${loc !== 'Wing' ? `${i.cases} cs, ` : ''}${loc === 'Walk-in' ? `${i.bins} bins, ` : ''}${loc === 'Wing' ? `${i.bags} ind./ bags` : `${i.bags} bags`}`;
            }

            return `
                        <tr> <!-- Render table needs to display the correct number of bins, cases, and bags based on the location selected. -->
                            <td>${i.name}</td>
                            ${loc === 'Walk-in' ? `<td>${i.bins}</td>` : ''}
                            ${loc !== 'Wing' ? `<td>${i.cases}</td>` : ''}
                            <td>${i.bags}</td>
                            <td><button onclick="deleteItem(${i.id})" style="background:#e74c3c">X</button></td>
                            <td>${totalStr}</td>
                        </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }).join('');
}
// Delete item
function deleteItem(id) {
    inventory = inventory.filter(i => i.id !== id);
    saveAndRender();
}
// Clear form
function clearForm() {
    document.getElementById('itemName').value = '';
    document.getElementById('bins').value = '';
    document.getElementById('cases').value = '';
    document.getElementById('bags').value = '';
}

// Initial Load
toggleInputs();
renderTables();