# SQL Queries for Sales Data Analysis

This file (`queries.sql`) contains SQL statements to create and populate an `orders` table, and then run analytical queries against it to derive sales insights.

## Goal

The goal is to write SQL queries to analyze sales data for an online store based on the provided sample data.

## Input Data (Included in `queries.sql`)

The script first creates an `orders` table with the following structure:

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

It then populates this table with sample sales data.

## Tasks & Queries

The `queries.sql` file includes queries for the following tasks:

1.  **Calculate the total sales volume for March 2024.**
    *   Expected Result: `27,000`
    ```sql
    SELECT SUM(amount) AS total_sales_march_2024
    FROM orders
    WHERE strftime('%Y-%m', order_date) = '2024-03';
    ```

2.  **Find the customer who spent the most overall.**
    *   Expected Result: `Alice (20,000)`
    ```sql
    SELECT customer, SUM(amount) AS total_spent_by_customer
    FROM orders
    GROUP BY customer
    ORDER BY total_spent_by_customer DESC
    LIMIT 1;
    ```

3.  **Calculate the average order value.**
    *   Based on the provided expected result (`6,000`), this query calculates the overall average order value for the entire dataset.
    *   The original task mentioned "for the last three months". If a more specific date-bound calculation is needed, the query would require adjustment based on the current date or a specified end date.
    ```sql
    SELECT SUM(amount) / COUNT(id) AS average_order_value
    FROM orders;
    ```

## Tools to Use

*   **SQLite Online:** You can use an online SQLite environment (like [sqliteonline.com](https://sqliteonline.com/) or similar) to run these queries.
*   **CursorAI/ChatGPT:** For generating and refining SQL queries.

## How to Use

1.  Go to an SQLite online tool (e.g., [sqliteonline.com](https://sqliteonline.com/)).
2.  Copy the entire content of the `queries.sql` file.
3.  Paste it into the SQL editor window of the online tool.
4.  Run the script. The table will be created, populated, and then the three analytical queries will execute, showing their respective results.

Verification comments are included at the end of the `queries.sql` file to manually check the totals if needed. 