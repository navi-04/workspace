document.addEventListener('DOMContentLoaded', function() {
    const eventContainer = document.getElementById('event-boxes');
    const levelSearch = document.getElementById('level-search');
    const searchBtn = document.getElementById('search-btn');
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const submitPassword = document.getElementById('submit-password');
    const passwordError = document.getElementById('password-error');
    const mainContent = document.getElementById('main-content');
    const searchContainer = document.querySelector('.search-container');
    
    // Password verification logic
    submitPassword.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Focus on password input when page loads
    passwordInput.focus();
    
    function checkPassword() {
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === sitePasscode) {
            // Correct password - show content
            passwordOverlay.classList.add('hidden');
            
            // Remove blur from content with slight delay for smooth transition
            setTimeout(() => {
                mainContent.classList.remove('blurred');
                searchContainer.classList.remove('blurred');
                
                // Remove overlay completely after transition
                setTimeout(() => {
                    passwordOverlay.style.display = 'none';
                }, 500);
            }, 300);
            
        } else {
            // Incorrect password
            passwordError.textContent = "Incorrect passcode. Please try again.";
            passwordInput.value = "";
            
            // Shake effect for error
            passwordInput.classList.add('shake');
            setTimeout(() => {
                passwordInput.classList.remove('shake');
            }, 500);
        }
    }
    
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
        
        // Add steps if they exist
        if (event.steps && event.steps.length > 0) {
            const stepsContainer = document.createElement('div');
            stepsContainer.className = 'steps-container';
            
            const stepsTitle = document.createElement('h3');
            stepsTitle.className = 'steps-title';
            stepsTitle.textContent = 'Steps to Complete';
            stepsContainer.appendChild(stepsTitle);
            
            const stepsList = document.createElement('ol');
            stepsList.className = 'steps-list';
            
            event.steps.forEach(step => {
                const stepItem = document.createElement('li');
                stepItem.className = 'step-item';
                
                const stepTitle = document.createElement('div');
                stepTitle.className = 'step-title';
                stepTitle.textContent = step.title;
                stepItem.appendChild(stepTitle);
                
                const stepDescription = document.createElement('div');
                stepDescription.className = 'step-description';
                stepDescription.textContent = step.description;
                stepItem.appendChild(stepDescription);
                
                stepsList.appendChild(stepItem);
            });
            
            stepsContainer.appendChild(stepsList);
            content.appendChild(stepsContainer);
        }
        
        return box;
    }
});
