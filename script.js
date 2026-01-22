document.addEventListener('DOMContentLoaded', () => {


    const creatures = [
        {
            id: 'chimera',
            name: 'Chimera',
            image: 'Chimora.jfif',
            description: 'A monstrous fire-breathing hybrid creature composed of the parts of more than one animal. It is usually depicted as a lion, with the head of a goat arising from its back, and a tail that might end with a snake\'s head.'
        },
        {
            id: 'griffin',
            name: 'Griffin',
            image: 'Griffin.jpg',
            description: 'A legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and sometimes an eagle\'s talons as its front feet. It is a symbol of divine power and a guardian of the divine.'
        },
        {
            id: 'manticore',
            name: 'Manticore',
            image: 'Mantichora.jfif',
            description: 'A legendary Persian creature similar to the Egyptian sphinx. It has the head of a human, the body of a lion, and a tail of venomous spines similar to porcupine quills, while other depictions have it with the tail of a scorpion.'
        },
        {
            id: 'vampire',
            name: 'Vampire',
            image: 'Vampire.webp',
            description: 'A creature from folklore that subsists by feeding on the vital essence (generally in the form of blood) of the living. In European folklore, vampires are undead creatures that often visited loved ones.'
        },
        {
            id: 'basilisk',
            name: 'Basilisk',
            image: 'basilik.webp',
            description: 'A legendary reptile reputed to be a serpent king, who can cause death with a single glance. According to Naturalis Historia of Pliny the Elder, the basilisk of Cyrene is a small snake.'
        },
        {
            id: 'dragon',
            name: 'Dragon',
            image: 'dragonn.webp',
            description: 'A large, serpentine legendary creature that appears in the folklore of many cultures around the world. Beliefs about dragons vary, but the western dragon is winged, horned, and capable of breathing fire.'
        },
        {
            id: 'fairy',
            name: 'Fairy',
            image: 'fairy.jpg',
            description: 'A type of mythical being or legendary creature found in the folklore of multiple European cultures, a form of spirit, often described as metaphysical, supernatural, or preternatural.'
        },
        {
            id: 'fenrir',
            name: 'Fenrir',
            image: 'fenrir.jfif',
            description: 'A monstrous wolf in Norse mythology. Fenrir is the father of the wolves Sköll and Hati Hróðvitnisson, is a son of Loki and Angrboða, and is foretold to kill the god Odin during the events of Ragnarök.'
        },
        {
            id: 'centaur',
            name: 'Centaur',
            image: 'horse human.webp',
            description: 'A creature from Greek mythology with the upper body of a human and the lower body and legs of a horse. Centaurs are thought of in many Greek myths as being as wild as untamed horses.'
        },
        {
            id: 'kraken',
            name: 'Kraken',
            image: 'kraken.jfif',
            description: 'A legendary cephalopod-like sea monster of giant size in Scandinavian folklore. According to the Norse sagas, the kraken dwells off the coasts of Norway and Greenland and terrorizes nearby sailors.'
        },
        {
            id: 'leviathan',
            name: 'Leviathan',
            image: 'laviathan.jpg',
            description: 'A sea serpent noted in theology and mythology. It is referenced in several books of the Hebrew Bible, including Psalms, the Book of Job, the Book of Isaiah, and the Book of Amos.'
        },
        {
            id: 'swamp_deer',
            name: 'Swamp Deer',
            image: 'magical swamp deer.jpg',
            description: 'A mystical deer inhabiting ancient swamps, glowing with an ethereal light that guides lost travelers or leads them astray depending on the purity of their hearts.'
        },
        {
            id: 'medusa',
            name: 'Medusa',
            image: 'medusa.png',
            description: 'In Greek mythology, Medusa was a monster, a Gorgon, generally described as a winged human female with living venomous snakes in place of hair. Those who gazed into her eyes would turn to stone.'
        },
        {
            id: 'mermaid',
            name: 'Mermaid',
            image: 'mermaid 2.jpg',
            description: 'A legendary aquatic creature with the head and upper body of a female human and the tail of a fish. Mermaids appear in the folklore of many cultures worldwide, including Europe, Asia, and Africa.'
        },
        {
            id: 'pegasus',
            name: 'Pegasus',
            image: 'pegasus.jfif',
            description: 'One of the best known creatures in Greek mythology. He is a winged divine stallion usually depicted as pure white in color. He was sired by Poseidon, in his role as horse-god, and foaled by the Gorgon Medusa.'
        },
        {
            id: 'phoenix',
            name: 'Phoenix',
            image: 'phoenix.jpg',
            description: 'A long-lived bird that cyclically regenerates or is otherwise born again. Associated with the sun, a phoenix obtains new life by arising from the ashes of its predecessor.'
        },
        {
            id: 'serphnite',
            name: 'Serphnite',
            image: 'serphnite.jfif',
            description: 'A rare and elusive serpentine creature said to dwell in crystal caves. It is covered in jewel-like scales that refract light into dazzling rainbows, mesmerizing its prey.'
        },
        {
            id: 'sphinx',
            name: 'Sphinx',
            image: 'sphynix.jpg',
            description: 'A mythical creature with the head of a human, a falcon, a cat, or a sheep and the body of a lion with the wings of an eagle. In Greek tradition, the sphinx has the head of a woman, the haunches of a lion, and the wings of a bird.'
        },
        {
            id: 'unicorn',
            name: 'Unicorn',
            image: 'unicorn.jfif',
            description: 'A legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead. The unicorn was depicted in ancient seals of the Indus Valley Civilization.'
        },
        {
            id: 'yeti',
            name: 'Yeti',
            image: 'yeti.webp',
            description: 'An ape-like entity, taller than an average human, that is said to inhabit the Himalayan region of Nepal, Bhutan, and Tibet. The names Yeti and Meh-Teh are commonly used by the people indigenous to the region.'
        },
        {
            id: 'zombie',
            name: 'Zombie',
            image: 'zomvie.jpg',
            description: 'A mythological undead corporeal revenant created through the reanimation of a corpse. Zombies are most commonly found in horror and fantasy genre works.'
        }
    ];


    let viewedCreatures = new Set(JSON.parse(localStorage.getItem('viewedCreatures')) || []);

  
    const homeSection = document.getElementById('home-section');
    const creaturesSection = document.getElementById('creatures-section');
    const startBtn = document.getElementById('start-btn');
    const backHomeBtn = document.getElementById('back-home-btn');
    const creaturesGrid = document.getElementById('creatures-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const progressContainer = document.getElementById('progress-container');
    

    const navHome = document.getElementById('nav-home');
    const navCreatures = document.getElementById('nav-creatures');


    const modal = document.getElementById('creature-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close-modal');


    function init() {
        renderCards();
        updateProgress();
    }



    function renderCards() {
        creaturesGrid.innerHTML = '';
        creatures.forEach(creature => {
            const card = document.createElement('div');
            card.classList.add('creature-card');
            if (viewedCreatures.has(creature.id)) {
                card.classList.add('viewed');
            }
            card.setAttribute('data-id', creature.id);

            card.innerHTML = `
                <div class="check-icon">&#10003;</div>
                <div class="card-image-wrapper">
                    <img src="${creature.image}" alt="${creature.name}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3>${creature.name}</h3>
                    <span class="view-indicator">Discovered</span>
                </div>
            `;

            card.addEventListener('click', () => openModal(creature));
            creaturesGrid.appendChild(card);
        });
    }

    function openModal(creature) {
        modalImg.src = creature.image;
        modalTitle.textContent = creature.name;
        modalDesc.textContent = creature.description;
        
        modal.style.display = 'flex';

        // Track Progress
        if (!viewedCreatures.has(creature.id)) {
            viewedCreatures.add(creature.id);
            localStorage.setItem('viewedCreatures', JSON.stringify([...viewedCreatures]));
            updateProgress();
            
            // Update UI card to show viewed status immediately
            const card = document.querySelector(`.creature-card[data-id="${creature.id}"]`);
            if (card) {
                card.classList.add('viewed');
            }
        }
    }

    function updateProgress() {
        const percentage = Math.round((viewedCreatures.size / creatures.length) * 100);
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    }

    function showSection(section) {
        if (section === 'home') {
            creaturesSection.classList.remove('active-section');
            creaturesSection.style.display = 'none';
            homeSection.style.display = 'flex';
            homeSection.classList.add('active-section');
        } else if (section === 'creatures') {
            homeSection.classList.remove('active-section');
            homeSection.style.display = 'none';
            creaturesSection.style.display = 'flex';
            creaturesSection.classList.add('active-section');
        }
    }



    startBtn.addEventListener('click', () => showSection('creatures'));
    backHomeBtn.addEventListener('click', () => showSection('home'));
    

    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
    });

    navCreatures.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('creatures');
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });


    init();
});
