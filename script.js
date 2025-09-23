// 確保在 DOM 結構完全載入後才執行程式碼
document.addEventListener('DOMContentLoaded', () => {

    // 1. 獲取需要操作的 HTML 元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // 2. 為「模式切換」按鈕添加點擊事件監聽器
    themeToggleButton.addEventListener('click', () => {
        // 3. 使用 classList.toggle() 方法來新增或移除 'light-mode' class
        //    這會觸發 CSS 中對應的樣式規則，從而切換主題。
        bodyElement.classList.toggle('light-mode');
    });

});
