'use strict';
const galleryItems = [
    { preview: 'img/pexels-photo-320.jpeg', fullview: 'img/pexels-photo-1280.jpeg', alt: "vax" },
    { preview: 'img/beach-320.jpeg', fullview: 'img/beach-1280.jpeg', alt: "beach" },
    { preview: 'img/red-320.jpeg', fullview: 'img/red-1280.jpeg', alt: "girl" },
    { preview: 'img/cristmas-320.jpeg', fullview: 'img/cristmas-1280.jpeg', alt: "tree" },
    { preview: 'img/maroco-320.jpeg', fullview: 'img/maroco-1280.jpeg', alt: "town" },
    { preview: 'img/ocean-320.jpeg', fullview: 'img/ocean-1280.jpeg', alt: "ocean" },
    { preview: 'img/desert-320.jpeg', fullview: 'img/desert-1280.jpeg', alt: "desert" },
];

function createGallery1(gallery) {
    const galleryItem = document.querySelector('.preview');
    let previewItem = document.createElement('li');
    previewItem.setAttribute('src', gallery.preview);
    galleryItem.append(previewItem);
}

function createFullView() {
    // взять первый элемент объекта галлереи галлери итемс, взять из него фулл вью, отобразить
/*<div class="fullview">
        <!-- Если выбран первый элемент из preview -->
    <img src="img/fullview-1.jpeg" alt="alt text 1">
        </div>
*/
    const galleryItem = document.querySelector('.fullview');
    let fullViewItem = document.createElement('img');

    fullViewItem.setAttribute('src', galleryItems[0].fullview );
    fullViewItem.setAttribute('alt', galleryItems[0].alt);
    galleryItem.append(fullViewItem);

}

function createPreviewItems() {
    //циклом пройтись по объекту галлери итемс построить по шаблону
/*<ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
        </ul>
        // добавляем ивент лисенер

*/

    galleryItems.forEach(function (item) {
        const galleryItem = document.querySelector('.preview');
        let previewItem = document.createElement('li');
        galleryItem.append(previewItem);
        previewItem = galleryItem.lastChild;
            let imageItem = document.createElement('img');
            imageItem.setAttribute('src', item.preview);
            imageItem.setAttribute('data-fullview', item.fullview);
            imageItem.setAttribute('alt', item.alt);
            previewItem.append(imageItem);
            galleryItem.lastChild.addEventListener('click', imageOpener);


    });
}
function createGallery() {
    //вызывавет функции криейтфуллвью и криейтПревью и
    //

    createFullView();
    createPreviewItems();
}

function imageOpener() {
    let eTarget = event.target;

    let urlFromClickedElement = eTarget.getAttribute('data-fullview');

    let fullScreenImage = document.querySelector('.fullview').firstChild;
    fullScreenImage.nextElementSibling.setAttribute('src', urlFromClickedElement);


    //брать ссылку из дата атрибута и заменять ссылку на фуллВью
}

createGallery();