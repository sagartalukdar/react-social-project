import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MessageIcon from '@mui/icons-material/Message';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const navigationMenu=[
    {
        title:"Home",
        icon:<AddToHomeScreenIcon/>,
        path:"/"
    },
    {
        title:"Reels",
        icon:<VideocamIcon/>,
        path:"/reels"
    },
    {
        title:"Create Reels",
        icon:<VideoCallIcon/>,
        path:"/create-reels"
    },
    {
        title:"Notification",
        icon:<NotificationsActiveIcon/>,
        path:"/"
    },
    {
        title:"Message",
        icon:<MessageIcon/>,
        path:"/message"
    },
    {
        title:"Lists",
        icon:<FormatListBulletedIcon/>,
        path:"/"
    },
    {
        title:"Community",
        icon:<PeopleIcon/>,
        path:"/"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/profile"
    },
]
