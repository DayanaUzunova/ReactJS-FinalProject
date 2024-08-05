import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Logout from './components/logout/Logout.jsx'
import CourseList from './components/course-list/CourseList.jsx';
import CourseCreate from './components/course-create/CourseCreate.jsx'
import CourseDetails from './components/course-details/CourseDetails.jsx';
import CourseEdit from './components/course-edit/CourseEdit.jsx'
import Footer from './components/footer/Footer.jsx';
import Search from './components/search/Search.jsx';
import NotFoundPage from './components/404/NotFound.jsx';
import RouteGuard from './components/common/RouteGuard.jsx';

function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route element={<RouteGuard />}>
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/courses/:courseId/edit' element={<CourseEdit />} />
                        <Route path='/courses/create' element={<CourseCreate />} />
                      </Route>  
                      <Route path='/courses' element={<CourseList />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/courses/:courseId/details' element={<CourseDetails />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthContextProvider>
    );
}

export default App;
