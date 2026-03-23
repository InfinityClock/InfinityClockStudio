/**
 * Infinity Clock Studio - Dynamic Theme Switcher
 * Switches between Light and Dark mode based on local time.
 */

function applyTheme() {
    const hours = new Date().getHours();
    const isDayTime = hours >= 6 && hours < 18; // 6 AM to 6 PM
    
    if (isDayTime) {
        document.body.classList.add('light-theme');
        console.log("Theme Update: Light Mode applied (Daytime)");
    } else {
        document.body.classList.remove('light-theme');
        console.log("Theme Update: Dark Mode applied (Nighttime)");
    }
}

// Apply on initial load
document.addEventListener('DOMContentLoaded', applyTheme);

// Re-check periodically if the user keeps the tab open
setInterval(applyTheme, 1000 * 60 * 60); // Check every hour
