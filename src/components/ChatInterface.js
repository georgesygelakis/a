import { Message } from './Message.js';

export function ChatInterface({ messages, relationship }) {
    return `
        <div class="max-w-3xl mx-auto p-4">
            <h1 class="text-3xl font-bold text-center mb-8 dark:text-white">Gift Finder Assistant</h1>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 h-[60vh] overflow-y-auto">
                ${messages.map(msg => 
                    Message({ 
                        content: msg.content, 
                        isUser: msg.role === 'user',
                        relationship: relationship
                    })
                ).join('')}
            </div>
            <form id="chat-form" class="flex gap-2">
                <input 
                    type="text" 
                    id="user-input" 
                    class="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Type your response..."
                    autocomplete="off"
                >
                <button 
                    type="submit"
                    class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </form>
        </div>
    `;
}