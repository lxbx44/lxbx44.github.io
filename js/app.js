const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');
    
    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

const lastFmUsername = 'YOUR_USERNAME';
const lastFmApiKey = 'YOUR_API_KEY';

// Last.fm API endpoint to fetch top tracks
const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lastFmUsername}&api_key=${lastFmApiKey}&format=json&limit=10`;

// Function to fetch and display top 10 songs
function displayTop10Songs() {
    $.getJSON(apiUrl, function (data) {
        const topTracks = data.toptracks.track;

        // Create a list to hold the top 10 songs
        const topSongsList = $('<ul>');

        // Loop through the top tracks and create list items for each song
        topTracks.forEach((track) => {
            const listItem = $('<li>');
            listItem.text(`${track.name} by ${track.artist.name}`);
            topSongsList.append(listItem);
        });

        // Append the list to the top10SongsDiv
        $('#top10SongsDiv').append(topSongsList);
    });
}

// Call the function to display top 10 songs
displayTop10Songs();


