const popupWrapper = document.querySelector('.project-popup-wrapper');
const popupName = document.querySelector('.popup-name');
const popupPosition = document.querySelector('.popup-position');
const popupWorkName = document.querySelector('.popup-work-name');
const popupImage = document.querySelector('.popup-image');
const popupDescription = document.querySelector('.popup-description');
const popupTech = document.querySelector('.popup-technologies-container');
const projectOne = document.querySelector('#project-one');
const projectTwo = document.querySelector('#project-two');
const projectThree = document.querySelector('#project-three');
const projectFour = document.querySelector('#project-four');
const closePopup = document.querySelector('.close-project-popup');

const popupOne = {
  name: 'Tonic',
  workName: 'CANOPY',
  position: ['Back End Dev', '2015'],
  imageUrl: './img/Snapshoot Portfolio.svg',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
  technologies: ['html', 'css', 'javascript'],
};

const popupTwo = {
  name: 'Multi-Post Stories',
  workName: 'FACEBOOK',
  position: ['Full Stack Dev', '2015'],
  imageUrl: './img/Snapshoot Portfolio2.svg',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
  technologies: ['html', 'css', 'javascript'],
};

const popupThree = {
  name: 'Facebook 360',
  workName: 'FACEBOOK',
  position: ['Full Stack Dev', '2015'],
  imageUrl: './img/Snapshoot Portfolio3.svg',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
  technologies: ['html', 'css', 'javascript'],
};

const popupFour = {
  name: 'Uber Navigation',
  workName: 'Uber',
  position: ['Lead Dev', '2015'],
  imageUrl: './img/Snapshoot Portfolio4.svg',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and',
  technologies: ['html', 'css', 'javascript'],
};

const populateUI = (popup) => {
  popupWrapper.classList.remove('hide');
  fade.style.filter = 'blur(3px)';
  popupName.textContent = popup.name;
  popupWorkName.textContent = popup.workName;
  popupPosition.innerHTML = '';
  popup.position.forEach((item) => {
    popupPosition.innerHTML += `<li>${item}</li>`;
  });
  popupImage.setAttribute('src', popup.imageUrl);
  popupDescription.textContent = popup.description;
  popupTech.innerHTML = '';
  popup.technologies.forEach((item) => {
    popupTech.innerHTML += `<li>${item}</li>`;
  });
};

projectOne.addEventListener('click', () => {
  populateUI(popupOne);
});

projectTwo.addEventListener('click', () => {
  populateUI(popupTwo);
});

projectThree.addEventListener('click', () => {
  populateUI(popupThree);
});

projectFour.addEventListener('click', () => {
  populateUI(popupFour);
});

closePopup.addEventListener('click', () => {
  popupWrapper.classList.add('hide');
  fade.style.filter = 'blur(0)';
});