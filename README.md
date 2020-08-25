## Using

### With docker-compose
**Prerequisitis**
- docker 
- docker-compose
- git

**Run**
- `git clone https://github.com/ahmedsalihh/survey.git`
- go to app directory
- run `docker-compose up` command

App will start at localhost:80

### Manuel
**Prerequisitis**
- node latest version
- yarn
- java 8 or above
- mysql 5.7
- intellij
- vscode

**Run**
1. DB
   - install mysql server (either docker or locallly)
   - connect to database and execute scripts in init.sql inside init folder

2. Backend
    - open project with Intellij
    - set env variables by editing configurations
    - SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/survey?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false
   SPRING_DATASOURCE_USERNAME=survey
   SPRING_DATASOURCE_PASSWORD=survey
    - run app

App will start at localhost:8080

3. Frontend
   - go to survey-frontend folder
   - run `yarn install` command
   - run `yarn start` command

App will start at localhost:3000



