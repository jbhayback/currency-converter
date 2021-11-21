# Currency Converter

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <a href="#technical-design-document">Technical Design Document (TDD)</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## __About The Project__

**Currency Exchange Rate Calculator**

This project is a simple front-end to a simple back-end service of currency exchange.

## Built With
* [Django](https://www.djangoproject.com/) - Web
* [PostgreSQL](https://www.postgresql.org/) - DB
* [Bootstrap](https://getbootstrap.com/) - UI
* [Exchangerate-Host](https://exchangerate.host/#/#docs) - Exchange Rate API
    - This API was chosen because it is free and does not require any API key. Also, the historical API is usable unlike the other APIs that needs subscription which will incur cost.


## __Technical Design Document (TDD)__
 ![tdd-diagram](https://github.com/jbhayback/currency-converter/blob/main/currency_converter/converter/static/images/TDD.png)
 - The flow of the application is shown in the diagram above.
 - On the client side, user shall set the currencies he/she wants to convert to other currency. Both currencies and amount should be filled. Once everything is set, the application server will be triggered to request to the API server. Two API endpoints will be called: Latest and Historical.
 - 3 Results could happen:
    * Both API calls are successful. If this happen, the client will be able to see calculated exchange rate amount for both Today and Yesterday.
    * If one API calls was failed:
        - The client will be able to see calculated exchange rate amount for the successul request; and
        - The client will also see the error for the failed request.


## __Getting Started__
- ## Prerequisites
  - Docker and Docker Compose
    * [Docker](https://www.docker.com/)
      * [Installation](https://docs.docker.com/engine/install/)
    * [Docker compose](https://docs.docker.com/compose/)
      * [Installation](https://docs.docker.com/compose/install/)

- ## Setup
    - __Be sure to run these commands inside the project root directory__
    - Rename .env.to.rename to .env to use already configured env file
    ```
    $ mv .env_to_rename .env
    ```
    - Build `web` and `db` images
    ```
    $ docker-compose build
    ```
    - Once build is successful, run application and services
    ```
    $ docker-compose up -d
    ```
    - If the 2 services (web and app) are running, load the supported Currencies Data (needed for the UI)
    ```
    $ docker-compose run web python ./currency_converter/manage.py loaddata data/currencies.json
    ```

 ## Testing
 - ### Unit Testing
    ```
    $ docker-compose run web python ./currency_converter/manage.py test converter
    ```
- ### Functional Testing
    - Access
        * http://localhost:8001/

 ## Contact
- You can contact me via email:jbhayback@gmail.com for more info or if there are errors during the setup.
