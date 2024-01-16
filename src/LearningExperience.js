import { gsap } from 'gsap';

export class LearningExperience {
  constructor(data, rootElement) {
    this.data = data.learningExperience.education;
    this.rootElement = rootElement;
  }

  render() {
    const learningExpDiv = document.createElement('div');
    learningExpDiv.className = 'section learning-experience-section';

    this.data.forEach(education => {
      const listItem = document.createElement('li');
      listItem.className = 'education-list-item';

      const eduTitle = document.createElement('h4');
      eduTitle.textContent = education.recent_education || education.current_education || education.degree || education.certificate;
      listItem.appendChild(eduTitle);

      const schoolName = document.createElement('p');
      schoolName.textContent = `School: ${education.recent_school || education.school_name || education.universityName || education.institutionName}`;
      listItem.appendChild(schoolName);

      if (education.school_address) {
        const schoolAddress = document.createElement('p');
        schoolAddress.textContent = `Address: ${education.recent_school_address || education.school_address}`;
        listItem.appendChild(schoolAddress);
      }


      const schoolYear = document.createElement('p');
      schoolYear.textContent = `Attended: ${education.recent_school_year || education.school_year_attended || education.yearsAttended}`;
      listItem.appendChild(schoolYear);

      // Additional information like courses, thesis, etc.
      if (education.courses) {
        const coursesInfo = document.createElement('p');
        coursesInfo.textContent = `Courses: ${education.courses.join(', ')}`;
        listItem.appendChild(coursesInfo);
      }



      learningExpDiv.appendChild(listItem);
    });

    this.rootElement.appendChild(learningExpDiv);
    gsap.from(learningExpDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
  }
}

export class ProfessionalExperience {
  constructor(data, rootElement) {
    this.data = data.professionalExperience.medicalTranscriptionist;
    this.rootElement = rootElement;
  }

  render() {
    const professionalExpDiv = document.createElement('div');
    professionalExpDiv.className = 'section professional-experience-section';

    this.data.responsibilities.forEach(responsibility => {
      const li = document.createElement('li');
      li.textContent = responsibility;
      li.className = 'professional-experience-item'; // Apply CSS class
      professionalExpDiv.appendChild(li);
    });

    this.data.achievements.forEach(achievement => {
      const li = document.createElement('li');
      li.textContent = achievement;
      li.className = 'professional-experience-item'; // Apply CSS class
      professionalExpDiv.appendChild(li);
    });

    this.rootElement.appendChild(professionalExpDiv);
    gsap.from(professionalExpDiv, { duration: 1, x: '-100%', ease: 'power3.out' });
  }

}

