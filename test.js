
const userProfile = document.getElementById("user-profile");

// Accessing data attributes using dataset
const userId = userProfile.dataset.userId; // "12345"
const userRole = userProfile.dataset.role; // "admin"
const userName = userProfile.dataset.name; // "John Doe"

console.log(`User ID: ${userId}`);
console.log(`User Role: ${userRole}`);
console.log(`User Name: ${userName}`);