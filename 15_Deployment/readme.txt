1 - Download Heroku
2 - Login to Heroku 

----------------------------------------------------------------

For deployment, we made two changers in package.json
 
1 - heroku runs our file using command -- npm start
so we added start in the scripts

2 - we defined node version we are using in the engines section

----------------------------------------------------------------

1 - Download Git
2 - Initialize th Repo
3 - .gitignore - to ignore nodemodules
4 - stage and commit 

----------------------------------------------------------------

1 - On CLI --> Heroku create appName[optional] - to creates application in heroku and creates git remote in our local git environment.
2 - git remote -v --> Check Remote Repos
3 - git push heroku master -- to push code to application if any changes are made.

----------------------------------------------------------------

1 - Setting Environment Variables by:
    heroku config: set envVar=Value

----------------------------------------------------------------

- Adding MongoDB to our application
    1 - Go to dashboard of Heroku and click on the applicationname
    2 - Go to add on's and add whatever you want to add to the application

- Alternative
    1 - Go to Mlab.com 
    2 - Create New
    3 -  
