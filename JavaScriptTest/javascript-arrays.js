window.onload = () => {
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++'],
        languagePopularity: ['JavaScript rank: 1', 'HTML rank: 2', 'CSS rank: 3'],

    }

    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);
        }
    };

    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');
        for (let languageNames of arrays.languageNames) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(languageNames));
            languageNamesDisplay.appendChild(li);
        }
    };

    techLanguagePopularityAction.onclick = () => {
        const languagePopularityDisplay = document.getElementById('tech-language-popularity-display');
        for (let languagePopularity of arrays.languagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(languagePopularity));
            languagePopularityDisplay.appendChild(li);
        }
    };
};



