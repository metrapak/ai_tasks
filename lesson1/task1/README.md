# Expense Calculator Web Application

This is a simple web application designed to help users track and analyze their monthly expenses.

## Goal

The primary goal of this application is to calculate key indicators of monthly expenses based on a user-provided list. These indicators include:

*   Total amount of expenses
*   Average daily expense
*   Top 3 largest expenses

## Features

*   **Add New Expenses:** Users can add new expenses by specifying a category and an amount.
*   **View Expenses List:** All added expenses are displayed in a clear table format.
*   **Calculate Metrics:** Upon clicking the "Calculate" button, the application computes and displays:
    *   The total sum of all expenses.
    *   The average daily expense (calculated based on a 30-day month).
    *   A list of the top 3 expenses by amount.
*   **Pre-populated Data:** The application comes with pre-populated example data to demonstrate its functionality.

## Technologies Used

*   HTML
*   CSS
*   JavaScript

## How to Run

1.  Ensure you have the following files in the same directory:
    *   `index.html`
    *   `script.js`
    *   `style.css`
2.  Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari, Edge).

Alternatively, you can copy the content of `index.html`, `style.css`, and `script.js` into an online code editor like [CodePen](https://codepen.io/) or [JSFiddle](https://jsfiddle.net/) to run and test the application.

## Input Format

Users enter their expenses via input fields for "Category" (text) and "Amount" (number). For example:

| Category       | Amount ($) |
|----------------|------------|
| Groceries      | 15,000     |
| Rent           | 40,000     |
| Transportation | 5,000      |

## Expected Result

After adding expenses and clicking the "Calculate" button, the application will display:

*   **Total amount of expenses:** e.g., 75,000 $
*   **Average daily expense:** e.g., 2,500 $
*   **Top 3 expenses:** e.g., Rent (40,000 $), Groceries (15,000 $), Entertainment (10,000 $) 