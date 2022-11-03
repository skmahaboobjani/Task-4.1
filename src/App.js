

import Card from './components/Card';
function App() {

  const styling={
    display:'flex'
    
  }
  return (
    <div className="App">
      
     <div style={ styling}>
    <Card colors='#FF6663' name='#FF6663' text='PINK'/>
    <Card colors='#333333' name='#333333' text='GRAY'/>
    <Card colors='#000000' name='#000000'text='BLACK'/>
    <Card colors='#38BB15' name='#38BB15'text='GREEN'/>
    <Card colors='#C90B0B' name='#C90B0B'text='RED'/>
    </div>
    <div style={ styling}>
    <Card colors='#FF7F00' name='#FF800' text='ORANGE'/>
    <Card colors='#FFF500' name='#FFF500' text='YELLOW'/>
    <Card colors='#CCCCCC' name='#CCCCCC'text='LIGHT GRAY'/>
    <Card colors='#7E40A1' name='7E41A2'text='PURPLE'/>
    <Card colors='#C14911' name='#C14911'text='BROWN'/>
    </div>
    
      </div>
    
    
    
   
  );
}

export default App;
