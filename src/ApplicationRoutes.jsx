import React from "react";
import { Router, Route } from "react-router-dom";
import { PrivateRoute } from './_components';

import { LoginPage, SigninPage, HomePage } from './_views';
import { history } from './_helpers';

// export const ApplicationRoutes = () => (
//     <Router history={history}>
//         <div>
//             <PrivateRoute exact path="/" component={HomePage} />
//             <Route path="/signin" component={SigninPage} />
//             <Route path="/login" component={LoginPage} />
//         </div>
//     </Router>
// );

function ApplicationRoutes () {
    return (
        <Router history={history}>
            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/signin" component={SigninPage} />
                <Route path="/login" component={LoginPage} />
            </div>
        </Router>
    )
}

export default ApplicationRoutes;
