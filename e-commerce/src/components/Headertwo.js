import React from 'react'
import './Headertwo.css'
import {Link} from 'react-router-dom';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import GestureIcon from '@material-ui/icons/Gesture';
import BrushIcon from '@material-ui/icons/Brush';
import ExtensionIcon from '@material-ui/icons/Extension';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
function Headertwo() {
    function definCategory(val){
        localStorage.setItem('category',val)
        setTimeout(() => window.location.reload(), 200)
    }
    return (
        <div className="header__two">
            <div className="header__categories">
                <CategoryIcon />
                <h3><Link to="/Dashboard/Allcategories" >All Categories</Link></h3>
            </div>
            <div className="header__categories">
                <BrushIcon />
                <h3><Link to="/Dashboard/category" onClick={() => definCategory("Painting")}>Painting</Link></h3>
            </div>
            <div className="header__categories">
                <CreateIcon />
                <h3><Link to="/Dashboard/category" onClick={() => definCategory("Sketching")}>Sketching</Link></h3>
            </div>
            <div className="header__categories">
                <GestureIcon />
                <h3><Link to="/Dashboard/category" onClick={() => definCategory("Drawing")} >Drawing</Link></h3>
            </div>
            <div className="header__categories">
                <ExtensionIcon />
                <h3><Link to="/Dashboard/category" onClick={() => definCategory("Clay")}>Clay</Link></h3>
            </div>
            <div className="header__categories">
                <SupervisorAccountIcon />
                <h3><Link to="/Dashboard/Askexperts">Be an Expert</Link></h3>
            </div>
            <div className="header__categories">
                <SupervisorAccountIcon />
                <h3><Link to="/Dashboard/collections">Ask Experts</Link></h3>
            </div>
            
        </div>
    )
}

export default Headertwo
