const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector('.gallery');

function createGallery(image) {
    const galleryCollection = document.createElement('li');
    galleryCollection.className = 'list';
    const galleryImage = document.createElement("img");
    galleryImage.src = image.url;
    galleryImage.alt = image.alt;
    galleryImage.className = 'photo';

    
    galleryCollection.appendChild(galleryImage);
    gallery.appendChild(galleryCollection);
};

images.forEach(image => createGallery(image));