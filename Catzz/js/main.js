// script.js
function loadContent(page) {
    var contentContainer = document.getElementById('content-container');
    var content = '';

    // 使用 Fetch API 异步加载子页面内容
    fetch(page + '.html')  // 修正这里的路径
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => {
            contentContainer.innerHTML = '<p>加载页面失败</p>';
        });
}
