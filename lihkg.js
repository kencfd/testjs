/*
 * Filename: clear-top-replies.js
 * CORRECTED VERSION: Accesses top_replies inside the 'response' object.
 */

// Use a try-catch block to handle potential errors safely
console.log('test');
try {
  // Parse the JSON response body into a JavaScript object
  let obj = JSON.parse($response.body);

  // --- THIS IS THE FIX ---
  // First, check if the 'response' object exists, and then check for 'top_replies' inside it.
  if (obj && obj.response && obj.response.top_replies) {
    
    // Set the nested 'top_replies' array to be empty
    obj.response.top_replies = [];

    // Optional: Log a success message to the Quantumult X console for debugging
    console.log('Successfully cleared nested top_replies.');
  }

  // Stringify the modified object and send it back as the new response body
  $done({ body: JSON.stringify(obj) });

} catch (e) {
  // If any error occurs, log it and pass the original response through
  console.log('clear-top-replies.js script error: ' + e);
  $done({});
}
