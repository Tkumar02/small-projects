import './App.css';
import Treeview from './components/treeView';
import menus from './components/treeView/data';

function App() {
  return (
    <div className="App">
      {/* <Accordion></Accordion> */}
      {/* <RandomColour></RandomColour> */}
      {/* <StarRating noOfStars={10}></StarRating> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData/> */}
      <Treeview menus={menus}/>
    </div>
  );
}

export default App;
