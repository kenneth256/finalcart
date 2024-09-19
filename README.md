# Shopping Cart Component

This project contains a React component for a shopping cart, utilizing Redux for state management. The Cart component displays items added to the cart, calculates the total amount, and provides a summary of the cart's contents.

## Features

- Displays a list of items in the cart.
- Calculates and shows the total number of items and the total amount.
- Provides a message when the cart is empty.
- Includes a button to navigate back to the shop.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript applications.
- **React Router**: A library for routing in React applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kenneth256/finalcart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- The Cart component is connected to the Redux store and retrieves the cart state using the `useSelector` hook.
- The total amount and total items are calculated using the `reduce` method.
- The component conditionally renders the cart items or a message indicating that the cart is empty.

## Example
