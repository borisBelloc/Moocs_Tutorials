## Install Angular CLI: 

Required : Node JS (v10.9.0 or later) `node -v`

1. Install the Angular CLI :  `npm install -g @angular/cli`

2. Create a workspace and initial application : `ng new my-app`

3. Run the application : 
    - Go to the workspace folder (my-app) : `cd my-app`
    - Launch  the server by using the CLI command ng serve, with the --open option : `ng serve --open`


-----------------------



## Import project from StackBlitz (Instal localy)

S: https://angular.io/start/deployment

1. install the Angular CLI globally : `npm install -g @angular/cli`
2. Create a new Angular CLI workspace using the ng new command : `ng new my-project-name`
3. replace the /src folder with the one from your StackBlitz download, and then perform a build : `ng build --prod`
4. run with : `ng serve --open`


### Memo random commands

`ng generate component <name>`