# Gamergeek

![public/images/gamer](public/img/Gamer.png)

This is a single page app, a game where player needs to guess Video Game title based on 3 screenshots.
Player can get hints, maximum 3 per one question. Player has 60 seconds to guess as much game titles as possible.
Players score and name is stored in external database.

# Task Objectives

Use game database from https://rawg.io/ API

Main functionality:

- Player sets username and game difficulty: EASY, MEDIUM, HARD
- Game loads 3 screenshots per one question
- Player can choose between 4 possible answers
- Player can get a hint, but no more ten 3 per one question
- Player can skip answer and load new question
- Player can always quit the game
- Player gets points based on response speed and hints used
- Main counter cannot run while loading is on
- When the game is over, show summary with players statistics
- Use MongoDB to store players scores
- Add SCORE LEADERBOARD and HELP subpages
- Make simple REST API with express and Mongoose to collect games info and players scores

You should use Next.js and SSR. Any other libraries are most welcome.

# Downloading code and running on your machine

Make sure You installed the latest version of [Git](https://git-scm.com/downloads) and [NodeJS with npm](https://nodejs.org/en/download/).
Open your terminal, enter the folder of your choice or create new one and type:
```
git clone https://github.com/cerassus/gamergeek-nextjs.git
cd gamergeek-nextjs
npm install
npm run dev
```
Open your browser and enter the address "localhost:3000"

# Website link on the server

https://gamergeek.cerassus.eu/ 

# Used Technologies

![public/images/tech1](https://cerassus.eu/img/tech/mini/next.png)
![public/images/tech2](https://cerassus.eu/img/tech/mini/redux.png)
![public/images/tech3](https://cerassus.eu/img/tech/mini/styled.png)
![public/images/tech4](https://cerassus.eu/img/tech/mini/mongo.png)
