import logo from './logo.svg';
import './App.css';
import heroimage from './hero-desktop.jpg';
import brandname from './bg-pattern-desktop.svg';

function App() {
  return (
    <div className="outerbox">
		<div className="box">
			<div className="headerbox">
				<img src={brandname}/>
			</div>
			<div className="contentbox">
			<div>
				<h1>WE'RE </h1>
				<h2>COMING SOON</h2>
			</div>
			<p>
				Hello fellow shoppers! We're currently building our new fashion store. 
				Add your email below to stay up-to-date with announcements and our launch deals.
			</p>
			<div>
				<input className="Email Address"/>
			</div>
			</div>
			
		</div>
		<div className="image">
			<img src="https://pyxis.nymag.com/v1/imgs/995/2e6/aca4690a46825ab9e7491797dd5429413e-28-zombieattack1.rsquare.w400.jpg"/>
		</div>
    </div>
  );
}

export default App;
