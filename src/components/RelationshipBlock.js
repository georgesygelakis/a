export function RelationshipBlock({ type, image, isSelected }) {
    return `
        <div 
            class="relationship-block cursor-pointer transition-transform hover:scale-105 ${isSelected ? 'ring-4 ring-blue-500' : ''}"
            data-type="${type}"
        >
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 text-center">
                <img src="${image}" alt="${type}" class="w-24 h-24 mx-auto mb-4">
                <h3 class="text-lg font-semibold dark:text-white">${type}</h3>
            </div>
        </div>
    `;
}