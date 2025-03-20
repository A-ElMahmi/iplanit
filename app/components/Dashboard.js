import DashboardWidget from "./DashboardWidget";
import MailIcon from "@/public/mail.svg";
import CalendarIcon from "@/public/today.svg";
import NotesIcon from "@/public/sticky_note_2.svg";


export default function Dashboard() {
    return (
      <div className="dashboard">
        <DashboardWidget headerName={"Last Message"} icon={MailIcon} colorVar="var(--blue-messages)">
            <p className="widget-small">John Doe</p>
            <p className="widget-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
        </DashboardWidget>
        <DashboardWidget headerName={"Next Event"} icon={CalendarIcon} colorVar="var(--yellow-calendar)" blackText={true}>
            <p className="widget-body">Group Bowling</p>
            <p className="widget-small">Saturday, March 1st</p>
            <p className="widget-small">2:00pm - 4:00pm</p>
        </DashboardWidget>
        <DashboardWidget headerName={"Last Note"} icon={NotesIcon} colorVar="var(--purple-notes)">
            <p className="widget-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus sapiente eum suscipit velit doloremque animi asperiores, iste debitis dolores, tenetur beatae, aliquid aut sit quis rem eos. Eveniet, sunt!</p>
        </DashboardWidget>
      </div>
    )
}