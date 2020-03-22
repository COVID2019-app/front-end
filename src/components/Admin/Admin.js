import React from "react";
import {Admin, Resource, Delete} from "react-admin";
 
import {postgrestClient} from "react-admin-postgrest-client";
import {
    CategoryList,
    CategoryCreate,
    CategoryEdit,
    CategoryShow
} from "./cms/Category";
 
 
const App = () => (
    <Admin
        dataProvider={postgrestClient("https://cvid.herokuapp.com/country/sort")}>
        <Resource
            name="category"
            list={CategoryList}
            create={CategoryCreate}
            edit={CategoryEdit}
            show={CategoryShow}
        />
    </Admin>
);
export default App;