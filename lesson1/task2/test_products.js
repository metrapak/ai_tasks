// Required module to make HTTP requests
// Make sure to install it using: npm install node-fetch
import fetch from 'node-fetch';

// API endpoint
const API_URL = "https://fakestoreapi.com/products";

/**
 * Fetches products from the API.
 * @returns {Promise<Array|null>} A promise that resolves to an array of products or null if an error occurs.
 */
async function fetchProducts() {
    console.log(`Fetching products from ${API_URL}...`);
    try {
        const response = await fetch(API_URL);
        // Verify server response code
        if (response.status !== 200) {
            console.error(`Error: API request failed with status code ${response.status} ${response.statusText}`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error(`Error: API request failed: ${error.message}`);
        return null;
    }
}

/**
 * Validates product data based on specified criteria.
 * @param {Array<Object>} products - An array of product objects.
 * @returns {Array<Object>} An array of products containing defects.
 */
function validateProductData(products) {
    const defectiveProducts = [];

    if (!products || products.length === 0) {
        console.log("No products to validate.");
        return defectiveProducts;
    }

    products.forEach(product => {
        const defects = [];
        const productId = product.id !== undefined ? product.id : 'Unknown ID';

        // Check for presence and validity of title
        if (!product.title || typeof product.title !== 'string' || product.title.trim() === '') {
            defects.push(`Product ID ${productId}: 'title' is empty or not a string.`);
        }

        // Check for presence and validity of price
        if (product.price === undefined || typeof product.price !== 'number') {
            defects.push(`Product ID ${productId}: 'price' is missing or not a number.`);
        } else if (product.price < 0) {
            defects.push(`Product ID ${productId}: 'price' is negative (${product.price}).`);
        }

        // Check for presence and validity of rating.rate
        if (!product.rating || typeof product.rating !== 'object') {
            defects.push(`Product ID ${productId}: 'rating' object is missing or not an object.`);
        } else {
            if (product.rating.rate === undefined || typeof product.rating.rate !== 'number') {
                defects.push(`Product ID ${productId}: 'rating.rate' is missing or not a number.`);
            } else if (product.rating.rate > 5) {
                defects.push(`Product ID ${productId}: 'rating.rate' (${product.rating.rate}) exceeds 5.`);
            } else if (product.rating.rate < 0) {
                defects.push(`Product ID ${productId}: 'rating.rate' (${product.rating.rate}) is negative.`);
            }
        }

        if (defects.length > 0) {
            defectiveProducts.push({
                product_details: product,
                identified_defects: defects
            });
        }
    });

    return defectiveProducts;
}

/**
 * Main function to fetch, validate, and report product data.
 */
async function main() {
    const productsData = await fetchProducts();

    if (productsData) {
        console.log(`Successfully fetched ${productsData.length} products.`);
        
        // Output all fetched products
        console.log("\n--- All Fetched Products Data ---");
        console.log(JSON.stringify(productsData, null, 2)); // Pretty print JSON
        console.log("--- End of Fetched Products Data ---\n");

        console.log("Validating product data...");
        const defectsFound = validateProductData(productsData);

        if (defectsFound.length > 0) {
            console.log(`\n--- ${defectsFound.length} Products with Defects Found ---`);
            defectsFound.forEach(item => {
                console.log(`\nProduct Title: ${item.product_details.title || 'N/A'} (ID: ${item.product_details.id !== undefined ? item.product_details.id : 'N/A'})`);
                item.identified_defects.forEach(defect => {
                    console.log(`  - ${defect}`);
                });
            });
        } else {
            console.log("\nNo defects found in the product data. All products passed validation.");
        }
    } else {
        console.log("Could not retrieve or process product data.");
    }
}

main(); 