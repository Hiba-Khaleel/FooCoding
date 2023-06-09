USE new_world;
-- 1
SELECT name
FROM country
WHERE Population > 8000000;
-- 2
SELECT name
FROM country
WHERE name like'%land%';
-- 3
SELECT name
FROM city
WHERE Population BETWEEN 500000 AND 1000000;
-- 4
SELECT name
FROM country
WHERE Continent = 'Europe';
-- 5
SELECT name
FROM country
ORDER BY SurfaceArea DESC;
-- 6
select city.Name, country.Name from city
join country
on city.CountryCode=country.code
 where country.Name="Netherlands";
-- 7
SELECT Population
FROM city
WHERE Name = 'Rotterdam';
-- 8
SELECT name, SurfaceArea
FROM country
ORDER BY SurfaceArea DESC
LIMIT 10;
-- 9
SELECT Name, Population
FROM city
ORDER BY Population DESC
LIMIT 10;
-- 10
SELECT SUM(Population) AS TotalPopulation
FROM country;
