USE new_world;

DELIMITER $$

CREATE TRIGGER prevent_increasing
BEFORE INSERT ON countrylanguage
FOR EACH ROW
BEGIN
    DECLARE language_count INT;
    
    SELECT COUNT(*) INTO language_count
    FROM countrylanguage
    WHERE CountryCode = NEW.CountryCode;
    
    IF language_count >= 10 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Country has reached the maximum number of languages';
    END IF;
END$$

DELIMITER ;

INSERT INTO CountryLanguage (CountryCode, Language)
VALUES ('IRQ', 'Language 1'), ('IRQ', 'Language 2'), ('IRQ', 'Language 3'),('IRQ', 'Language 4'), ('IRQ', 'Language 5'), ('IRQ', 'Language 6')
,('IRQ', 'Language 7'), ('IRQ', 'Language 8'), ('IRQ', 'Language 9');


INSERT INTO CountryLanguage (CountryCode, Language)
VALUES ('IRQ', 'Language 10');




