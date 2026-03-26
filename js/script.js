/* 
   Quora Tech - Scripts
   Data & UI Control
*/

const BOOKS_DATA = [
    {
        id: 1,
        title: "The Lessons Life Taught Me",
        description: "A raw and reflective journey through the hard-won wisdom that only lived experience can offer.",
        price: "$19.99",
        image: "images/book-1-lessons-life-taught-BEu7Zq9Pi9MF6RugehkWAe.webp"
    },
    {
        id: 2,
        title: "From Failure to Freedom",
        description: "A powerful story of resilience — how complete collapse became the foundation of an extraordinary life.",
        price: "$29.99",
        image: "images/book-2-failure-freedom-QbwWvHcos3R6nsurQWwtbE.webp"
    },
    {
        id: 3,
        title: "The Silent Power of Discipline",
        description: "Discipline is not punishment — it is the quiet force that separates dreamers from achievers.",
        price: "$24.99",
        image: "images/book-3-silent-power-discipline-hbzLLjJZx9fNXYY2g88KPM.webp"
    },
    {
        id: 4,
        title: "The Long Road to Success",
        description: "Success rarely arrives on schedule. This is the story of patience, persistence, and the long game.",
        price: "$29.99",
        image: "images/book-4-long-road-success-TZDxkGZb5YseS4N6XY5m5q.webp"
    },
    {
        id: 5,
        title: "Stories That Shape Character",
        description: "Character is not born — it is built, story by story, through the choices we make under pressure.",
        price: "$19.99",
        image: "images/book-5-stories-shape-character-mpHUtp8tbtwmvi3eQiA49J.webp"
    },
    {
        id: 6,
        title: "The Mindset of Builders",
        description: "Builders think differently. This book decodes the mental frameworks behind every great creator and entrepreneur.",
        price: "$24.99",
        image: "images/book-6-mindset-builders-BLLY5ZByZyaSCHWizWJQwx.webp"
    },
    {
        id: 7,
        title: "Life After Rock Bottom",
        description: "When you have lost everything, you discover what truly matters. This is that story.",
        price: "$19.99",
        image: "images/book-7-life-after-rock-bottom-8NetP7Q5taERA9nkTvgtkJ.webp"
    },
    {
        id: 8,
        title: "The Art of Starting Again",
        description: "Starting over is not a sign of failure — it is one of the bravest things a human being can do.",
        price: "$24.99",
        image: "images/book-8-art-starting-again-3DjJFb4k9pj9om5xCronYG.webp"
    },
    {
        id: 9,
        title: "The Power of One Decision",
        description: "How a single choice can rewrite your entire story and set a new trajectory for your life.",
        price: "$14.99",
        image: "images/book-9-power-one-decision-bagcQXYemnPZQg6Qvz6we7.webp"
    }
];

function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    card.innerHTML = `
        <div class="book-img">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-tag">Premium</div>
        </div>
        <div class="book-info">
            <h3 class="book-title font-poppins">${book.title}</h3>
            <p class="book-desc">${book.description}</p>
            <div class="book-footer">
                <span class="book-price">${book.price}</span>
                <button class="buy-btn" title="Purchase Now">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function initBooks() {
    const grid = document.getElementById('books-grid');
    if (!grid) return;
    
    BOOKS_DATA.forEach(book => {
        grid.appendChild(createBookCard(book));
    });
}

// Navigation effect
function initNav() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Document ready
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initBooks();
});
