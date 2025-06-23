try {
  // Get the response body as a string and parse it into a JavaScript object
  let obj = JSON.parse($response.body);

  // Check if the 'top_replies' key exists in the object and is an array
  if (obj && obj.top_replies && Array.isArray(obj.top_replies)) {
    // Set the value of 'top_replies' to an empty array
    obj.top_replies = [];
    console.log('Successfully cleared top_replies.');
  }

  // Convert the modified JavaScript object back into a JSON string
  // and assign it back to the response body
  $done({ body: JSON.stringify(obj) });

} catch (e) {
  // If any error occurs (e.g., JSON parsing failed), log the error
  // and pass through the original response body without crashing
  console.log('clear-top-replies.js script error: ' + e);
  $done({});
}
