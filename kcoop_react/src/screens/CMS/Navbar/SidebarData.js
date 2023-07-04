import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGroup, faBuilding, faNewspaper, faHistory, faPeopleGroup, faStar } from '@fortawesome/free-solid-svg-icons';

 
export const SidebarData = [
    {
        id: 0,
        icon: <FontAwesomeIcon size="20" icon={faHome} />,
        text: "Home",
        link: "cms/home"
    },
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faUserGroup} />,
        text: "Who We Are",
        link: "#"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faStar} />,
        text: "Program and Services",
        link: "#"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faBuilding} /> ,
        text: "Satallite Offices",
        link: "#"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon size="20" icon={faNewspaper}/>,
        text: "Publications",
        link: "#"
    },
    {
        id: 5,
        icon: <FontAwesomeIcon size="20" icon={faHistory}/>,
        text: "Stories",
        link: "#"
    },
    {
        id: 6,
        icon: <FontAwesomeIcon size="20" icon={faPeopleGroup}/>,
        text: "Careers",
        link: "cms/careers"
    }
]