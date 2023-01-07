# FILES APP

**In this app you can host files and directories in your own local network** 
## Table of contents
* [Project Installation Linux & Windows](#project-installation-linux--windows)
* [Run on development setup](#run-on-development--setup)
	* [Database](#database)
	* [Backend](#backend)
	* [Frontend](#frontend)
* [Run on production setup](#run-on-production-setup)
	* [Database](#database-1)
	* [Backend](#backend-1)
	* [Frontend](#frontend-1)
* [Credits](#credits)

## Project Installation Linux & Windows
**First you must have installed some packages:**  *[nodejs](https://nodejs.org/es/), [npm](https://www.npmjs.com/), [mysql](https://www.mysql.com/downloads/), [git](https://git-scm.com/)*

These packages are strictly necessary for setup the project, you can install from these links on **Windows** but in **Linux** you must install by your CLI  package manager, such as **[pacman](https://wiki.archlinux.org/title/pacman)**  or  **[apt](https://es.wikipedia.org/wiki/Advanced_Packaging_Tool)**.


First clone the repository:  
```bash 
git clone https://github.com/angelsornichero/FilesApp.git
```

Afterwards cd to the repository and install the dependencies:
```bash 
cd FilesApp
# Install backend dependencies
cd server
npm i
# Install client dependencies
cd ../client # On windows ..\client
npm i
# Return to the principal directory
cd .. 
```
##  Run on development  setup
I don't recommend this mode unless you want to change the source code or the css or whatever you want.
### Database
```bash 
cd db
mysql -u <YourUser> -p < db.sql
cd ..
```
### Backend
```bash 
cd server
```
Before do this command you must edit **sample.env** and write the variables, when you finished you must change the name of the file to **.env**. Then you are able to continue.

``` bash
npm run dev
```
### Frontend
```bash 
cd client
```
Before do this command you must edit **next.config.js** and write the variables. Then you are able to continue.
``` bash
npm run dev
```
## Run on production setup
I recommend this mode for use it in your home, because is faster and it is more optimizated.
### Database
```bash 
cd db
mysql -u <YourUser> -p < db.sql
cd ..
```
### Backend
```bash 
cd server
```
Before do this command you must edit **sample.env** and write the variables, when you finished you must change the name of the file to **.env**. Then you are able to continue.

``` bash
npm start
```
### Frontend
```bash 
cd client
```
Before do this command you must edit **next.config.js** and write the variables. Then you are able to continue.
``` bash
npm run build
npm start
```
## Credits
All the credits are for Angel Sornichero that is the owner of this repository. If you want contact me write me an email that is in my profile.
