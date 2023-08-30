$(document).ready(function () {
  generateStoriesIndex();
  generateFeaturesIndex();
});

const generateStoriesIndex = () => {
    fetch('data/stories.json')
        .then(response => response.json())
        .then(data => {
            var stories = data.slice(0,4);
            const storiesContainer = document.getElementById('index-stories__sub');
            stories.map((story, index) => {
                const device = getTargetDevice();
                const html = `
                <div class="section-stories__sub__item">
                  <img class="responsive-image-mb-dt" src="assets/images/stories/${device}/${story.image}" 
                  alt="${story.image.replace(/\..+$/, '')}">
                  <div class="section-stories__sub__item__caption">
                    <h3>${story.title}</h3>
                    <p class="section-stories__sub__item__caption__author">by ${story.author}</p>
                    <div class="section-stories__sub__item__caption__line"></div>
                    <h4>Read Story</h4>
                </div>
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

const generateFeaturesIndex = () => {
    fetch('data/features.json')
        .then(response => response.json())
        .then(data => {
            const features = data.slice(0,3);
            const featuresContainer = document.getElementById('index-features');
            features.map((feature, index) => {
                const html = `
                <div class="section-features__flex-container__item">
                  <img src="assets/images/features/desktop/${feature.image}" 
                  alt="${feature.image.replace(/\..+$/, '')}">
                  <h3>${feature.title}</h3>
                  <p class="section-features__flex-container__item__description">
                ${feature.description}</p>
                </div>
              `;
                featuresContainer.insertAdjacentHTML('beforeend', html);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};
