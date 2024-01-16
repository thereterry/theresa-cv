import { gsap } from 'gsap';
import data from '../assets/json/data.json';
import Profile from './Profile';
import Interest from './Interest';
import SoftwareSkills from './SoftwareSkills';
import Abilities from './Abilities';
import { LearningExperience, ProfessionalExperience } from './LearningExperience';
import Contact from './Contact';


export default class CvContainer {
    constructor(rootElement = document.body) {
        this.data = data;
        this.rootElement = rootElement;

        this.renderNavigationLinks();
        this.renderSplashScreen();
    }

    renderNavigationLinks() {
        const navDiv = document.createElement('div');
        navDiv.className = 'navigation-links';

        const sections = [
            { name: 'Profile', method: this.renderProfile.bind(this) },
            { name: 'Interest', method: this.renderInterest.bind(this) },
            { name: 'SoftwareSkills', method: this.renderSoftwareSkills.bind(this) },
            { name: 'Abilities', method: this.renderAbilities.bind(this) },
            { name: 'Education', method: () => {
                this.clearContent();
                this.renderLearningExperience(); 
            }},
            { name: 'Languages', method: this.renderLanguages.bind(this) },
            { name: 'Contact', method: this.renderContact.bind(this) },
        ];

        sections.forEach(section => {
            const link = document.createElement('button');
            link.textContent = section.name;
            link.addEventListener('click', () => {
                this.clearContent();
                section.method();
            });
            navDiv.appendChild(link);
        });

        this.rootElement.appendChild(navDiv);
    }
//SPLASH
    renderSplashScreen() {
        const splash = document.createElement('div');
        splash.className = 'splash';
        const loader = document.createElement('div');
        loader.className = 'loader';
        splash.appendChild(loader);

        this.rootElement.appendChild(splash);

        gsap.to('.splash', {
            duration: 2,
            opacity: 0, 
            onComplete: () => {
                splash.remove();
                this.renderProfile();
            }
        });
    }

    clearContent() {
        const navDiv = document.querySelector('.navigation-links');
     
       const children = Array.from(this.rootElement.childNodes);

       children.forEach(child => {
        if (child !==navDiv)this.rootElement.removeChild(child);
       })
    }

    renderProfile() {
        const profile = new Profile(this.data, this.rootElement);
        profile.render();
    }

    renderInterest() {
        const interest = new Interest(this.data, this.rootElement);
        interest.render();
    }

    renderSoftwareSkills() {
        const softwareSkills = new SoftwareSkills(this.data, this.rootElement);
        softwareSkills.render();
    }

    renderAbilities() {
        const abilitiesInstance = new Abilities(this.data, this.rootElement);
        abilitiesInstance.render();
    }

    renderLearningExperience() {
        const learningExp = new LearningExperience(this.data, this.rootElement);
        learningExp.render();

        const professionalExp = new ProfessionalExperience(data, this.rootElement);
        professionalExp.render();
    }

    renderLanguages() {
        const languagesDiv = document.createElement('div');
        languagesDiv.className = 'languages-section';
        const header = document.createElement('h2');
        header.textContent = 'Languages';
        languagesDiv.appendChild(header);
        
        const ul = document.createElement('ul');
            
        this.data.languages.forEach(language => {
            const li = document.createElement('li');
            
            
            const img = document.createElement('img');
            img.src = language.img; 
            img.alt = language.name; 
            
            li.appendChild(img); 
            ul.appendChild(li);
        });
        
        languagesDiv.appendChild(ul);
        this.rootElement.appendChild(languagesDiv);
        
        gsap.from(languagesDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
    }
    

    renderContact() {
        const contactInstance = new Contact(this.data, this.rootElement);
        contactInstance.render();
    }
}
