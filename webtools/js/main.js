// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', '/components/header.html');
    loadComponent('footer-placeholder', '/components/footer.html');
    initializeSearch();
    loadTools();
});

// Load HTML components
async function loadComponent(elementId, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${path}:`, error);
    }
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-tools');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterTools(searchTerm);
        });
    }
}

// Filter tools based on search term
function filterTools(searchTerm) {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        const isVisible = title.includes(searchTerm) || description.includes(searchTerm);
        card.style.display = isVisible ? 'block' : 'none';
    });
}

// Load tools from tools-data.js
async function loadTools() {
    const toolsContainer = document.getElementById('tools-container');
    if (!toolsContainer) return;

    try {
        const tools = await getTools();
        displayTools(tools, toolsContainer);
        initializeCategories(tools);
    } catch (error) {
        console.error('Error loading tools:', error);
    }
}

// Display tools in the container
function displayTools(tools, container) {
    container.innerHTML = tools.map(tool => createToolCard(tool)).join('');
}

// Create HTML for tool card
function createToolCard(tool) {
    return `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="tool-card card h-100" data-category="${tool.category}">
                <div class="card-body">
                    <h5 class="card-title">${tool.name}</h5>
                    <p class="card-text">${tool.description}</p>
                    <a href="${tool.url}" class="btn btn-primary">Use Tool</a>
                </div>
            </div>
        </div>
    `;
}

// Initialize category filtering
function initializeCategories(tools) {
    const categories = document.querySelectorAll('#tools-categories .nav-link');
    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedCategory = e.target.getAttribute('href').replace('#', '');
            filterByCategory(selectedCategory);
            
            // Update active state
            categories.forEach(cat => cat.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

// Filter tools by category
function filterByCategory(category) {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.parentElement.style.display = 'block';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Handle ad spaces
function initializeAds() {
    const adSpaces = document.querySelectorAll('.ad-space');
    adSpaces.forEach(space => {
        // Add your ad code here
        space.innerHTML = '<div class="text-center">Advertisement Space</div>';
    });
}

// Utility function to handle API errors
function handleError(error, message = 'An error occurred') {
    console.error(message, error);
    // You can implement user-facing error messages here
}

// Add smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}); 