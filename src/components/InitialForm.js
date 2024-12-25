import { RelationshipBlock } from './RelationshipBlock.js';
import { RELATIONSHIP_IMAGES } from '../utils/constants.js';

export function InitialForm() {
    const relationships = [
        { type: 'Friend', image: RELATIONSHIP_IMAGES.Friend },
        { type: 'Partner', image: RELATIONSHIP_IMAGES.Partner },
        { type: 'Family', image: RELATIONSHIP_IMAGES.Family }
    ];

    return `
        <div class="max-w-3xl mx-auto p-4">
            <h1 class="text-3xl font-bold text-center mb-8 dark:text-white">Gift Finder Assistant</h1>
            <form id="initial-form" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div class="mb-6">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" for="age">
                        Recipient's Age
                    </label>
                    <input 
                        type="number" 
                        id="age" 
                        required
                        min="0"
                        max="120"
                        class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" for="budget">
                        Budget ($)
                    </label>
                    <input 
                        type="number" 
                        id="budget" 
                        required
                        min="1"
                        class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                        Relationship
                    </label>
                    <div class="grid grid-cols-3 gap-4">
                        ${relationships.map(rel => 
                            RelationshipBlock({
                                type: rel.type,
                                image: rel.image,
                                isSelected: false
                            })
                        ).join('')}
                    </div>
                    <input type="hidden" id="relationship" required>
                </div>

                <button 
                    type="submit"
                    class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Start Chat
                </button>
            </form>
        </div>
    `;
}