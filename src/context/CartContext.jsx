import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Custom hook to access cart
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Initial state loaded from localStorage
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cartItems');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error loading cart from localStorage:", error);
            return [];
        }
    });

    // Sync cart to localStorage whenever cartItems change
    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [cartItems]);

    // Add new product or increase quantity if already exists
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Increase quantity
    const increment = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease quantity but not below 1
    const decrement = (id) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increment, decrement, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
