import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
       </div>
      </Navbar>
      <StaffList />
    </div>
  );
}

export default App;