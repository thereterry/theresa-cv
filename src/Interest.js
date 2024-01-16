import { gsap } from 'gsap';

export default class Interest {
    constructor(data, rootElement) {
        this.data = data;
        this.rootElement = rootElement;
    }

    render() {
        const interestDiv = document.createElement('div');
        interestDiv.className = 'section interests';

        const heading = document.createElement('h2');
        heading.textContent = "Interest";
        interestDiv.appendChild(heading);

        const interestList = document.createElement('ul');
        interestDiv.appendChild(interestList);

        this.data.interest.forEach((interest, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'interest-item';

            const contentContainer = document.createElement('div');
            contentContainer.className = 'interest-content';

            const title = document.createElement('h3');
            title.textContent = interest.name;  //name from the data.json
            listItem.appendChild(title);

            const image = document.createElement('img');
            image.src = interest.img; // src from data.json
            image.alt = interest.name; 
            listItem.appendChild(image);
            
            listItem.appendChild(contentContainer);
            interestList.appendChild(listItem);

            gsap.fromTo
            (
                listItem, 
                { opacity: 0, y: -30 }, 
                { opacity: 1, y: 0, duration: 0.5, stagger: index * 0.1 }
            );
        });

        this.rootElement.appendChild(interestDiv);
    }
}

