# StitchText
A note taking app for ...
<hr>
## Team

  - __Product Owner__: Trevor Healy
  - __Scrum Master__: Sunny Virk
  - __Development Team Members__: [Sunny Virk](https://github.com/isunnyvirk), [Trevor Healy](https://github.com/trevorwhealy), [Steven Lin](https://github.com/hewp), [Sompop Suksawat](https://github.com/ssuksawat)
<hr>

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)
<hr>
## Usage
  Log in and start taking notes
<hr>
## Requirements

- Node 0.10.x
- React
- Redux
- Postgresql 9.1.x
  - ORM
<hr>
## Development

### Installing Dependencies
From within the root directory:
```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)

<hr>
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

<hr>
## Architecture
### High Level Architecture

## API
##### Public End Points
|Request|URL|Response|
|---|---|---|
|Login|/auth/google||
|Logout|/logout| |
|Get folders| /api/folders | foldersObj |
|Get single folder | /api/folders/:folderId | folderObj |
|Get notes | /api/notes | notesObj|
|Get single note | /api/notes/:noteId | noteObj |
|Share API folder | /api/folders/:folderId/share | |
|Share API notes | /api/notes/:noteId/share | |
|User search | /api/users/search | |
|Notifications | /api/notifications | notificationObj |
