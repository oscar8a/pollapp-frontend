## DIS OR DAT Polling application

This is an Application where User can create a poll prompting a question and two options. All users can see all polls and vote on the poll that they wish to participate in. Results will be accessible once the poll is closed.

### 


### Usage

You also provide the 2 options you want user to vote on. All users that navigate through the main page of the app will be able to see all the polls created by all users. The cards on the main page will show how many votes have been casted on that poll, will have buttons, depending on the user, to cast a vote or to close the poll. After a poll is closed (either by the user or when the time the poll was set to run expires) it will allow you to see the results. 


### Technologies

##Front-End
- [React](https://reactjs.org/docs/getting-started.html)
- [Semantic UI React](https://react.semantic-ui.com/)

##Back-End
- [Ruby on Rails](https://rubyonrails.org)
- [PostgreSQL](https://www.postgresql.org)
- Auth using [JWT](https://jwt.io) and [bcrypt ](https://rubygems.org/gems/bcrypt/versions/3.1.12)
- [Sidekiq](https://sidekiq.org/)
- [Redis](https://redis.io/)


### Installation
First, I will begin with the Back end setup. The repo for that is here: [Back-End Polling App](https://github.com/ozkr8a/pollapp-backend)

Setting up the Rails API:
1. Start up the Rails Server ### `rails server`
2. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This is for the Front end part only.
