### Stitch
*A note taking platform for programmers*
<hr>
#### Team

  - __Product Owner__: Trevor Healy
  - __Scrum Master__: Sunny Virk
  - __Development Team Members__: [Sunny Virk](https://github.com/isunnyvirk), [Trevor Healy](https://github.com/trevorwhealy), [Steven Lin](https://github.com/hewp), [Sompop Suksawat](https://github.com/ssuksawat)

<hr>

#### Usage
  Register an account at [StitchText.com](https://www.stitchtext.com), and start taking notes!

  Each account comes preinstalled with 3 introductory notes to get you started:
  1. An example API documentation
  2. Keyboard Shortcuts and Rich Text Editor functionality
  3. Instructions on how to compile your code

<hr>
#### Requirements

- Node 6.x
- Postgres 9.5.x
- Docker 1.1.x

<hr>
#### Development

###### Installing Dependencies
From within the root directory:
```sh
npm install
docker-compose up -d
npm start

```
<hr>
#### Architecture
###### High Level Architecture

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
=======
<img src="https://dl.dropboxusercontent.com/u/43628283/arch.png" width="400">
