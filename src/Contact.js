import { gsap } from 'gsap';

class Contact {
    constructor(data, rootElement) {
        this.data = data;
        this.rootElement = rootElement;
    }

    render() {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'section contact-section';

        const heading = document.createElement('h2');
        heading.textContent = "Contact";
        contactDiv.appendChild(heading);

   
        const addressP = this.createContactElement(
            'p', 
            'contact-address', 
            this.data.footer.contact.address, 
            this.data.footer.contact.addressIcon, 
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.data.footer.contact.address)}`
        );

        const phoneP = this.createContactElement(
            'p', 
            'contact-phone', 
            this.data.footer.contact.telephone, 
            this.data.footer.contact.telephoneIcon,
            'tel:' + this.data.footer.contact.telephone
        );

        const emailP = this.createContactElement(
            'p', 
            'contact-email', 
            this.data.footer.contact.email, 
            this.data.footer.contact.emailIcon,
           'mailto:' + this.data.footer.contact.email
        );

        contactDiv.appendChild(addressP);
        contactDiv.appendChild(phoneP);
        contactDiv.appendChild(emailP);
        this.rootElement.appendChild(contactDiv);

        gsap.from(contactDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
    }

    createContactElement(tag, className, textContent, iconSrc, linkHref) {
        const element = document.createElement(tag);
        element.className = className;

        const iconElement = document.createElement('img');
        iconElement.src = iconSrc;
        iconElement.alt = `${textContent} icon`;

        const textElement = document.createElement('span');
        textElement.textContent = textContent;

        if (linkHref) { 
            const linkElement = document.createElement('a');
            linkElement.href = linkHref;
            
            if(linkHref.startsWith('mailto:') || linkHref.startsWith('tel:')) {
                linkElement.target = '_self';
            } else {
                linkElement.target = '_blank';
            }
            
            linkElement.appendChild(textElement);
            element.appendChild(iconElement);
            element.appendChild(linkElement);
        }else {
            element.appendChild(iconElement);
            element.appendChild(textElement);
        }

        return element;
    }
}

export default Contact;
