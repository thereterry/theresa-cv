import { gsap } from 'gsap';

export default class Profile {
    constructor(data, rootElement) {
        this.data = data;
        this.rootElement = rootElement;
    }

    render() {

        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        const profileImage = document.createElement('img');
        profileImage.className = 'profile-image';
        profileImage.src = this.data.profile.image;

        const profileName = document.createElement('h1');
        profileName.className = 'profile-name';
        profileName.textContent = this.data.profile.name;

        const profileTitle = document.createElement('h2');
        profileTitle.className = 'profile-title';
        profileTitle.textContent = this.data.profile.title;

        profileDiv.appendChild(profileImage);
        profileDiv.appendChild(profileName);
        profileDiv.appendChild(profileTitle);

        const profileBio = document.createElement('p');
        profileBio.className = 'profile-bio';

        const bioText = this.data.profile.bio;
        const startIndex = bioText.indexOf("Danish-based");
        const regularContent = bioText.substring(0, startIndex);
        const highlightedContent = bioText.substring(startIndex);

        const regularText = document.createElement('span');
        regularText.textContent = regularContent;
        profileBio.appendChild(regularText);

        const highlightText = document.createElement('span');
        highlightText.className = 'highlight';
        highlightText.textContent = highlightedContent;
        profileBio.appendChild(highlightText);

        profileDiv.appendChild(profileBio);

        this.rootElement.appendChild(profileDiv);

        gsap.from('.profile', { duration: 1, opacity: 0, y: -50 });
    }
}
