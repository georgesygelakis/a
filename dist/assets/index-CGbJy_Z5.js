(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function m(){(localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&document.documentElement.classList.add("dark"),window.toggleDarkMode=()=>{const t=document.documentElement.classList.toggle("dark");localStorage.theme=t?"dark":"light"}}const l={Friend:"https://cdn-icons-png.flaticon.com/512/1000/1000667.png",Partner:"https://cdn-icons-png.flaticon.com/512/2750/2750832.png",Family:"https://cdn-icons-png.flaticon.com/512/1000/1000671.png"};function f({content:t,isUser:e,relationship:o}){return e?`
            <div class="flex justify-end mb-4">
                <div class="bg-blue-500 text-white rounded-lg p-4 max-w-[80%] shadow">
                    ${t}
                </div>
            </div>
        `:`
        <div class="flex items-start justify-start mb-4 gap-3">
            <img 
                src="${l[o]}" 
                alt="Assistant" 
                class="w-8 h-8 rounded-full mt-1"
            />
            <div class="bg-white dark:bg-gray-700 dark:text-white rounded-lg p-4 max-w-[80%] shadow">
                ${t}
            </div>
        </div>
    `}function p(){return`
        <button
            onclick="toggleDarkMode()"
            class="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
        >
            <svg class="w-6 h-6 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
            </svg>
            <svg class="w-6 h-6 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
        </button>
    `}function h({messages:t,relationship:e}){return`
        <div class="max-w-3xl mx-auto p-4">
            <h1 class="text-3xl font-bold text-center mb-8 dark:text-white">Gift Finder Assistant</h1>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 h-[60vh] overflow-y-auto">
                ${t.map(o=>f({content:o.content,isUser:o.role==="user",relationship:e})).join("")}
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
        ${p()}
    `}function b({type:t,image:e,isSelected:o}){return`
        <div 
            class="relationship-block cursor-pointer transition-transform hover:scale-105 ${o?"ring-4 ring-blue-500":""}"
            data-type="${t}"
        >
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 text-center">
                <img src="${e}" alt="${t}" class="w-24 h-24 mx-auto mb-4">
                <h3 class="text-lg font-semibold dark:text-white">${t}</h3>
            </div>
        </div>
    `}function y(){return`
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
                        ${[{type:"Friend",image:l.Friend},{type:"Partner",image:l.Partner},{type:"Family",image:l.Family}].map(e=>b({type:e.type,image:e.image,isSelected:!1})).join("")}
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
    `}const u=document.querySelector("#app"),i=[];let g=!1,d="";function v(){m(),g?s():w()}function w(){u.innerHTML=y(),x()}function x(){const t=document.getElementById("initial-form"),e=document.querySelectorAll(".relationship-block"),o=document.getElementById("relationship");e.forEach(a=>{a.addEventListener("click",()=>{e.forEach(r=>r.classList.remove("ring-4","ring-blue-500")),a.classList.add("ring-4","ring-blue-500"),o.value=a.dataset.type,d=a.dataset.type})}),t==null||t.addEventListener("submit",k)}function k(t){t.preventDefault();const e=document.getElementById("age").value,o=document.getElementById("budget").value;!e||!o||!d||(i.push({role:"assistant",content:`Hello! I'm your gift-finding assistant. I see you're looking for a gift for your ${d.toLowerCase()} who is ${e} years old, with a budget of $${o}. What's the occasion for the gift?`}),g=!0,s())}function s(){var e;u.innerHTML=h({messages:i,relationship:d});const t=u.querySelector(".overflow-y-auto");t.scrollTop=t.scrollHeight,(e=document.getElementById("chat-form"))==null||e.addEventListener("submit",E)}async function E(t){t.preventDefault();const e=document.getElementById("user-input"),o=e.value.trim();if(o){i.push({role:"user",content:o}),e.value="",s();try{const a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:i})});if(!a.ok)throw new Error("Network response was not ok");const r=await a.json();i.push({role:"assistant",content:r.content}),s()}catch(a){console.error("Error:",a),i.push({role:"assistant",content:"Sorry, there was an error processing your request."}),s()}}}v();
