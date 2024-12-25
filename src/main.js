import './style.css';
import { initDarkMode } from './utils/darkMode.js';
import { ChatInterface } from './components/ChatInterface.js';
import { InitialForm } from './components/InitialForm.js';
import { DarkModeToggle } from './components/DarkModeToggle.js';

const app = document.querySelector('#app');
const messages = [];
let showingChat = false;
let selectedRelationship = '';

function initializeApp() {
    initDarkMode();
    if (!app) return;
    renderApp();
}

function renderApp() {
    if (!app) return;
    
    // Clear previous content
    app.innerHTML = '';

    // Add dark mode toggle
    app.innerHTML = DarkModeToggle();

    // Add main content
    app.innerHTML += showingChat 
        ? ChatInterface({ messages, relationship: selectedRelationship })
        : InitialForm();

    if (!showingChat) {
        setupFormHandlers();
    } else {
        setupChatHandlers();
        // Scroll to bottom of chat
        const chatContainer = document.querySelector('.overflow-y-auto');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }
}

function setupFormHandlers() {
    const form = document.getElementById('initial-form');
    const relationshipBlocks = document.querySelectorAll('.relationship-block');
    const relationshipInput = document.getElementById('relationship');

    relationshipBlocks.forEach(block => {
        block.addEventListener('click', () => {
            relationshipBlocks.forEach(b => b.classList.remove('ring-4', 'ring-blue-500'));
            block.classList.add('ring-4', 'ring-blue-500');
            relationshipInput.value = block.dataset.type;
            selectedRelationship = block.dataset.type;
        });
    });

    form?.addEventListener('submit', handleInitialSubmit);
}

function handleInitialSubmit(e) {
    e.preventDefault();
    const age = document.getElementById('age')?.value;
    const budget = document.getElementById('budget')?.value;
    
    if (!age || !budget || !selectedRelationship) return;

    messages.push({ 
        role: 'assistant', 
        content: `Hello! I'm your gift-finding assistant. I see you're looking for a gift for your ${selectedRelationship.toLowerCase()} who is ${age} years old, with a budget of $${budget}. What's the occasion for the gift?`
    });

    showingChat = true;
    renderApp();
}

function setupChatHandlers() {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    
    if (userInput) {
        userInput.setAttribute('autocomplete', 'off');
    }
    
    chatForm?.addEventListener('submit', handleChatSubmit);
}

async function handleChatSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('user-input');
    if (!input) return;
    
    const userMessage = input.value.trim();
    if (!userMessage) return;

    messages.push({ role: 'user', content: userMessage });
    input.value = '';
    renderApp();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages }),
        });

        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        messages.push({ role: 'assistant', content: data.content });
        renderApp();
    } catch (error) {
        console.error('Error:', error);
        messages.push({ role: 'assistant', content: 'Sorry, there was an error processing your request.' });
        renderApp();
    }
}

// Initialize the app when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}