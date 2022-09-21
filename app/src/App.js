import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Menubar from './components/Menubar';
import PhoneMenu from './components/PhoneMenu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterMenu from './components/FooterMenu';
import OMG from './pages/OMG';
import NationalParks from './pages/NationalParks';
import Cabins from './pages/Cabins';
import Islands from './pages/Islands';
import Beach from './pages/Beach';
import Aframes from './pages/Aframes';
import Design from './pages/Design';
import Arctic from './pages/Arctic';
import TinyHomes from './pages/TinyHomes';
import Lakefront from './pages/Lakefront';
import Surfing from './pages/Surfing';
import AmazingPools from './pages/AmazingPools';
import BedAndBreakfasts from './pages/BedAndBreakfasts';
import Camping from './pages/Camping';
import Caves from './pages/Caves';
import ChefsKitchens from './pages/ChefsKitchens';
import CreativeSpaces from './pages/CreativeSpaces';
import Luxe from './pages/Luxe';
import Golfing from './pages/Golfing';
import GrandPianos from './pages/GrandPianos';
import HistoricalHomes from './pages/HistoricalHomes';
import HouseBoats from './pages/HouseBoats';
import IconicCities from './pages/IconicCities';
import Lake from './pages/Lake';
import Mansions from './pages/Mansions';
import Ryokans from './pages/Ryokans';
import Tropical from './pages/Tropical';
import Vineyards from './pages/Vineyards';
import ImportantMessage from './components/ImportantMessage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <LoadingScreen></LoadingScreen>
        <Menubar></Menubar>
        <PhoneMenu></PhoneMenu>
        <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <OMG></OMG>
              </Route>
              <Route path="/national-parks">
                <NationalParks></NationalParks>
              </Route>
              <Route path="/cabins">
                <Cabins></Cabins>
              </Route>
              <Route path="/islands">
                <Islands></Islands>
              </Route>
              <Route path="/beach">
                <Beach></Beach>
              </Route>
              <Route path="/a-frames">
                <Aframes></Aframes>
              </Route>
              <Route path="/design">
                <Design></Design>
              </Route>
              <Route path="/arctic">
                <Arctic></Arctic>
              </Route>
              <Route path="/tiny-homes">
                <TinyHomes></TinyHomes>
              </Route>
              <Route path="/lakefront">
                <Lakefront></Lakefront>
              </Route>
              <Route path="/surfing">
                <Surfing></Surfing>
              </Route>
              <Route path="/amazing-pools">
                <AmazingPools></AmazingPools>
              </Route>
              <Route path="/bed-and-breakfasts">
                <BedAndBreakfasts></BedAndBreakfasts>
              </Route>
              <Route path="/camping">
                <Camping></Camping>
              </Route>
              <Route path="/caves">
                <Caves></Caves>
              </Route>
              <Route path="/chefs-kitchens">
                <ChefsKitchens></ChefsKitchens>
              </Route>
              <Route path="/creative-spaces">
                <CreativeSpaces></CreativeSpaces>
              </Route>
              <Route path="/luxe">
                <Luxe></Luxe>
              </Route>
              <Route path="/golfing">
                <Golfing></Golfing>
              </Route>
              <Route path="/grand-pianos">
                <GrandPianos></GrandPianos>
              </Route>
              <Route path="/historical-homes">
                <HistoricalHomes></HistoricalHomes>
              </Route>
              <Route path="/house-boats">
                <HouseBoats></HouseBoats>
              </Route>
              <Route path="/iconic-cities">
                <IconicCities></IconicCities>
              </Route>
              <Route path="/lake">
                <Lake></Lake>
              </Route>
              <Route path="/mansions">
                <Mansions></Mansions>
              </Route>
              <Route path="/ryokans">
                <Ryokans></Ryokans>
              </Route>
              <Route path="/tropical">
                <Tropical></Tropical>
              </Route>
              <Route path="/vineyards">
                <Vineyards></Vineyards>
              </Route>
            </Switch>
          </div>
        <ImportantMessage></ImportantMessage>
        <Footer></Footer>
        <FooterMenu></FooterMenu>
      </div>
    </Router>
  );
}

export default App;
