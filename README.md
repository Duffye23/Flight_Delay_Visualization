# Flight_Delay_Visualization

Following our previous project, where we created a dataframe to view a large set of flight data to try and determine if the data contained a predictor for a given flight's delay. 
You can see that project here: https://github.com/ggiudice98/Project1 </br>

For this project, we decided to use the same dataset, but this time we are visualizing the delays with the aid oh a python-made API, javascript to create our visualizations, and a HTLM coding to house the visuals. We do this to the answer the question: Given our January data set, how do the different elements presented in the data set affect a given flight’s departure time? </br>

For our visualizations, we chose to create a map with our airports acting as markers, and then have their corresponding delays and filters appear on the map accoridng to the total amount. This would helpus understand the size and severity of the delays and let us answer our main question. 

To begin our project, we had to move our data from the .csv file into a database in order for it be more easily accessible. We chose PGAdmin as our SQL database choice as we were the most familiar with it. An image of our schema is provided: </br>
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/9baff132-5113-4e79-a06d-52ea42a3f3fc)</br>

It's important to note that the final line, to alter the table and add the "ID" row is vital as that serves as the id column and primary key if in the future you were to add more tables. To do so, create the initial table, via the code, and then import the data from the provided .csv. Afterwards you can run the ALTER table flights and ADD COLUMN commands. To make this a primary key, right click onto the flights table in the left bar, select properties, click on the "Columns" tab, then turn on the "Primary Key?" flip. When you now go to pull up your table, you will see the ID column as a primary key. </br>

From there, we took our database and used the psychopg2 python package so that we could connect to our database and pull the information stored inside to be used for our visualizations. We manipulated our data, into a dataframe and then into tuples so that we could then store it into a json file to be used with Leaflet and our visualizations. </br>
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/5cd62172-a5e9-44d7-996a-80eaff25eda2)</br>
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/f69edafb-e600-462b-9e77-0138a5ad0de2) </br>
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/ad6cddb8-2690-40e7-9dce-484dd03f5269) </br>

With the Flask API up and running we were able to feed it into our HTML and Javascript portions for manipulation. </br>

With the HTML code, it was all about making sure the webpage could hold all our data and visuals. It can be viewed in our repository for more information.

Our Visuals provided us with total time of delays per airport and were displayed via a map of the United States, with airports marked and a circle around each marker that grows depending on the total time delayed.</br>
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/26e5ea59-60a9-41d5-be41-8aba4f032ffb)</br>

We then used a Bar Chart to break down our delays per airport.
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/fb0f1055-a468-4aa0-8833-5927b59bc9fa)</br>

And finally, we decided to see if there was a correlation between Taxi Time out, the factor that we isolated in our first project as the most likely cause for a delay in the regression that we had built. But much like our conclusions, the graph doesn't seem to show much correlation.
![image](https://github.com/Duffye23/Flight_Delay_Visualization/assets/58863493/51d3a182-1f44-439b-bcd0-41cf1011fc31)
 </br>

We set out with the task of visualizing flight delays, and we did just that. It was a fun exercise, but unfortuantely we are no closer to pinning down a cdefinite cause for flight delays.

Thank you for Reading,

Evan, Pinal, and Giancarlo.




