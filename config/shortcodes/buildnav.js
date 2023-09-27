module.exports = function build(items = [], depth = 0, pageId) {
    let length = items.length;

    let navigation = depth == 0 ? '<div class="navbar-nav mx-auto">' : ``;

    for (let idx = 0; idx < length; idx++) {
        let item = items[idx];
        if (item.children) {
            let active = pageId === item.id ? 'active' : '';
            navigation += `
                <div class="nav-item dropdown">
                    <a href="${item.url}" class="nav-link dropdown-toggle ${active}" data-bs-toggle="dropdown">${item.name}</a>
                    <div class="dropdown-menu bg-light">
            `;

            navigation += build(item.children, depth + 1);
            navigation += `</div>`

        } else if (depth > 0) {
            navigation += `
                <a href="${item.url}" class="dropdown-item">${item.name}</a>
            `;

        } else {
            let active = pageId === item.id ? 'active' : '';
            navigation += `
                <a href="${item.url}" class="nav-item nav-link ${ active }">${item.name}</a>
            `;
        }               
    }
    navigation += `</div>`;

    return navigation;
} 