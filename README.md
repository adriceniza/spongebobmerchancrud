<br />
<div align="center">
  <a href="https://github.com/adriceniza/spongebobmerchancrud">
    <img src="images/spongebob-logo.png" alt="Logo" width="150" height="80">
  </a>

<h3 align="center">SpongeBob Clothes Shop CRUD</h3>

  <p align="center">
    CRUD work for PGV and PGL subjects using spring and ionic. 
    <br />

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

### Built With

- [Ionic](https://ionicframework.com)
- [spring.io](https://spring.io)
- [MySQL](https://www.mysql.com)
- [Angular](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<br/>
### Prerequisites

The database its on backend/database/spongebobdb.sql

Open your IDE for Spring and run spring boot app.

To start ionic , open the terminal and write ionic serve.

I hope you like it.

##About the page

2 Tables

I build one table to save all the products we'll sell.
This have :
ID
MODEL
PRIZE
IMG
And i build one more table to save all the product we'll add to the basket.
This have :
ID
MODEL
PRIZE
SIZE
IMG
UNITS

In the frontend we can't add a product to the basket without having chosen a size before.

This table has no more interaction with the database than the reading of the products.

Its the spongebobbasket table who has all the interaction and the real CRUD , its a dinamic crud , you can add a product from
the spongebobclothes table by clicking on the addtobasket button , always after having chosen a size , then in the basket view you see all the products
from the basket and there you find the size you had chosen , the units of the product , the prize , the model and the preview image of it ;
you also see two buttons one to add a unit of the same product and one to remove a unit of it , also you see a select to change the size if you had make a mistake ,
and a button to remove all the product of the basket , no matter how much units u have of it , we'll remove all .

In the remove units button if units are 0 or less we remove the product automatically.

<!-- CONTACT -->

## Contact

Adrián Ceniza - ceniiziienta@gmail.com

Project Link: [https://github.com/adriceniza/spongebobmerchancrud](https://github.com/adriceniza/spongebobmerchancrud)

<p align="right">(<a href="#top">back to top</a>)</p>
