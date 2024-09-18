let currentPage = 1;
const pageSize = 10;
let playersData = [];
let teamsData = [];

// Fetch player and team data
fetch('http://localhost:3000/players')
    .then(response => response.json())
    .then(data => {
        playersData = data;
        displayTopPlayer(playersData[0]);
        displayPlayers(playersData.slice(0, pageSize));
    });

fetch('http://localhost:3000/teams')
    .then(response => response.json())
    .then(data => {
        teamsData = data;
        populateTeamDropdown(data);
    });

// Display players in the table
function displayPlayers(players) {
    const tableBody = document.querySelector('#player-table tbody');
    tableBody.innerHTML = '';
    players.forEach(player => {
        const team = teamsData.find(team => team.teamCode === player.teamCode);
        const row = `
            <tr>
                <td>${player.rank}</td>
                <td>
                    <img src="https://scores.iplt20.com/ipl/playerimages/${player.name}.png?v=4" alt="${player.name}">
                    ${player.name}
                </td>
                <td><img src="${team.teamLogo}" alt="${team.teamName}"> ${team.teamName}</td>
                <td>${player.totalRuns}</td>
                <td>${player.fours}</td>
                <td>${player.sixes}</td>
                <td>${player.strikeRate}</td>
                <td>${player.fifties}</td>
                <td>${player.centuries}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Display the top player
function displayTopPlayer(player) {
    const team = teamsData.find(team => team.teamCode === player.teamCode);
    document.querySelector('#top-player-img').src = `https://scores.iplt20.com/ipl/playerimages/${player.name}.png?v=4`;
    document.querySelector('#top-player-name').textContent = player.name;
    document.querySelector('#top-runs').textContent = player.totalRuns;
    document.querySelector('#top-matches').textContent = player.matches;
    document.querySelector('#top-strike-rate').textContent = player.strikeRate;
    document.querySelector('#top-fours').textContent = player.fours;
    document.querySelector('#top-sixes').textContent = player.sixes;
}

// Handle pagination (simplified example)
document.querySelector('#next-page').addEventListener('click', () => {
    currentPage++;
    displayPlayers(playersData.slice((currentPage - 1) * pageSize, currentPage * pageSize));
});

document.querySelector('#prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPlayers(playersData.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    }
});

// Populate team filter dropdown
function populateTeamDropdown(teams) {
    const teamFilter = document.querySelector('#team-filter');
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.teamCode;
        option.textContent = team.teamName;
        teamFilter.appendChild(option);
    });
}
