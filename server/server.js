require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase, closeDatabaseConnection, client } = require('./db/index');

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

let i=0;

connectToDatabase()
  .then(() => {

    app.get('/categories', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM category ORDER BY category_name ASC');
          console.log("retrieving Categories");
          res.json({
            categories: result.rows
          });
          console.log(++i);
        } catch (error) {
          console.error('Error retrieving categories:', error);
          res.status(500).json({ error: 'Error retrieving categories' });
        }
      });

      app.get('/categories/:category_id', async (req, res) => {
        const { category_id } = req.params;
        try {
          const result = await client.query(
            'SELECT c.category_name, j.journal_id, j.journal_name, j.coverage FROM category c JOIN journals j ON c.category_id = j.category_id WHERE c.category_id = $1 ORDER BY j.journal_name ASC',
            [category_id]
          );
          console.log("Retrieving Categories and Journals");
          res.json({
            category_name: result.rows[0].category_name, // Assuming there's only one category with given id
            journals: result.rows
          });
        } catch (error) {
          console.error('Error retrieving categories and journals:', error);
          res.status(500).json({ error: 'Error retrieving categories and journals' });
        }
      });      


      app.get('/publishers', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM publishers ORDER BY publisher_name ASC');
          console.log("Retrieving Publishers");
          res.json({
            publishers: result.rows
          });
        } catch (error) {
          console.error('Error retrieving publishers:', error);
          res.status(500).json({ error: 'Error retrieving publishers' });
        }
      });
    

    app.get('/publishers/:publisher_id', async (req, res) => {
        const { publisher_id } = req.params;

        try {
          const result = await client.query(
            'SELECT p.publisher_name, p.description, p.website_link, p.image_link, j.journal_name, j.coverage FROM publishers p JOIN journals j ON p.publisher_id = j.publisher_id WHERE p.publisher_id = $1 ORDER BY j.journal_name ASC',
            [publisher_id]
          );
          console.log("Retrieving Publishers and Journals");
          res.json({
            name: result.rows[0].publisher_name,
            description: result.rows[0].description,
            website_link: result.rows[0].website_link,
            image_link: result.rows[0].image_link,
            journals: result.rows.map(row => ({
              title: row.journal_name,
              dateRange: row.coverage
          }))
          });
        } catch (error) {
          console.error('Error retrieving publishers and journals:', error);
          res.status(500).json({ error: 'Error retrieving publishers and journals' });
        }
      });      
  

      app.get('/journal/:journal_id', async (req, res) => {
        const { journal_id } = req.params;
        try {
            const result = await client.query(
                'SELECT j.journal_name, j.abstract, j.issn, j.eissn, j.img_url, p.publisher_name, c.category_name, a.title, a.link FROM journals j JOIN publishers p ON j.publisher_id = p.publisher_id JOIN category c ON j.category_id = c.category_id JOIN articles a ON j.journal_id = a.journal_id WHERE j.journal_id = $1',
                [journal_id]
            );
            console.log("Retrieving Journal by ID");
    
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Journal not found' });
            }
    
            console.log("Retrieving Journals and Articles");
            res.json({
                name: result.rows[0].journal_name,
                abstract: result.rows[0].abstract,
                issn: result.rows[0].issn,
                eissn: result.rows[0].eissn,
                img_url: result.rows[0].img_url,
                publisher_name: result.rows[0].publisher_name,
                category_name: result.rows[0].category_name,
                articles: result.rows.map(row => ({
                    title: row.title,
                    link: row.link
                }))
            });
        } catch (error) {
            console.error('Error retrieving journal by ID:', error);
            res.status(500).json({ error: 'Error retrieving journal by ID' });
        }
    });

    
    app.post('/register-author', async (req, res) => {
      const { email, name, password, institution, aboutYourself, researchInterests } = req.body;
        const checkQuery = `
          SELECT email
          FROM authors
          WHERE email = $1
        `;
        const { rows } = await client.query(checkQuery, [email]);

        if (rows.length > 0) {
          // Author name already exists
          return res.status(201).json({ message: 'Email already Used' });
        }

        try {
          const query = `
            INSERT INTO authors (email, author_name, password, institute, about, interested_subjects)
            VALUES ($1, $2, $3, $4, $5, $6)
          `;
          await client.query(query, [email, name, password, institution, aboutYourself, researchInterests]);
      
          res.status(201).json({ message: 'Author registered successfully' });
        } catch (error) {
          console.error('Error registering author:', error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });  
    
    
    app.post('/register-editor', async (req, res) => {
      const { name, password, journal_name, email, researchInterests, aboutYourself } = req.body;
      const checkQuery = `
        SELECT email
        FROM editors
        WHERE email = $1
      `;
      const { rows } = await client.query(checkQuery, [email]);

      if (rows.length > 0) {
        return res.status(201).json({ message: 'Email already Used' });
      }

      const journalQuery = `
        SELECT journal_id FROM journals
        WHERE LOWER(journal_name) = $1;
      `;
      console.log(journal_name.toLowerCase());
      const journalRows = await client.query(journalQuery, [journal_name.toLowerCase()]);
      if (journalRows.rows.length === 0) {
        return res.status(201).json({ message: 'Journal does not exist' });
      }
      const journalId = journalRows.rows[0].journal_id;
      console.log(journalId);

      try {
        const query = `
          INSERT INTO editors (email, editor_name, password, journal_id, about, research_interests)
          VALUES ($1, $2, $3, $4, $5, $6)
        `;
        await client.query(query, [email, name, password, journalId, aboutYourself, researchInterests]);
    
        res.status(201).json({ message: 'Editor registered successfully' });
      } catch (error) {
        console.error('Error registering author:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      });

    app.post('/submit-articles', async (req, res) => {
        const { title, author, link } = req.body;
      
        try {
          // Insert the article into the database
          await client.query(
            'INSERT INTO articles (title, author, link) VALUES ($1, $2, $3)',
            [title, author, link]
          );
      
          res.status(201).json({ message: 'Article submitted successfully' });
        } catch (error) {
          console.error('Error submitting article:', error);
          res.status(500).json({ error: 'Error submitting article' });
        }
      });
    
      app.put('/update-author', async (req, res) => {
        const { id, name, institution, aboutYourself, researchInterests } = req.body;
      
        try {
          await client.query(
            'UPDATE authors SET name = $1, institution = $2, about_yourself = $3, research_interests = $4 WHERE id = $5',
            [name, institution, aboutYourself, researchInterests, id]
          );
      
          res.status(200).json({ message: 'Author information updated successfully' });
        } catch (error) {
          console.error('Error updating author information:', error);
          res.status(500).json({ error: 'Error updating author information' });
        }
      });
        
      app.put('/update-editor', async (req, res) => {
        const { id, name, institution, aboutYourself, expertise } = req.body;
      
        try {
          // Update the editor information in the database
          await client.query(
            'UPDATE editors SET name = $1, institution = $2, about_yourself = $3, expertise = $4 WHERE id = $5',
            [name, institution, aboutYourself, expertise, id]
          );
      
          res.status(200).json({ message: 'Editor information updated successfully' });
        } catch (error) {
          console.error('Error updating editor information:', error);
          res.status(500).json({ error: 'Error updating editor information' });
        }
      });

      
    app.post('/register-reviewer', async (req, res) => {
      const { email, name, password, institution, aboutYourself, researchInterests } = req.body;
      const checkQuery = `
        SELECT email
        FROM reviewers
        WHERE email = $1
      `;
      const { rows } = await client.query(checkQuery, [email]);

      if (rows.length > 0) {
        return res.status(201).json({ message: 'Email already Used' });
      }

      try {
        const query = `
          INSERT INTO reviewers (email, reviewer_name, password, institute, about, research_interests)
          VALUES ($1, $2, $3, $4, $5, $6)
        `;
        await client.query(query, [email, name, password, institution, aboutYourself, researchInterests]);
    
        res.status(201).json({ message: 'Reviewer registered successfully' });
      } catch (error) {
        console.error('Error registering author:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
      });  
    

    app.get('/journals', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM journals');
          console.log("Retrieving Journals");
          res.json({
            journals: result.rows
          });
        } catch (error) {
          console.error('Error retrieving journals:', error);
          res.status(500).json({ error: 'Error retrieving journals' });
        }
      });
       

    app.get('/articles/', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM articles');
          console.log("Retrieving Articles");
          res.json({
            articles: result.rows
          });
        } catch (error) {
          console.error('Error retrieving articles:', error);
          res.status(500).json({ error: 'Error retrieving articles' });
        }
      });
        

    app.get('/authors/', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM authors');
          console.log("Retrieving Authors");
          res.json({
            authors: result.rows
          });
        } catch (error) {
          console.error('Error retrieving authors:', error);
          res.status(500).json({ error: 'Error retrieving authors' });
        }
      });


      app.get('/books', async (req, res) => {
        try {
          const result = await client.query('SELECT * FROM books');
          console.log("Retrieving Books");
          res.json({
            books: result.rows
          });
        } catch (error) {
          console.error('Error retrieving books:', error);
          res.status(500).json({ error: 'Error retrieving books' });
        }
      });
      
    app.post('/articles', async (req, res) => {
        try {
          const { title, content, author_id, journal_id } = req.body; // Adjust this based on your actual article schema
          
          // You might want to validate the request body here
      
          const result = await client.query(
            'INSERT INTO articles (title, content, author_id, journal_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, content, author_id, journal_id]
          );
      
          console.log("Inserted Article:", result.rows[0]);
          res.json({
            article: result.rows[0]
          });
        } catch (error) {
          console.error('Error inserting article:', error);
          res.status(500).json({ error: 'Error inserting article' });
        }
      });
      

    app.post('/books', async (req, res) => {
        try {
          const { title, author_id, genre, publication_year } = req.body; // Adjust this based on your actual book schema
          
          // You might want to validate the request body here
      
          const result = await client.query(
            'INSERT INTO books (title, author_id, genre, publication_year) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, author_id, genre, publication_year]
          );
      
          console.log("Inserted Book:", result.rows[0]);
          res.json({
            book: result.rows[0]
          });
        } catch (error) {
          console.error('Error inserting book:', error);
          res.status(500).json({ error: 'Error inserting book' });
        }
      });
        

      
      // Close the database connection when the server is closed
      process.on('SIGINT', async () => {
        await closeDatabaseConnection();
        process.exit(0);
      });
  
      // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    })

    .catch(error => {
      console.error('Error starting server:', error);
      closeDatabaseConnection(); 
      process.exit(1);
    });