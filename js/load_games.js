async function loadGames() {
    // makes games_json global so that it can be accessed by the search bar...
    let games_json = (await (await fetch("games/all.json")).text());
    const games = JSON.parse(games_json);

    const gameDataList = games.map(game => {
      return {
        link: `games/game/${game.slug}`, // Assuming the link should include the slug
        imagePath: game.thumbnail || example_image, // Use example_image if thumbnail is empty
        name: game.name
      };
    });
    createGameContainers(gameDataList);
}

loadGames();
