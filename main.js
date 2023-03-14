const reactionsElement = document.querySelector('div[class="reactions"]');
const reactionsResults = document.querySelector('div[class="reactionsResults"]');
const toShow = document.querySelector('div[class="toshow"]');
reactionsElement.style.display = 'none';

console.log(window.location)
const buttonItems = document.querySelectorAll('button[data-item]');

var mapCounts = [
    { item: "like", countClicked: 0 },
    { item: "love", countClicked: 0 },
    { item: "laugh", countClicked: 0 },
    { item: "grrr", countClicked: 0 },
];
toShow.addEventListener('mouseover', () => {
    reactionsElement.style.display = 'block';
});

toShow.addEventListener('mouseleave', () => {
    reactionsElement.style.display = 'none';
});

buttonItems.forEach(NodeEl => {
    NodeEl.addEventListener('click', (e) => {
        const { item } = e.target.dataset;
        mapCounts = mapCounts.map(i => {
            if (i.item === item) {
                return {
                    ...i,
                    countClicked: ++i.countClicked
                };
            }
            return i;
        });
        mapCounts = mapCounts.sort((a, b) => {
            return (a.countClicked - b.countClicked) * (-1);
        });

        var startDiv = '<div>';
        for (let index = 0; index < mapCounts.length; index++) {
            if (mapCounts[index].countClicked > 0) {
                startDiv += `<span class="react">
                    <span class="reactCounts">${mapCounts[index].countClicked}</span>
                    <img src="./icons/${mapCounts[index].item}.svg" alt="${mapCounts[index].item}" />
                </span>`;
            }
        }

        startDiv += '</div>';

        reactionsResults.innerHTML = startDiv;
    });
});