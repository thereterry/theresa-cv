import { gsap } from 'gsap';

class Abilities {
    constructor(data, rootElement) {
        this.data = data; 
        this.rootElement = rootElement;
    }

    render() {
        const abilitiesDiv = document.createElement('div');
        abilitiesDiv.className = 'section abilities-section'; 
        
        const heading = document.createElement('h2');
        heading.textContent = "Abilities";
        abilitiesDiv.appendChild(heading);

        const abilitiesList = document.createElement('ul');
        this.data.abilities.forEach(ability => {
            const listItem = document.createElement('li');
            listItem.className = 'abilities-list-item';
            listItem.textContent = ability;
            abilitiesList.appendChild(listItem);
        });

        abilitiesDiv.appendChild(abilitiesList);
        this.rootElement.appendChild(abilitiesDiv);

        gsap.from(abilitiesDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
    }
}

export default Abilities;
