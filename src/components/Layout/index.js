import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/index.js';

const Layout = () => {
    return ( 

        <><Sidebar /><div className="page">
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>&lt;/body&gt;
                <br />
                <span className='tags bottom-tags'>&lt;/html&gt;</span>
            </span>
        </div></>
    );
}

export default Layout