// Team object with information
const team = {
    name: "Team XYZ",
    game: "Example Game",
    captain: "John Doe",
    members: [
      "Member 1",
      "Member 2",
      "Member 3"
    ]
  };
  
  // Function to display team information
  function displayTeamInfo() {
    const teamDetails = document.getElementById("team-details");
    teamDetails.innerHTML = ""; // Clear previous details
  
    const teamName = document.createElement("p");
    teamName.textContent = "Team Name: " + team.name;
  
    const game = document.createElement("p");
    game.textContent = "Game: " + team.game;
  
    const captain = document.createElement("p");
    captain.textContent = "Captain: " + team.captain;
  
    const membersTitle = document.createElement("h3");
    membersTitle.textContent = "Team Members:";
  
    const membersList = document.createElement("ul");
    team.members.forEach(member => {
      const listItem = document.createElement("li");
      listItem.textContent = member;
      membersList.appendChild(listItem);
    });
  
    teamDetails.appendChild(teamName);
    teamDetails.appendChild(game);
    teamDetails.appendChild(captain);
    teamDetails.appendChild(membersTitle);
    teamDetails.appendChild(membersList);
  }
  
  // Call function to display team information when the page loads
  displayTeamInfo();
  