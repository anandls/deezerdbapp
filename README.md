## Frontend + Server app - Consume Deezer music API

- The solution consists of a front end React app (CRA) and a basic Node (with Express) application that fetches data from the Deezer API.

## Client
    - The solution fetches from a third party API (https://developers.deezer.com/api) that provides music related data. 
    - The application consists of two routes with an initial component showing a list of tracks, with a search input.
    - A second component, shows details of an artist based on a selection/clickthrough. 
## Server
    - The Node application fetches search and artist related data from the Deeezer API and in turn provides data to the front end.

## Table of contents

  - [Overview](#overview)
  - [Running the application](#run)

## Overview

The project consists of the structure below, for the main components:

```
    root
        client
            src            
                ├── pages    
                ├── components
                        | └── Artist
                        |_____Tracks
                ├── api
                ├── styles
                ├── constants
                App.jsx
        clientserver
                
        server
            src    
                ├── Tracks
                    └── controllers
                            |   |____artists.ts
                            |____search.ts            
                ├── constants
            index.ts
        README.md
        package.json
    package.json
```

## Run

Please clone the repo to your machine

### Steps to build and run
1. `npm install` 
2. `cd client && npm install && npm run build` 
3. `cd clientserver && npm install` 
4. `cd ../../` (back to root directory) 
5. `cd server && npm install` 
6. `cd ..` (back to root directory) 
7. `npm run serve` to start the server and client app
8. Point your browser to `http://localhost:8080` to open the app