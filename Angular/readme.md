## Install Angular CLI: 

Required : Node JS (v10.9.0 or later) `node -v`

1. Install the Angular CLI :  `npm install -g @angular/cli`

2. Create a workspace and initial application : `ng new my-app`

3. Run the application : 
    - Go to the workspace folder (my-app) : `cd my-app`
    - Launch  the server by using the CLI command ng serve, with the --open option : `ng serve --open`


ERROR : Can not find module “@angular-devkit/build-angular”

Tried : https://stackoverflow.com/questions/50333003/could-not-find-module-angular-devkit-build-angular

`>npm install --save-dev @angular-devkit/build-angular`

`npm update`

WARNING : Your global Angular CLI version (8.3.19) is greater than your local
version (7.0.7). The local Angular CLI version is used.

TRIED : https://stackoverflow.com/questions/44525746/global-angular-cli-version-greater-than-local-version
`npm install --save-dev @angular/cli@latest`

ERROR :  Could not find the implementation for builder @angular-devkit/build-angular:dev-server
F : `ng update @angular/cli @angular/core`