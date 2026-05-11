# Beverage POS System

A modern web-based Point of Sale (POS) system for managing beverage orders, inventory, and sales reporting for Lemonade and Calamansi drinks.

---

## Features

### Authentication
- Admin and Staff login system
- Role-based access
- Secure authentication

### Ordering System
Customers can:
- Choose drinks
- Select sizes
- Pick flavors/categories
- Add optional add-ons
- Choose payment methods

### Drinks Available

#### Lemonade
Sizes:
- 12 oz Hot
- 16 oz Cold
- 22 oz Cold

Categories:
- Classic
- Yakult
- Flavored

Flavors:
- Green Apple
- Strawberry
- Mango
- Kiwi
- Peach

#### Calamansi
Sizes:
- 12 oz
- 16 oz Cold
- 22 oz Cold

Categories:
- Classic
- Mango
- Yakult
- Ginger Calamansi

### Add-ons
Optional add-ons:
- Nata de Coco
- Popping Boba

### Payment Methods
- Cash
- GCash

### Cart Features
- Add multiple drinks
- Update quantities
- Remove items
- Automatic total calculation
- VAT computation

### Receipt Printing
- Printable receipt
- Order summary
- Payment information

### Inventory Management
Tracks:
- Cups
- Lemons
- Calamansi
- Syrups
- Yakult
- Add-ons

Automatically deducts stock after each sale.

### Reports
- Daily sales report
- Monthly sales report
- Best-selling drinks
- Transaction history

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS

## Backend
- Node.js
- Express.js

## Database
- Firebase or MySQL

---

# System Flow

```text
Start
↓
Choose Drink
↓
Choose Size
↓
Choose Category/Flavor
↓
Add-ons (Optional)
↓
Payment
↓
Receipt
↓
End