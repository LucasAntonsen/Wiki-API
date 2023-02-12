# Wiki-API

A RESTful API for Creating, Reading, Updating and Deleting Wiki Articles within a local MongoDB database.

### Features

Using Postman:

#### GET  
Fetch All Articles  
http://localhost:3000/articles  

Fetch Specific Article  
http://localhost:3000/articles/specificArticleTitle  

#### POST  
Create One Article  
http://localhost:3000/articles  

Request Body (x-www-form-urlencoded):  
key, value  
*title: articleTitle  
content: articleContent*  

#### PUT  
Updates Specific Article with a New Article  
http://localhost:3000/articles/specificArticleTitle  

Request Body (x-www-form-urlencoded):  
key, value  
*title: articleTitle  
content: articleContent*  

#### PATCH
Updates Specific Article Content
http://localhost:3000/articles/specificArticleTitle

Request Body (x-www-form-urlencoded):  
key, value  
*title: articleTitle  
content: articleContent*

#### DELETE  
Delete All Articles  
http://localhost:3000/articles  

