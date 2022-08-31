import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './index.css';

// コンポーネント
import { MemoArea } from './compornents/main/MemoArea ';
import { ToDoArea } from './compornents/main/ToDoArea';
import { Home }from './compornents/main/Home';


export const App = () => {
  // ボタンを使ったリンク作成
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'currentURL' : undefined)} to='/'>home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'currentURL' : undefined)} to='/memoarea'>メモエリア</NavLink>
          </li>
          <li>
            <button onClick={() => navigate('/todoarea')} className={'button'}>ToDoエリア</button>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* メモエリア */}
        <Route path="/memoarea" element={<MemoArea/>} />
        {/* タスク取得エリア */}
        <Route path="/todoarea" element={<ToDoArea/>} />
      </Routes>
    </>
  )

  // disabled 'text'に文字があれば true → false、文字がなければ false → true に変わる。 disabled は true ならボタンが押せなくなる。
}
