$(document).ready(function () {
  generateStories();
});

const generateStories = () => {
    fetch('data/stories.json')
        .then(response => response.json())
        .then(data => {
            var stories = data;
            const storiesContainer = document.getElementById('section-stories__container');
            stories.map((story, index) => {
                const device = getTargetDevice();
                const html = `
                <div class="section-stories__item">
                <img class="responsive-image-mb-dt background-image" src="assets/images/stories/${device}/${story.image}"
                  alt="${story.image.replace(/\..+$/, '')}">
                  <div class="section-stories__item__caption">
                 <p class="section-stories__item__caption__date">${story.date}</p>
                  <h3>${story.title}</h3>
                  <p class="section-stories__item__caption__author">by ${story.author}</p>
                  <div class="section-stories__item__caption__line"></div>
                  <h4>Read Story</h4>
                </div>
              </div>
              `;
                storiesContainer.insertAdjacentHTML('beforeend', html);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};


const getTargetDevice = () => {
    const screensize = window.innerWidth;
    const tableSize = 768;
    const desktopSize = 960;
    var device = ""

    if (screensize < tableSize) {
        device = "mobile";
    } else {
        device = "desktop";
    }
    return device;
}

