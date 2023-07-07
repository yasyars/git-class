const wait = time => new Promise(resolve => setTimeout(resolve, time));

// Asynchronous function that fetches data from the JSONPlaceholder API
async function fetchData() {
    try {
      const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
  
      await wait(3000)
  
      return data; // Return the data as a resolved Promise
    } catch (error) {
      throw error; // Throw the error to reject the Promise
    }
  }
  
// Calling the async function
async function main() {
    try {
        //nggak ada await
        const result = await fetchData();
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the main function
main();
