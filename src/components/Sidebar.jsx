import { Button, Nav, NavItem } from "reactstrap";
import { useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const settings = [
    "What are the current sales figures?",
    "How is the sales performance this quarter?",
    "What are the top-performing products?",
    "What is the revenue by region?",
    "How do customer acquisition costs compare?",
    "What are the current inventory levels?",
    "What is the customer retention rate?",
    "How are the marketing campaigns performing?",
    "What are the sales forecasts for next month?",
    "What are the current profit margins?",
    "How does sales performance compare to last year?",
    "What are the customer demographics?",
    "How effective are our sales strategies?",
    "What are the recent sales trends?",
    "What is the average order value?",
    "What are the sales by channel?",
    "How are our competitors performing?",
    "What are the top sales opportunities?",
    "What is the impact of recent promotions?",
    "How are our sales targets progressing?",
    "What are the trends in customer feedback?",
    "How are we performing against our KPIs?",
    "What is the status of current sales projects?",
    "What are the key drivers of sales growth?",
    "What are the sales trends by product category?",
    "What are the historical sales patterns?",
    "How are seasonal factors affecting sales?",
    "What is the impact of recent changes in pricing?",
    "How do our sales compare to industry benchmarks?",
    "What are the recent trends in customer purchasing behavior?",
    "What are the expected sales for the upcoming quarter?",
    "How effective are our sales promotions?",
    "What are the current conversion rates?",
    "What are the sales outcomes of our latest campaigns?"
]

const Sidebar = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return (
        <div>
            <div className="d-flex align-items-center"></div>
            <div
                className="profilebg"
                style={{ background: `url(${probg}) no-repeat` }}
            >
                <div className="p-3 d-flex">
                    <img src={user1} alt="user" width="50" className="rounded-circle" />
                    <Button
                        color="white"
                        className="ms-auto text-white d-lg-none"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="bi bi-x"></i>
                    </Button>
                </div>
                <div className="bg-dark text-white p-2 opacity-75">Gourav R</div>
            </div>
            <div className="p-3 my-2 py-4  bg-light" style={{ height: 'calc(100vh - 150px)', overflowY: 'auto' }}>
                <Nav vertical className="sidebarNav">
                    {settings.map((navi, index) => (
                        <NavItem key={index} className="border-bottom mb-2">
                            <span className="d-inline-block text-wrap p-2">{navi}</span>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;
