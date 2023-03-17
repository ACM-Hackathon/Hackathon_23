import AllUsers from './Component/AllUsers';
// import CodeForInterview from './Component/CodeForInterview';
import AllInternships from './Component/AllInternships';
import AllPPO from './Component/AllPPO';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import TYIntern from './Component/TYIntern';
import AYIntern from './Component/AYIntern';
import TYInternView from './Component/TYInternView';
import AYInternView from './Component/AYInternView';
import AYPPOView from './Component/AYPPOView';
import EditPPO from './Component/EditPPO';
import EditInternship from './Component/EditInternship';
import NavBar from './Component/NavBar';
import NavBar1 from './Component/NavBar1';
import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import AddInternship from './Component/AddInternship';
import AddPPO from './Component/AddPPO';
import AllAnnouncements from './Component/AllAnnouncements';
import AddAnnouncement from './Component/AddAnnouncements';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<><NavBar1/></>} /> 
        <Route path="/admin" element={<><NavBar /><CodeForInterview /></>}/>
        <Route path="/admin/all" element={<AllUsers /> } />
        <Route path="allint" element={<AllInternships /> } />
        <Route path="allppo" element={<AllPPO /> } />
        <Route path="allann" element={<AllAnnouncements /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/addint" element={<AddInternship />} />
        <Route path="/addppo" element={<AddPPO />} />
        <Route path="/addtppo" element={<TYIntern />} />
        <Route path="/addtppo/tallint" element={<TYInternView />} />
        <Route path="/addappo" element={<AYIntern />} />
        <Route path="/addappo/aallint" element={<AYInternView />} />
        <Route path="/addappo/aallppo" element={<AYPPOView />} />
        {/* <Route path="/addann" element={<AddAnnouncement />} /> */}
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/editppo/:id" element={<EditPPO />} />
        <Route path="/editint/:id" element={<EditInternship />} />
        {/* <Route path="/admin" element={<CodeForInterview />} /> */}

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
