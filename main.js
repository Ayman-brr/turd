const pins = [
    { id: 1, imageUrl: './images/100_layers_of_shova.jpg', title: '100_layers_of_shova', description: '' },
    { id: 2, imageUrl: './images/adeeb_own_bully.jpg', title: 'adeeb_own_bully', description: '' },
    { id: 3, imageUrl: './images/afsheen_retard.jpg', title: 'afsheen_retard', description: '' },
    { id: 4, imageUrl: './images/ahyan_sigma_korbe.jpg', title: 'ahyan_sigma_korbe', description: '' },
    { id: 5, imageUrl: './images/araf_takku.jpg', title: 'araf_takku', description: '' },
    { id: 6, imageUrl: './images/ariyan_own_bully.jpg', title: 'ariyan_own_bully', description: '' },
    { id: 7, imageUrl: './images/arko_own_bully.jpg', title: 'arko_own_bully', description: '' },
    { id: 8, imageUrl: './images/atif_own_bully.jpg', title: 'atif_own_bully', description: '' },
    { id: 9, imageUrl: './images/ayaz_own_bully.jpg', title: 'ayaz_own_bully', description: '' },
    { id: 10, imageUrl: './images/ayman_default_pose.jpg', title: 'ayman_default_pose', description: '' },
    { id: 11, imageUrl: './images/ayman_gelo_palay.jpg', title: 'ayman_gelo_palay', description: '' },
    { id: 12, imageUrl: './images/ayman_own_bully.jpg', title: 'ayman_own_bully', description: '' },
    { id: 13, imageUrl: './images/baby_ruwayed.jpg', title: 'baby_ruwayed', description: '' },
    { id: 14, imageUrl: './images/boshir_own_bully.jpg', title: 'boshir_own_bully', description: '' },
    { id: 15, imageUrl: './images/chud_gaye_guru.jpg', title: 'chud_gaye_guru', description: '' },
    { id: 16, imageUrl: './images/elham_own_bully.jpg', title: 'elham_own_bully', description: '' },
    { id: 17, imageUrl: './images/enan_happy.jpg', title: 'enan_happy', description: '' },
    { id: 18, imageUrl: './images/faiyaz_own_bully.jpg', title: 'faiyaz_own_bully', description: '' },
    { id: 19, imageUrl: './images/hassan_emoji.jpg', title: 'hassan_emoji', description: '' },
    { id: 20, imageUrl: './images/ibrahim_own_bully.jpg', title: 'ibrahim_own_bully', description: '' },
    { id: 21, imageUrl: './images/ishmam_pookie.jpg', title: 'ishmam_pookie', description: '' },
    { id: 22, imageUrl: './images/ishtimam_own_bully.jpg', title: 'ishtimam_own_bully', description: '' },
    { id: 23, imageUrl: './images/jafran_own_bully.jpg', title: 'jafran_own_bully', description: '' },
    { id: 24, imageUrl: './images/khaled_own_bully.jpg', title: 'khaled_own_bully', description: '' },
    { id: 25, imageUrl: './images/lame_reaction.jpg', title: 'lame_reaction', description: '' },
    { id: 26, imageUrl: './images/mustaeen_own_bully.jpg', title: 'mustaeen_own_bully', description: '' },
    { id: 27, imageUrl: './images/nahi_dance.jpg', title: 'nahi_dance', description: '' },
    { id: 28, imageUrl: './images/nasif_bday_come.jpg', title: 'nasif_bday_come', description: '' },
    { id: 29, imageUrl: './images/nibir_own_bully.jpg', title: 'nibir_own_bully', description: '' },
    { id: 30, imageUrl: './images/nuraj_gyatt_to_be_kidding.jpg', title: 'nuraj_gyatt_to_be_kidding', description: '' },
    { id: 31, imageUrl: './images/nuraj_police_pookie.jpg', title: 'nuraj_police_pookie', description: '' },
    { id: 32, imageUrl: './images/nuraj_pookie_behaviour.jpg', title: 'nuraj_pookie_behaviour', description: '' },
    { id: 33, imageUrl: './images/raita_reaction.jpg', title: 'raita_reaction', description: '' },
    { id: 34, imageUrl: './images/raita_sigma.jpg', title: 'raita_sigma', description: '' },
    { id: 35, imageUrl: './images/rayyan_not_like_swim.jpg', title: 'rayyan_not_like_swim', description: '' },
    { id: 36, imageUrl: './images/ridman_high_on_air.jpg', title: 'ridman_high_on_air', description: '' },
    { id: 37, imageUrl: './images/ruwayed_baby_class_kore.jpg', title: 'ruwayed_baby_class_kore', description: '' },
    { id: 38, imageUrl: './images/ruwayed_own_bully.jpg', title: 'ruwayed_own_bully', description: '' },
    { id: 39, imageUrl: './images/safwan_gelo_palay.jpg', title: 'safwan_gelo_palay', description: '' },
    { id: 40, imageUrl: './images/tahia_goggle.jpg', title: 'tahia_goggle', description: '' },
    { id: 41, imageUrl: './images/tawqirun_checking_out.jpg', title: 'tawqirun_checking_out', description: '' },
    { id: 42, imageUrl: './images/tawqirun_gelo_palay.jpg', title: 'tawqirun_gelo_palay', description: '' },
    { id: 43, imageUrl: './images/tawqirun_own_bully.jpg', title: 'tawqirun_own_bully', description: '' },
    { id: 44, imageUrl: './images/zabid_gelo_palay.jpg', title: 'zabid_gelo_palay', description: '' },
    { id: 45, imageUrl: './images/zabid_not_lit.jpg', title: 'zabid_not_lit', description: '' },
    { id: 46, imageUrl: './images/zabid_own_bully.jpg', title: 'zabid_own_bully', description: '' },
];

// Create pin element
function createPin(pin) {
    const pinElement = document.createElement('div');
    pinElement.className = 'pin';

    const img = document.createElement('img');
    img.src = pin.imageUrl;
    img.alt = pin.title;
    img.loading = 'lazy';
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
    };

    pinElement.innerHTML = `
        <div class="pin-content">
            <div class="pin-title">${pin.title}</div>
            <div class="pin-description">${pin.description}</div>
        </div>
    `;

    pinElement.insertBefore(img, pinElement.firstChild);
    pinElement.addEventListener('click', () => {
        alert(`You clicked on: ${pin.title}`);
    });

    return pinElement;
}


function displayPins(pinsToShow) {
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';

    if (pinsToShow.length === 0) {
        imageGrid.innerHTML = '<p>No pins found</p>';
        return;
    }

    pinsToShow.forEach((pin) => {
        imageGrid.appendChild(createPin(pin));
    });
}


function shufflePins() {
    const shuffled = [...pins].sort(() => Math.random() - 0.5);
    displayPins(shuffled);
}


function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPins = pins.filter(
            (pin) =>
                pin.title.toLowerCase().includes(searchTerm) ||
                pin.description.toLowerCase().includes(searchTerm)
        );
        displayPins(filteredPins);
    });
}


function setupCreatePin() {
    document.getElementById('createBtn').addEventListener('click', () => {
        const imageUrl = prompt('Enter image URL:');
        const title = prompt('Enter title:');
        const description = prompt('Enter description:');

        if (imageUrl && title && description) {
            const newPin = { id: Date.now(), imageUrl, title, description };
            pins.push(newPin);
            displayPins(pins);
        } else {
            alert('Please fill in all fields to create a pin.');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    displayPins(pins);
    setupSearch();
    setupCreatePin();

    
    document.getElementById('shuffleBtn').addEventListener('click', shufflePins);
});
