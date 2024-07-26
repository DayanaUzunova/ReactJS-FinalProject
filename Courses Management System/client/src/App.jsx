import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import CourseList from './components/course-list/CourseList.jsx';
import CourseCreate from './components/course-create/CourseCreate.jsx'
import CourseDetails from './components/course-details/CourseDetails.jsx';
import { AuthContext } from './contexts/AuthContext.js';

function App() {
    // TODO: remove this from App component
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    }

    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState
    };

    return (
        <AuthContext.Provider value={contextData}>
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/courses' element={<CourseList />} />
                    <Route path='/courses/:courseId/details' element={<CourseDetails />} />
                    <Route path='/courses/create' element={<CourseCreate />} />
                </Routes>
            </main>
        </div>
        </AuthContext.Provider>
    );
}

export default App;
