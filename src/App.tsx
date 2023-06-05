import './App.css';
import ClassComponent from './assesmentLogic/classComponent';
import FunctionalComponent from './assesmentLogic/functionalComponent';
import JavascriptAssesment from './assesmentLogic/javascriptAssesment';
import ScrollDemo from './assesmentLogic/scrollAssesment';

function App() {
  return (
    <div className="App">
      <FunctionalComponent firstName ={'Vishakha'} lastName={'Patil'}/>    {/* while rendering component we need tto set the prop values according to the props type  */}
      <ClassComponent  />
      <ScrollDemo></ScrollDemo>
      <JavascriptAssesment></JavascriptAssesment>
    </div>
  );
}

export default App;
