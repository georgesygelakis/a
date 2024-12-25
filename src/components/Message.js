import { RELATIONSHIP_IMAGES } from '../utils/constants.js';

export function Message({ content, isUser, relationship }) {
    if (isUser) {
        return `
            <div class="flex justify-end mb-4">
                <div class="bg-blue-500 text-white rounded-lg p-4 max-w-[80%] shadow">
                    ${content}
                </div>
            </div>
        `;
    }

    return `
        <div class="flex items-start justify-start mb-4 gap-3">
            <img 
                src="${RELATIONSHIP_IMAGES[relationship]}" 
                alt="Assistant" 
                class="w-8 h-8 rounded-full mt-1"
            />
            <div class="bg-white dark:bg-gray-700 dark:text-white rounded-lg p-4 max-w-[80%] shadow">
                ${content}
            </div>
        </div>
    `;
}