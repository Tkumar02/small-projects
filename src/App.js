import './App.css';
import LoadMoreData from './components/loadMore';

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
      <LoadMoreData/>
    </div>
  );
}

export default App;
