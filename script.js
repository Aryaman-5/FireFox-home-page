// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Resource Data - Updated with new links
    const resources = {
        dsa: [
            { name: 'AlgoExpert', url: 'https://www.algoexpert.io/', icon: 'fas fa-bolt' },
            { name: 'InterviewCake', url: 'https://www.interviewcake.com/', icon: 'fas fa-birthday-cake' },
            { name: 'LeetCode', url: 'https://leetcode.com/', icon: 'fas fa-code' },
            { name: 'LeetCode SQL 50', url: 'https://leetcode.com/studyplan/top-sql-50/', icon: 'fas fa-database' },
            { name: 'Top 100 DSA Questions', url: 'https://leetcode.com/discuss/interview-question/4258631/Top-100-DSA-Interview-Questions', icon: 'fas fa-list-ol' },
            { name: 'NeetCode Roadmap', url: 'https://neetcode.io/roadmap', icon: 'fas fa-road' },
            { name: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/', icon: 'fas fa-laptop-code' },
            { name: 'HackerRank', url: 'https://www.hackerrank.com/dashboard', icon: 'fas fa-star' }
        ],
        fullstack: [
            { name: 'FrontendMasters', url: 'https://frontendmasters.com/', icon: 'fas fa-laptop-code' },
            { name: 'Scrimba', url: 'https://scrimba.com/', icon: 'fas fa-video' },
            { name: 'Heroku', url: 'https://www.heroku.com/', icon: 'fas fa-cloud' },
            { name: 'MongoDB Atlas', url: 'https://www.mongodb.com/atlas', icon: 'fas fa-database' },
            { name: 'GitHub', url: 'https://github.com/', icon: 'fab fa-github' },
            { name: 'Google Colab', url: 'https://colab.research.google.com/', icon: 'fas fa-code-branch' }
        ],
        practice: [
            { name: 'IndiaBix (Aptitude)', url: 'https://www.indiabix.com/aptitude/questions-and-answers/#google_vignette', icon: 'fas fa-brain' },
            { name: 'IndiaBix (Logical Reasoning)', url: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/#google_vignette', icon: 'fas fa-puzzle-piece' },
            { name: '10FastFingers (Typing)', url: 'https://10fastfingers.com/typing-test/english/', icon: 'fas fa-keyboard' },
            { name: 'Sanfoundry (Cloud Computing)', url: 'https://www.sanfoundry.com/1000-cloud-computing-questions-answers/', icon: 'fas fa-cloud' },
            { name: 'TechnicalHub (Capgemini Prep)', url: 'https://technicalhub.io/capgemini/', icon: 'fas fa-briefcase' }
        ],
        additional: [
            { name: 'Educative', url: 'https://www.educative.io/', icon: 'fas fa-book' },
            { name: 'GitHub Student Pack', url: 'https://education.github.com/pack', icon: 'fab fa-github' },
            { name: 'Coursera', url: 'https://www.coursera.org/', icon: 'fas fa-graduation-cap' },
            { name: 'Codédex', url: 'https://www.codedex.io/home', icon: 'fas fa-code' }
        ]
    };

    // Deadlines - Modify these dates
    const deadlines = [
        { month: 'Month 1', goal: 'Master arrays, strings, linked lists' },
        { month: 'Month 2', goal: 'Trees, graphs, dynamic programming' },
        { month: 'Month 3', goal: 'Complete 2 full-stack projects' }
    ];

    // Initialize resources
    function initResources() {
        for (const category in resources) {
            const container = document.getElementById(`${category}-links`);
            resources[category].forEach(resource => {
                const link = createElement('a', ['resource-item'], {
                    href: resource.url,
                    target: '_blank'
                });
                
                link.innerHTML = `
                    <i class="${resource.icon}"></i>
                    <span style="margin-left: 10px">${resource.name}</span>
                `;
                container.appendChild(link);
            });
        }
    }

    // Initialize deadlines
    function initDeadlines() {
        const list = document.getElementById('deadline-list');
        deadlines.forEach(deadline => {
            const item = createElement('li', [], {}, `
                <strong>${deadline.month}:</strong> ${deadline.goal}
            `);
            list.appendChild(item);
        });
    }

    // Days counter
    function updateDaysCounter() {
        const startDate = new Date();
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 6);
        
        const diff = endDate - startDate;
        document.getElementById('days').textContent = 
            Math.ceil(diff / (1000 * 60 * 60 * 24));
    }

    // Helper function to create elements
    function createElement(tag, classes = [], attributes = {}, html = '') {
        const el = document.createElement(tag);
        el.classList.add(...classes);
        Object.entries(attributes).forEach(([key, value]) => {
            el.setAttribute(key, value);
        });
        el.innerHTML = html;
        return el;
    }

    // Note saving functionality
    const noteInput = document.getElementById('note-input');
    noteInput.value = localStorage.getItem('dailyNote') || '';
    
    noteInput.addEventListener('input', () => {
        localStorage.setItem('dailyNote', noteInput.value);
    });

    // Initialize all components
    initResources();
    initDeadlines();
    updateDaysCounter();
});