import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
//App : 앱태그, 사용자 앱태그를 만드는게 리액트, .js 파일을 계속 만듦 (컴포넌트 - import 구문으로 사용)

//import reportWebVitals from './reportWebVitals';  
//웹 성능 체크하는 함수(라이브러리) - 안써도 됨

const root = ReactDOM.createRoot(document.getElementById('root')); //가상돔(Virtual DOM)을 만듦


root.render(            
    <App />
);
