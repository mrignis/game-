import React from 'react';
import './App.css';
import './content/Tictactoe.css'; // Правильний шлях до вашого файлу стилів
import './content/tictactoe.html';
import TicTacToe from './content/Tic-Tac-Toe'
import Babel from './content/Babel'
export default function App() {
  return (
    <div className="tictactoe"> {/* Додайте клас з CSS */}
      <div id="errors"></div> {/* Видаліть inline-стилі */}
      <div id="root"></div> {/* Видаліть inline-стилі */}
    </div>
  );
}
