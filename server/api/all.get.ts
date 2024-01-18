import {H3Event} from "h3";

export default defineEventHandler(async (event:H3Event<Request>) => {
    const endpoint ='https://api.github.com/gists/1740917255dbec3080c1ce8ffa6e6e91'
    return await fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            // Access the 'files' property to get the file content
            const fileContent = data.files['resume.json'].content;

            // Parse the JSON content
            const jsonData = JSON.parse(fileContent);

            return jsonData;
        })
        .catch(error => console.error('Error:', error));
})