import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'

import Index from './pages/index';
import IndexTwo from './pages/index/index-two';
import IndexThree from './pages/index/index-three';
import IndexFour from './pages/index/index-four';
import IndexFive from './pages/index/index-five';
import ExploreOne from './pages/explore/explore-one';
import ExploreTwo from './pages/explore/explore-two';
import ExploreThree from './pages/explore/explore-three';
import ExploreFour from './pages/explore/explore-four';
import Auction from './pages/explore/auction';
import ItemDetailOne from './pages/explore/item-detail-one';
import ItemDetailTwo from './pages/explore/item-detail-two';
import Activity from './pages/activity';
import Wallet from './pages/wallet';
import Aboutus from './pages/aboutus';
import Creators from './pages/creator/creators';
import CreatorProfile from './pages/creator/creator-profile';
import CreatorProfileEdit from './pages/creator/creator-profile-edit';
import BecomeCreator from './pages/creator/become-creator';
import Collections from './pages/collections';
import Blogs from './pages/blog/blogs';
import BlogSidebar from './pages/blog/blog-sidebar';
import BlogDetail from './pages/blog/blog-detail';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ResetPassword from './pages/auth/reset-password';
import LockScreen from './pages/auth/lock-screen';
import Comingsoon from './pages/spicel/comingsoon';
import Maintenance from './pages/spicel/maintenance';
import Error from './pages/spicel/error';
import HelpcenterOverview from './pages/helpcenter/helpcenter-overview';
import HelpcenterFaqs from './pages/helpcenter/helpcenter-faqs';
import HelpcenterGuides from './pages/helpcenter/helpcenter-guides';
import HelpcenterSupportRequest from './pages/helpcenter/helpcenter-support-request';
import UploadWork from './pages/upload-work';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Contact from './pages/contact';


function App() {


  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/index-two" element={<IndexTwo/>}/>
      <Route path="/index-three" element={<IndexThree/>}/>
      <Route path="/index-four" element={<IndexFour/>}/>
      <Route path="/index-five" element={<IndexFive/>}/>
      <Route path='/explore-one' element={<ExploreOne/>}/>
      <Route path='/explore-two' element={<ExploreTwo/>}/>
      <Route path='/explore-three' element={<ExploreThree/>}/>
      <Route path='/explore-four' element={<ExploreFour/>}/>
      <Route path='/auction' element={<Auction/>}/>
      <Route path='/item-detail-one' element={<ItemDetailOne/>}/>
      <Route path='/item-detail-one/:id' element={<ItemDetailOne/>}/>
      <Route path='/item-detail-Two' element={<ItemDetailTwo/>}/>
      <Route path='/activity' element={<Activity/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/creators' element={<Creators/>}/>
      <Route path='/creator-profile' element={<CreatorProfile/>}/>
      <Route path='/creator-profile-edit' element={<CreatorProfileEdit/>}/>
      <Route path='/become-creator' element={<BecomeCreator/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blog-sidebar' element={<BlogSidebar/>}/>
      <Route path='/blog-detail' element={<BlogDetail/>}/>
      <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/lock-screen' element={<LockScreen/>}/>
      <Route path='/comingsoon' element={<Comingsoon/>}/>
      <Route path='/maintenance' element={<Maintenance/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/helpcenter-overview' element={<HelpcenterOverview/>}/>
      <Route path='/helpcenter-faqs' element={<HelpcenterFaqs/>}/>
      <Route path='/helpcenter-guides' element={<HelpcenterGuides/>}/>
      <Route path='/helpcenter-support-request' element={<HelpcenterSupportRequest/>}/>
      <Route path='/upload-work' element={<UploadWork/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  );
}

export default App;
