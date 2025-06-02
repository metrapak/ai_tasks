# API Product Data Validation Script (Node.js)

This Node.js script is designed to test and validate product data obtained from the `https://fakestoreapi.com/products` API endpoint. It checks for common data defects and anomalies.

## Task Description

The script automates the process of:
1.  Fetching product data from the specified API.
2.  Validating each product based on a set of predefined rules.
3.  Generating a report of products that contain defects.

## Test Objectives

The script verifies the following for each product:

*   **Server Response Code:** Ensures the API request returns a `200 OK` status.
*   **Attribute Presence and Validity:**
    *   `title`: Must not be empty and must be a string.
    *   `price`: Must not be negative and must be a number.
    *   `rating.rate`: Must not exceed 5, must not be negative, and must be a number.

## How to Run the Script

1.  **Prerequisites:**
    *   Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download Node.js from [https://nodejs.org/](https://nodejs.org/).
    *   Navigate to the `lesson1/task2/` directory in your terminal.
    *   Install the `node-fetch` library by running:
        ```bash
        npm install node-fetch
        ```
        This command will create a `node_modules` directory and a `package-lock.json` file (and potentially a `package.json` if one doesn't exist).

2.  **Execution:**
    *   Run the script using the following command in the `lesson1/task2/` directory:
        ```bash
        node test_products.js
        ```

3.  **Output:**
    *   The script will first print the status of the API request (e.g., success or failure with status code).
    *   It will then indicate how many products were fetched.
    *   Finally, it will list all products that have identified defects, detailing each defect found per product. If no defects are found, it will report that all products passed validation.

## Example of Defect Reporting

If a product has a negative price and a rating above 5, the output for that product might look like this:

```
--- X Products with Defects Found ---

Product Title: Example Product Name (ID: YYY)
  - Product ID YYY: 'price' is negative (-10.0).
  - Product ID YYY: 'rating.rate' (5.5) exceeds 5.
```

This helps in quickly identifying which products have issues and what those issues are.

---