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

export const whoweareData = [
    {
        id: 0,
        text: "HISTORY",
        link: "cms/history"
    },
    {
        id: 1,
        text: "V M G",
        link: "cms/vmg"
    },
    {
        id: 2,
        text: "KSO GUIDING PRINCIPLES",
        link: "cms/kso_guiding_principles"
    },
    {
        id: 3,
        text: "COOPERATIVE PRINCIPLES",
        link: "cms/cooperative_principles"
    },
    {
        id: 4,
        text: "ORGANIZATIONAL STRUCTURE",
        link: "cms/organizational_structure"
    },
]

export const PnSData = [
    {
        id: 0,
        text: "Livelihood and Enterprise Development",
        link: "cms/livelihood_and_enterprise_development"
    },
    {
        id: 1,
        text: "Education, Training and Formation",
        link: "cms/education_training_and_formation"
    },
    {
        id: 2,
        text: "Health and Wellness",
        link: "cms/health_and_wellness"
    },
    {
        id: 3,
        text: "Security, Shelter and Safety",
        link: "cms/security_shelter_and_safety"
    },
    {
        id: 4,
        text: "Social Protection",
        link: "cms/social_protection"
    },
]

export const SOData = [
    {
        id: 0,
        text: "National Capital Region",
        link: "cms/ncr"
    },
    {
        id: 2,
        text: "Region III",
        link: "cms/region3"
    },
    {
        id: 3,
        text: "Region IV - A",
        link: "cms/region4a"
    },
]

export const PublicationData = [
    {
        id: 0,
        text: "Annual Reports",
        link: "cms/#"
    },
    {
        id: 1,
        text: "Audited Financial Statements",
        link: "cms/#"
    },
    {
        id: 2,
        text: "Announcements",
        link: "cms/#"
    },
    {
        id: 3,
        text: "By The Numbers",
        link: "cms/#"
    },
]

export const StoriesData = [
    {
        id: 0,
        text: "K - Ganapan",
        link: "cms/#"
    },
    {
        id: 1,
        text: "Kwentong - K",
        link: "cms/#"
    },
    {
        id: 2,
        text: "K - Bahagi",
        link: "cms/#"
    },
    {
        id: 3,
        text: "Videos",
        link: "cms/#"
    },
    
]