import { Tooltip } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import './fix.scss'

function Fix() {
  return ( 
    <div
      className='fix'
    >
      <Tooltip color="#000" placement="left" title={
        <div className='fix-div'>
            <h4>Search</h4>
            <span>Look for information across IRENA.org</span>
        </div>
      }>
        <SearchIcon />
      </Tooltip>
      <Tooltip color="#000" placement="left" title={
        <div className='fix-div'>
            <h4>REmember</h4>
            <span>Log in to the Member section</span>
        </div>
      }>
        <PersonOutlineIcon />
      </Tooltip>
      <Tooltip color="#000" placement="left" title={
        <div className='fix-div'>
            <h4>Up to date with IRENA</h4>
            <span>Get informed about news and updates relevant to your area of interests</span>
        </div>
      }>
        <NotificationsNoneIcon />
      </Tooltip>
      <Tooltip color="#000" placement="left" title={
        <div className='fix-div'>
            <h4>Clipboard</h4>
            <span>Here you can find interests items you have saved by exploring IRENA.org</span>
        </div>
      }>
        <FolderOpenIcon />
      </Tooltip>
    </div>
  );
}

export default Fix;