import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { logedRoute, notLogedRoute } from '../router/myRoutes';
import { AuthContext } from './context';


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
        ?<Routes>
        {logedRoute.map (route => 
            <Route 
            path={route.path} 
            element={route.element}
            key={new Date()}
            />
        )}
        </Routes>
        :<Routes>
            {notLogedRoute.map (route => 
                <Route 
                path={route.path} 
                element={route.element}
                key={new Date()}
                />
            )}
        </Routes>
    )
}

export default AppRouter;