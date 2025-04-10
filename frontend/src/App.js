import logo from './logo.svg';
import './App.css';
import CourseList from './components/CourseList';

function App() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet"></link>
      </head>
      <CourseList/>
    </div>
  );
}

export default App;
