// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    };

    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
});
<section id="skills" class="section light-pink-bg">
    <div class="container">
        <h2>Technical Skills</h2>
        <div class="skills-list">
            <div class="skill">
                <h3>Languages</h3>
                <p>Python, C, Frontend Development (HTML, CSS, JavaScript, Bootstrap)</p>
            </div>
            <div class="skill">
                <h3>AI Tools</h3>
                <p>Bing AI, Gemini, OpenAI</p>
            </div>
            <div class="skill">
                <h3>Miscellaneous</h3>
                <p>Java, Data Structures, UI/UX, MS Office</p>
            </div>
            <div class="skill">
                <h3>Developer Tools</h3>
                <p>VS Code, Eclipse, Anaconda, Sublime Text</p>
            </div>
        </div>
    </div>
</section>
