/************************
2014-12-02 //class 10
  https://github.com/sf-wdi-15/notes/tree/master/week_03_express_sql/day_3_intro_sql/dusk_intro_pg
************************/


PG lab 
// 1. Show all the tables. 
(display table)
    \dt 

// 2. Show all the users. 
(display users)
    \du

// 3. Show all the data in the owners table. 
    SELECT * FROM owners;

// 4. Show the names of all owners.
    SELECT name FROM owners; 

// 5. Show the ages of all of the owners in ascending order. 
    SELECT age FROM owners ORDER BY age ASC;

// 6. Show the name of any owner whose name is Donald. 
    SELECT * FROM owners WHERE name = 'Donald';

// 7. Show the age of all owners who are older than 30. 
    SELECT * FROM owners WHERE age > 30;

// 8. Show the name of all owners whose name starts with an E. 
    SELECT * FROM owners WHERE name LIKE 'E%';

// 9. Add an owner named John who is 33 years old to the owners table.
    INSERT INTO owners (name, age) VALUES ('John',33);

// 10. Add an owner named Jane who is 43 years old to the owners table.
    INSERT INTO owners (name, age) VALUES ('Jane',43);

// 11. Change Janes age to 30.
    UPDATE owners SET age = 30 where name ='Jane';

// 12. Change Janes name to Janet. 
    UPDATE owners SET name ='Janet' WHERE name ='Jane';

// 13. Add a property named Archstone that has 20 units. 
    INSERT INTO properties (name,units, owner_id) VALUES ('Archstone',20,1);

// 14. Delete the owner named Jane. 
    DELETE FROM owners WHERE name='Jane';

// 15. Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5. 
    SELECT * FROM properties WHERE name <> 'Archstone' AND property_id NOT IN (3,5) ORDER BY name ASC;

// 16. Count the total number of rows in the properties table 
    SELECT COUNT (*) FROM properties;

// 17. Show the highest age 
    SELECT MAX(age) FROM owners;

// 18. Show the names of the first three owners in your owners table.
    SELECT * FROM owners LIMIT 3;

// 19. Create a foreign key that references the owner_id in the owners table and forces the constraint ON DELETE NO ACTION.
    ALTER TABLE properties ADD CONSTRAINT owner_fk FOREIGN KEY (owner_id) REFERENCES owners (owner_id) ON DELETE NO ACTION; 

// 20. Show all of the owners and the names of the properties they own.
    SELECT owners.name, properties.name FROM owners JOIN properties ON owners.owner_id = properties.owner_id;