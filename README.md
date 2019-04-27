# Analyzing Video Game Sales As A Way To Approach The Market
## By Kevin Menz, Lauren Gama, and Myke London
The goal of this project was to locate data relating to Video Game Sales worldwide over time and to analyze it using Data Science tools in order to answer the question of, "If we were to form a video game company, what type of game should we make?"

## The Datasets
https://www.kaggle.com/rush4ratio/video-game-sales-with-ratings - Collection of data webscraped to show sales of Video Games up to 2016


## The Tools
The project was to create an interactive dashboard in order to answer our questions. This was done using a various set of languages and programs including:
* Python
* Flask API and SQL Alchemy
* HTML/CSS/Javascript
* Numpy
* Plotly
* D3


## The Process
We decided the best way to approach this project would be to create an interactive dashboard that would load our visualizations. We had to first load the downloaded CSV into a SQLite file, then extract the data into a flask API for manipulation using SQLAlchemy. We then worked together to build the charts that answered various questions such as what genre of video game sold the most, what publisher sold the most, how did each platform perform, what ratings are popular, and how did sales related to critic and user scores. We also wanted to see how these change depending on the location (US, EU, Japan, Other)


# Analysis Process
## Part 1 - Data Prep and Flask App Creation
We loaded the data into a SQLite database and then extracted the data into a Flask API for manipulation using SQL Alchemy. We separated out the column headers for the sales of each location in order to access these later for our drop down menu that would be interactive with our dashboard. We then created multiple routes and loaded an HTML Template into the app to structure our dashboard.

![Project 2 Flask App](https://user-images.githubusercontent.com/40543168/56852053-12dfcd80-68e4-11e9-9ed8-6a5026070e91.PNG)

## Part 2 - HTML/CSS/JavaScript for Dashboard
Now that the data was clean and accessible we moved to analyzing it. We created a variety of charts that were interactive and able to help us indentify the differences in sales between locations, and for variables such as Genre, Publisher, Rating, Critic Score, ect.

We used Plotly, D3, ChartJS to build interactive plots that would be displayed on our dashboard. Then use bootstrap for our HTML framework and added a little CSS to make the dashboard look more appealing. 

As of right now the dashboard has not been deployed. However all the files neccessary are in the github repo, you can download and see our charts for yourself!




