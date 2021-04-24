//import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Header
      </header>
      <div class="container">
        {/* Row with two equal columns */}
        <div class="row">
            <div class="col-md-6">Column left</div>
            <div class="col-md-6">Column right</div>
        </div>
        
        {/* Row with two columns divided in 1:2 ratio */}
        <div class="row">
            <div class="col-md-4">Column left</div>
            <div class="col-md-8">Column right</div>
        </div>
        
        {/* Row with two columns divided in 1:3 ratio */}
        <div class="row">
            <div class="col-md-3">Column left</div>
            <div class="col-md-9">Column right</div>
        </div>
    </div>
    </div>
  );
}

export default App;
