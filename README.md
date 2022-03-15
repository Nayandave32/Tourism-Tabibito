Tabibito

The website is hosted with Heroku and can be visited at: https://tabibito.herokuapp.com/
Video showing and explaining the project can be seen at: 


As someone who lived in Japan for almost 3 years, I decided to create a website that will generate an itinerary for people who are intersted in visiting Japan. This itinerary will change depending on the data presented in a form. The main types of data that effect the itinerary are budget, group size and duration.

For this full stack application, I used Node.js in conjuction with Express and EJS to configure my server. This let me set up all my routes and a templating engine to make my HTML cleaner. All three of these technologies were new to me so I had to read through a lot of documentation and watch a lot of videos in order to get things working.

For my database, I used MYSQL within Node. I had used SQLite3 in CS50 so getting used to MySQL took no time at all. The schema consists of one table called accounts which contains the users ID and password. 

For the frontend, I used HTML and CSS in order to make the website visually appealing, and I used some vanilla Javascript to add functions like popups to give the website a bit more interactivity and the FAQ answers appearing when you hover over them. 

Passwords were hashed and encrypted using the bcrypt npm module, so I cannot view the password of a user even when I go into the MySQL database and have a look myself.

All in all, it was a lot of work with a lot of technologies that I had never used before. However I am proud of what I have achieved and will cary all of these skills forwards in my next project.

Thank you!
