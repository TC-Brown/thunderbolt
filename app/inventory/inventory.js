let inventory = JSON.parse(localStorage.getItem('kitchenInv')) || [];

function toggleInputs() {
    const loc = document.getElementById('location').value;
    const binInput = document.getElementById('bins');
    binInput.style.display = (loc === 'Walk-in') ? 'block' : 'none';
}

function addItem() {
    const item = {
        id: Date.now(),
        name: document.getElementById('itemName').value,
        location: document.getElementById('location').value,
        bins: parseInt(document.getElementById('bins').value) || 0,
        cases: parseInt(document.getElementById('cases').value) || 0,
        bags: parseInt(document.getElementById('bags').value) || 0
    };

    if(!item.name) return alert("Enter an item name!");
    
    inventory.push(item);
    saveAndRender();
    clearForm();
}

function saveAndRender() {
    localStorage.setItem('kitchenInv', JSON.stringify(inventory));
    renderTables();
}

function renderTables() {
    const container = document.getElementById('inventoryDisplay');
    const locations = ['Freezer', 'Walk-in', 'Wing'];
    
    container.innerHTML = locations.map(loc => {
        const items = inventory.filter(i => i.location === loc);
        return `
            <h3>${loc}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        ${loc === 'Walk-in' ? '<th>Bins</th>' : ''}
                        <th>Cases</th>
                        <th>Bags</th>
                        <th>Action</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(i => `
                        <tr>
                            <td>${i.name}</td>
                            ${loc === 'Walk-in' ? `<td>${i.bins}</td>` : ''}
                            <td>${i.cases}</td>
                            <td>${i.bags}</td>
                            <td><button onclick="deleteItem(${i.id})" style="background:#e74c3c">X</button></td>
                            <td>1</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }).join('');
}

function deleteItem(id) {
    inventory = inventory.filter(i => i.id !== id);
    saveAndRender();
}

function clearForm() {
    document.getElementById('itemName').value = '';
    document.getElementById('bins').value = '';
    document.getElementById('cases').value = '';
    document.getElementById('bags').value = '';
}

// Initial Load
toggleInputs();
renderTables();