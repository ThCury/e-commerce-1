import React from 'react';
import { FaShoppingCart, FaEye } from 'react-icons/fa';
import '../assets/styles/productCard.scss'; // Importa o arquivo de estilos SCSS

export default function ProductCard() {
  return (
    <div className="product-card">
      {/* Imagem do produto */}
      <img
        className="product-card__img"
        src="https://images.unsplash.com/photo-1636103952204-0b738c225264?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Colar ponto de luz 6mm"
      />

      {/* Botões */}
      <div className="product-card__button-group">
        <button className="product-card__button product-card__button--ver">
          <FaEye />
          Ver
        </button>
        <button className="product-card__button product-card__button--comprar">
          <FaShoppingCart />
          Comprar
        </button>
      </div>

      {/* Nome do produto */}
      <h6 className="product-card__title">Colar ponto de luz 6mm</h6>

      {/* Estrelas (fixas como exemplo) */}
      <div className="product-card__stars">★★★★★</div>

      {/* Preço */}
      <div className="product-card__price">R$14,00</div>
    </div>
  );
}
