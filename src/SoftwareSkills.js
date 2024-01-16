import { gsap } from 'gsap';

export default class SoftwareSkills {
    constructor(data, rootElement) {
        this.data = data;
        this.rootElement = rootElement;
    }

    render() {
        const skillsDiv = document.createElement('div');
        skillsDiv.className = 'section software-skills';

        const heading = document.createElement('h2');
        heading.textContent = "Software Skills";
        skillsDiv.appendChild(heading);

        const skillsList = document.createElement('ul');
        skillsDiv.appendChild(skillsList);  //Append skillsList

        this.data.softwareSkills.forEach(skill => {
            const listItem = document.createElement('li');

            const title = document.createElement('h3');
            title.textContent = skill.name;  //name from the data.json
            listItem.appendChild(title);

            const img = document.createElement('img');
            img.src = skill.img;
            img.alt = skill.name;

            listItem.appendChild(img);
            skillsList.appendChild(listItem);

        });


        this.rootElement.appendChild(skillsDiv);

        gsap.from(skillsDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
    }
}
