const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Hiba.Khaleel1998',
  database: 'new_world'
});

const countryName = 'Iraq';
const language="English";

const queries = [
  {
    query: `SELECT city.Name AS capital_city
             FROM city
             JOIN country ON city.CountryCode = country.Code
             WHERE country.Name = ?
             ORDER BY city.Population DESC
             LIMIT 1`,
    params: [countryName]
  },
  {
    query: `SELECT CONCAT(country.Name, ' - ', countrylanguage.Language) AS language_info
             FROM countrylanguage
             JOIN country ON countrylanguage.CountryCode = country.Code
             WHERE country.Name = ?
             ORDER BY countrylanguage.Language`,
    params: [countryName]
  },
  {
    query: `SELECT COUNT(city.Name) AS EnglishSpeakingCitiesCount
             FROM countrylanguage
             JOIN city ON countrylanguage.CountryCode = city.CountryCode
             WHERE countrylanguage.Language = ?`,
    params: [language]
  },
  {
    query: `SELECT country.Continent, COUNT(countrylanguage.Language) AS LanguageCount
             FROM country
             JOIN countrylanguage ON countrylanguage.CountryCode = country.Code
             GROUP BY country.Continent`
  },
  {
    query: `SELECT c1.Name AS Country1, c2.Name AS Country2
             FROM country AS c1
             JOIN country AS c2 ON c1.Continent = c2.Continent
             JOIN countrylanguage AS cl1 ON cl1.CountryCode = c1.Code
             JOIN countrylanguage AS cl2 ON cl2.CountryCode = c2.Code
             WHERE c1.Name = 'Iraq'
               AND cl1.IsOfficial = 'T'
               AND cl2.IsOfficial = 'T'
               AND cl1.Language = cl2.Language
               AND c1.Code != c2.Code`
  }
];

let completedQueries = 0;

queries.forEach((queryData, index) => {
  connection.execute(queryData.query, queryData.params, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Query ${index + 1} Results:`);
      if (results.length > 0) {
        results.forEach((row) => {
          console.log(row);
        });
      } else {
        console.log('No results found.');
      }
    }
    console.log('-------------------');

    completedQueries++;

    if (completedQueries === queries.length) {
      connection.end();
    }
  });
});





