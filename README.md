# fiTrac-frontend
angular frontend for financial tracking application

## General Approach: 
My goal here is to create a financial tracking and budgeting application.


## My Entity Relationship Diagram (ERD):
![](./UltimateTeam.png)

## User Stories
- As a user, I should be able to create a income or multiple incomes
- As a user, I should be able to give my income(s) a amount and description
- As a user, I should be able to create a expense or multiple expenses
- As a user, I should be able to give my expense(s) a amount and description
- As a user, I should be able to create many incomes and expenses
- As a user, I should have access to CRUD methods for all incomes/expenses
- As a user, I should be able to see my total budget reflect my incomes/expenses

## Endpoints

### Income Endpoints
| ENDPOINT | FUNCTIONALITY | ACCESS |
| --- | :--- | :--- |
| POST _/budget/income/create_ | Create a Income | PUBLIC |
| PUT _/budget/income/update/{id}_ | Update a Income| PUBLIC |
| GET _/budget/income/all | Get All Income | PUBLIC |
| GET _/budget/income/find/{id}_ | Get A Income | PUBLIC |
| DELETE _/budget/income/delete/{id}_ | DELETE A Income | PUBLIC |

### Expense Endpoints
| ENDPOINT | FUNCTIONALITY | ACCESS |
| --- | :--- | :--- |
| POST _/budget/expense/create_ | Create a Expense | PUBLIC |
| PUT _/budget/expense/update/{id}_ | Update a Expense| PUBLIC |
| GET _/budget/expense/all | Get All Expense | PUBLIC |
| GET _/budget/expense/find/{id}_ | Get A Expense | PUBLIC |
| DELETE _/budget/expense/delete/{id}_ | DELETE A Expense | PUBLIC |


## Technology used:

- Java
- Spring
- PostgreSQL
- Lucid for ERD
- Postman for testing endpoints
- Angular JS, SCSS, HTML, Angular Material, Bulma, 
- Heroku

## Challenges:
I encountered a many issues deploying and figuring out what components to apply my crud services for the frontend

