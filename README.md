# hello-rails-react

An introductive project that demonstrates how react can be integrated with rails project.


# Built With

- HTML5
- CSS3
- React
- Redux
- Webpack
- Rails
- Postgresql
- Ruby
- JavaScript


## Getting Started

To get this program running on your computer,

1. Install **Ruby**
2. Install **postgres** database engine
2. Clone the project repository ([link](../../))

### To setup your environment frameworks, run
  ```
    $ bundle install
    
    $ npm install
  ```

### To setup both testing and development databases
  Create a _**`.env`**_ file in the root directory of the app, and then add this
  ```
    DB_USERNAME = <USERNAME_THAT_WORKS_WITH_SETUP_POSTGRES_DATABASE>
    DB_PASSWORD = <PASSWORD_ASSOCIATED_WITH_THE_POSTGRES_USERNAME>
  ```

  I've come across weird scenarios where certain routines would result in errors on Windows platform when 
  they work fine on other platforms. So, I've chosen those that are more likely to succeed.
  ```
    > rake db:create
    > rake db:migrate
  ```

  For Linux and macOS platforms
  ```
    $ rake db:prepare
  ```

### To run local server
  ```
    $ rails s
  ```


## Authors

👤 **Steve**

- GitHub: [@sntakirutimana72](https://github.com/sntakirutimana72/)
- LinkedIn: [steve-ntakirutimana](https://www.linkedin.com/in/steve-ntakirutimana/) 

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Fellow Micronauts

## 📝 License

This project is [MIT](./LICENSE) licensed.
