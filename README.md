#### E-Learning Management System

##### Core Tech

1. `ruby 2.6.3`
2. `rails 6.0.2.2`
3. `react 16.13.1`
4. `bootstrap 4.4.1`

##### How to `Run` it,

Clone this repository,
1. Use one of `ruby` version managers, like `rvm` or `rbenv` 
2. Create and use a new `gemset` it possible
3. Run `bundle install` once you are in the project `directory`
4. See `database_example.yml`, copy it `database.yml` can connect to your `database` with right credentials like `username` and `password`
5. Run `rails db:create` & `rails db:migrate` (check for any error on the way!)
6. Finally run, `rails s`, Hurray!

##### Goals

###### Learning Pointers

- `react.js`

###### TODO

1. More `test` code coverage
2. Integrate `deployment` tool like `capistrano` for easier deployments
3. `CI/CD` integration
4. Better understanding on `react.js`

Notes:
* Make sure your default `3000` port is free, if not you can free it, or config app-server `puma` to run on another port.
