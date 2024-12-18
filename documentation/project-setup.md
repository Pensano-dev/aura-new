## Supabase 

Since we're using Supabase with a full Postgres database, our API is dynamic. 

- Database-Driven: Supabase provides real-time capabilities and interactions with a Postgres database, meaning the data can change as users insert, update, or delete records. This dynamic nature implies that each API request can result in different data depending on the current state of your database.

- Real-Time Updates: Supabase supports features like subscriptions that allow our application to receive updates whenever data in the database changes, which is typical of a dynamic API.