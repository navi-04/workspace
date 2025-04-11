document.addEventListener('DOMContentLoaded', function() {
    const eventContainer = document.getElementById('event-boxes');
    const levelSearch = document.getElementById('level-search');
    const searchBtn = document.getElementById('search-btn');
    
    // Render event boxes
    eventData.forEach((event, index) => {
        const eventBox = createEventBox(event, index);
        eventContainer.appendChild(eventBox);
    });
    
    // Set up search functionality
    searchBtn.addEventListener('click', performSearch);
    levelSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchValue = parseInt(levelSearch.value);
        if (!searchValue || isNaN(searchValue)) {
            alert('Please enter a valid level number');
            return;
        }
        
        // Find card with matching level
        const eventBoxes = document.querySelectorAll('.event-box');
        let foundCard = null;
        
        eventBoxes.forEach(box => {
            // Remove previous highlight if any
            box.classList.remove('highlight-card');
            
            // Get level number from the badge text
            const levelBadge = box.querySelector('.level-badge');
            const level = parseInt(levelBadge.textContent.replace('Level ', ''));
            
            if (level === searchValue) {
                foundCard = box;
            }
        });
        
        if (foundCard) {
            // Scroll to the card
            foundCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Highlight the card
            setTimeout(() => {
                foundCard.classList.add('highlight-card');
            }, 500);
        } else {
            alert(`No event found with level ${searchValue}`);
        }
    }
    
    function createEventBox(event, index) {
        const box = document.createElement('div');
        box.className = 'event-box';
        box.style.animationDelay = `${index * 0.15}s`;
        
        // Level badge
        const levelBadge = document.createElement('div');
        levelBadge.className = 'level-badge';
        levelBadge.textContent = `Level ${event.level}`;
        box.appendChild(levelBadge);
        
        // Content container
        const content = document.createElement('div');
        content.className = 'event-content';
        
        // Topic
        const topic = document.createElement('h2');
        topic.className = 'event-topic';
        topic.textContent = event.topic;
        content.appendChild(topic);
        
        // Description
        const description = document.createElement('p');
        description.className = 'event-description';
        description.textContent = event.description;
        content.appendChild(description);
        
        // Link
        const link = document.createElement('a');
        link.className = 'event-link';
        link.href = event.link;
        link.textContent = 'Link';
        link.target = '_blank';
        content.appendChild(link);
        
        // Prompt box
        const promptBox = document.createElement('div');
        promptBox.className = 'prompt-box';
        
        const promptTitle = document.createElement('div');
        promptTitle.className = 'prompt-title';
        promptTitle.textContent = 'Challenge Prompt';
        promptBox.appendChild(promptTitle);
        
        const promptText = document.createElement('div');
        promptText.textContent = event.prompt;
        promptBox.appendChild(promptText);
        
        content.appendChild(promptBox);
        box.appendChild(content);
        
        return box;
    }
});
