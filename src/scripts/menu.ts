// 型アサーションを使って、適切なHTMLElement型を指定します。
const hamburger = document.querySelector('.hamburger') as HTMLElement;

hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    
    // HTMLElementのclassListプロパティを安全に使用します。
    navLinks.classList.toggle('expanded');
});
