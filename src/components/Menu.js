import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

function Menu() {
  const menuItems = [
    { category: 'Entradas', name: 'Bruschetta', description: 'Pão com tomate, mussarela e manjericão', price: 8.99 },
    { category: 'Entradas', name: 'Salada Caesar', description: 'Alface romana, croutons, queijo parmesão e molho Caesar', price: 10.99 },
    { category: 'Pratos Principais', name: 'Espaguete à Carbonara', description: 'Massa com ovos, queijo, pancetta e pimenta', price: 15.99 },
    { category: 'Pratos Principais', name: 'Pizza Margherita', description: 'Molho de tomate, mussarela e manjericão', price: 12.99 },
    { category: 'Sobremesas', name: 'Tiramisu', description: 'Sobremesa italiana à base de café', price: 6.99 },
    { category: 'Sobremesas', name: 'Mousse de Chocolate', description: 'Mousse de chocolate cremosa com chantilly', price: 7.99 }
  ];

  // Estado para controlar o tema da página
  const [theme, setTheme] = useState('light');

  // Função para alternar entre os temas claro e escuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Define o tema no elemento raiz HTML
  };

  return (
    <div className="menu">
      <h2>Menu do Restaurante</h2>
      {Object.keys(menuItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {})).map((category, index) => (
        <div key={index} className="category-container">
          <h3 className="category-title">
            {category}
          </h3>
          <div className="menu-items">
            {menuItems
              .filter(item => item.category === category)
              .map((item, idx) => (
                <MenuItem
                  key={idx}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      ))}
      
      {/* Botão de troca de tema */}
      <div className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
        <span className="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
        <div className="theme-text">{theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}</div>
      </div>
    </div>
  );
}

export default Menu;
