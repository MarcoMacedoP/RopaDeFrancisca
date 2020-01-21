#Ropa de Francisca

Ropa de Francisca is an fullstack ecommerce, with an server builded in python and a "frontend" builded in next.js using the power of React hooks.

###how to run

- Frontend
  Run this commands to run the frontend app.
  ```
  npm install
  npm run dev
  ```
- Backend

1. Activate virtual env with

```
    python3 -m venv ./backend/.env &&  source ./backend/.env/bin/activate
```

2. set the \$PYTHONPATH with

```
    cd backend/ ; export PYTHONPATH=$PYTHONPATH:$(pwd); echo $PYTHONPATH
```

Run this commands to run the backend app.

```

npm run server-dev

```

##troubleshooting

- If you're using pylint this can be confused about the directory of python. If you are using VSCode just add this options to the config file:

```

"python.pythonPath": "venv/bin/python",
"python.linting.pylintPath": "venv/bin/pylint"

```
