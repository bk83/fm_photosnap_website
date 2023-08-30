import 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
$(document).ready(function () {
  generateFeatures();
});

const generateFeatures = () => {
    fetch('data/features.json')
        .then(response => response.json())
        .then(data => {
            const features = data;
            const featuresContainer = document.querySelector('.section-features__flex-container');
            features.map((feature, index) => {
                const html = `
                <div class="section-features__flex-container__item">
                <img src="assets/images/features/desktop/${feature.image}" 
                alt="${feature.image.replace(/\..+$/, '')}">
                  <h3>${feature.title}</h3>
                  <p class="section-features__flex-container__item__description">
                  ${feature.description}
                  </p>
                </div>
              </div>
              `;
                featuresContainer.insertAdjacentHTML('beforeend', html);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};
