window.onload = () => {
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++'],
        languagePopularity: [
            {
                language: 'JavaScript',
                rank: 2
            },
            {
                language: 'HTML',
                rank: 1
            },
            {
                language: 'CSS',
                rank: 3
            }
        ]

    };


    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('tech-language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        const showNumbers = () => {
            for (let number of arrays.numbers) {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(number));
                numbersDisplay.appendChild(li);
            }
        }
        showNumbers();
        arrays.numbers.sort((a, b) => a - b);
        showNumbers();

    };

    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('tech-language-names-display');
        for (let languageNames of arrays.languageNames.sort()) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(languageNames));
            languageNamesDisplay.appendChild(li);
        }
    };

    techLanguagePopularityAction.onclick = () => {
        const techLanguagePopularityDisplay = document.getElementById('tech-language-popularity-display');

        arrays.languagePopularity.sort(compareRank);

        techLanguagePopularityDisplay.innerHTML = '';

        for (let language of arrays.languagePopularity) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(language.language + ' rank: ' + language.rank));
            techLanguagePopularityDisplay.appendChild(li);
        }
    };
};

function compareRank(a, b) {
    // Use toUpperCase() to ignore character casing
    const rankA = a.rank;
    const rankB = b.rank;

    let comparison = 0;
    if (rankA > rankB) {
        comparison = 1;
    } else if (rankA < rankB) {
        comparison = -1;
    }
    return comparison;
}


