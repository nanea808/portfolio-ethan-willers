$(() => {
    let cards = $('#cards');

    cards.children().click(function (e) {
        e.preventDefault();

        switch (e.currentTarget.firstElementChild.textContent) {
            case 'Project 1':
                window.location.href = "https://nanea808.github.io/01-project-dosequis-api/";
                break;

            default:
                break;
        }
    });
});