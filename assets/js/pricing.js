
$(document).ready(function () {
    // Call the function to generate plans
    generatePlans();
    
    $('#toggle-switch').on('change', function () {
        // change color of the opiton of switch slider
        $('.switch-container .term-option').toggleClass('checked');
        // switch monthly and yearly dispaly
        $('.price-card .yearly, .price-card .monthly').toggleClass('none');
    });
});


const generatePricingTableForMobile = (n, text) => {
    const trElements = $('.plan-comparison-table .table-row');
    trElements.each((index, element) => {
        $(element).find(`.table-cell:nth-child(${n})`).text(text);
    });
};

const generatePlans = () => {
    fetch('data/plans.json')
        .then(response => response.json())
        .then(data => {
            var plans = data;
            const plansContainer = document.getElementById('section-price__price-area');
            plans.map((plan, index) => {
                const html = `
                <label for="plan-${index + 1}">
                <input type="radio" id="plan-${index + 1}" name="pricing" class="price-card-radio">
                <span class="price-card">
                        <span class="price-card__plan-name">${plan.name}</span>
                        <span class="price-card__text">${plan.description}</span>
                            <span class="price-card__price-wrapper">
                                <span class="price-wrapper__price monthly">${plan.monthlyPrice}</span>
                                <span class="price-wrapper__price yearly none">${plan.yearlyPrice}</span>
                                <span class="price-wrapper__term monthly">per month</span>
                                <span class="price-wrapper__term yearly none">per year</span>
                            </span>
                        <span class="price-card__button">Pick Plan</span>
                </span>
              </label>
              `;
              plansContainer.insertAdjacentHTML('beforeend', html);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
};