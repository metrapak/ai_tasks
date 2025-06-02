-- Script to populate the table (provided by user)
CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);

-- Clear existing data before inserting new data to avoid duplicates if script is run multiple times
DELETE FROM orders;

INSERT INTO orders (customer, amount, order_date) VALUES
('Alice', 5000, '2024-03-01'),
('Bob', 8000, '2024-03-05'),
('Alice', 3000, '2024-03-15'),
('Charlie', 7000, '2024-02-20'),
('Alice', 10000, '2024-02-28'),
('Bob', 4000, '2024-02-10'),
('Charlie', 9000, '2024-03-22'),
('Alice', 2000, '2024-03-30');

-- SQL Queries for Analysis

-- 1. Calculate the total sales volume for March 2024.
-- Expected Result: 27,000
SELECT SUM(amount) AS total_sales_march_2024
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';

-- 2. Find the customer who spent the most overall.
-- Expected Result: Alice (20,000)
SELECT customer, SUM(amount) AS total_spent_by_customer
FROM orders
GROUP BY customer
ORDER BY total_spent_by_customer DESC
LIMIT 1;

-- 3. Calculate the average order value.
-- The user provided "Average order value (total sales / number of orders): 6,000"
-- This implies an overall average for the given dataset.
-- If "last three months" was strict, and assuming current date is after March 2024,
-- we would filter by date. However, given the data and expected result, an overall average is calculated here.
SELECT SUM(amount) / COUNT(id) AS average_order_value
FROM orders;
