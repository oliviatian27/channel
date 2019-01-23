# Channel project


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

install json server

```
npm install -g json-server
```

### Installing

git clone this repository,then cd into this folder,run

```
json-server --watch channel.json --port 3001
```
then open another terminal window cd into the same folder run

```
npm install&& npm start
```
now you should see the project opened in http://localhost:3000/ if 3000 port is not taken

## Running the tests

in the project folder, run below command in terminal

```
npm test
```
if the terminal shows No tests found related to files changed since last commit ,then

Press `a` to run all tests, or run Jest with `--watchAll`.
