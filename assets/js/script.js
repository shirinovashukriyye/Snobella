const sortSelect = document.getElementById('sortSelect');
const itemList = document.getElementById('itemList');

// Funksiya: Siyahını sıralamaq
function sortItems() {
    const items = Array.from(itemList.getElementsByTagName('li'));
    const sortValue = sortSelect.value;

    // A-dan Z-ə sıralama
    if (sortValue === 'azToZa') {
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    }
    // Z-dan A-ya sıralama
    else if (sortValue === 'zaToAz') {
        items.sort((a, b) => b.textContent.localeCompare(a.textContent));
    }

    // Siyahını yeniləyirik
    items.forEach(item => itemList.appendChild(item));
}

// Dropdown-da seçim dəyişdikdə sıralama funksiyasını işə salırıq
sortSelect.addEventListener('change', sortItems);

// İlk sıralama (başlanğıcda A-dan Z-ə olacaq)
sortItems();