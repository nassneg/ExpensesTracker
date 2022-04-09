# ExpenseTracker

> A MERN stack Application for the expense tracking and budgeting.

## Project Link

https://wmdd4936-anastasia.herokuapp.com/

## How to build and run the application

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run start
```

### Build for production

```bash
cd client
npm run watch
```

## List of Features

    - Add Expenses;
    - Delete Expenses;
    - Track the Total amount of money on the Balance;
    - Filter Transactions by Category;
    - Store all of the transactions in MongoDB;

## How to use

    1. Scroll down to the bottom of the application;
    2. Fill out the form with the information about your last transaction;
    3. If you want to register income -> write the positive number in the amount field;
    4. If you have spent some amount of money -> write the negative number;
    5. Don't forget to choose the category;
    6. Press "Add transaction" button;
    7. Verify that in the history section there is a transaction, that you have created not so long ago;
    8. Proceed on creating more transactions;
    9. All of the transactions can be filtered in the Categories section.

## Api documentation

### Endpoints

#### GET /api/v1/transactions

Get the list of all transactions from MongoDB;

Response:
    [
        {
            "_id": "6250eb982469abe7b5d12fa9",
            "text": "Meat",
            "amount": -12,
            "category": "food",
            "createdAt": "2022-04-09T02:12:40.423Z",
            "__v": 0
        },
        {
            "_id": "6250ebf12469abe7b5d12fb0",
            "text": "Salary",
            "amount": 4000,
            "category": "personal",
            "createdAt": "2022-04-09T02:14:09.920Z",
            "__v": 0
        }
    ]

#### GET /api/v1/transactions/<category>

Get the list of transactions filtered by category;

Response:
    [
        {
            "_id": "6250eb982469abe7b5d12fa9",
            "text": "Meat",
            "amount": -12,
            "category": "food",
            "createdAt": "2022-04-09T02:12:40.423Z",
            "__v": 0
        },
        {
            "_id": "6250f20f13df8b058a3f43cb",
            "text": "Fish",
            "amount": -120,
            "category": "food",
            "createdAt": "2022-04-09T02:40:15.494Z",
            "__v": 0
        }
    ]

#### DELETE /api/v1/transactions/<id>

Delete one transactions from the DB;

Response:
        {
            "acknowledged": true,
            "deletedCount": 1
        }

#### POST /api/v1/transactions

Create a new transaction records in the DB

Response:
        {
            "data": {
                "text": "Steak",
                "amount": -90,
                "category": "food",
                "_id": "62511d6148c4bb9485bf634f",
                "createdAt": "2022-04-09T05:45:05.650Z",
                "__v": 0
            }
        }

Body:  
        {
            "text": "Steak",
            "amount": -90,
            "category": "food"
        }

## App Info

### Author

Anastasia Snegur

### Copyright (Resources, that I used while coding )

    - https://www.youtube.com/watch?v=KyWaXA_NvT0
    - https://ru.reactjs.org/docs/context.html
