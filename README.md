# Assignment-Xiv-Tech

A Node.js server that fetches real-time weather data for multiple cities using the OpenWeatherMap API.

### Installation

1. Clone the repository - ```git clone https://github.com/your-username/your-repo.git```
2. Navigate to project director - ```cd your-repo```
3. Install the required dependencies - ```npm install```

   Note - If dependencies are not installed properly the use command ```npm install express``` and ```npm install axios``` separately, then proceed further.

### Usage

1. Start the server - ```node index.js```
2. Create a new request on Postman (or anything) by using the URL - ```http://localhost:3000/getWeather```

   Replace "http://localhost:3000" with the appropriate URL if your server is running on a different port or host.

3. In the request body, select the "raw" option and enter a JSON payload with the list of cities you want to fetch weather data for:

   ```
   {
     "cities": ["toronto", "mumbai", "london"]
   }
   ```

4. Click the "Send" button to make the POST request.

### API KEY
1. To use the OpenWeatherMap API, you need to obtain an API key. Replace 'YOUR_API_KEY' in the code with your actual API key. The key can be easily obtained by going to this ```https://openweathermap.org/api``` site and then signing up to get the API Key.
