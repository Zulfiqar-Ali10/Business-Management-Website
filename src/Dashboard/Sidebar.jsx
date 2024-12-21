import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faFolder, faTasks, faCalendar, faChartPie, faCog, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const sidebarItems = [
  { icon: faHome, label: 'Dashboard', active: true },
  { icon: faChartBar, label: 'Banner', active: false },
  { icon: faFolder, label: 'Services', active: false },
  { icon: faTasks, label: 'Contact', active: false },
  { icon: faCalendar, label: 'Testimonial', active: false },
  { icon: faChartPie, label: 'Reports', active: false },
];

const settingsItems = [
  { icon: faCog, label: 'Settings' },
  { icon: faUser, label: 'Profile' },
  { icon: faQuestionCircle, label: 'Help' },
];

export default function Sidebar() {
  return (
    <aside  className=" fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-blue-950 border-r border-gray-200 ">
      <div className="p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center px-3 py-2.5 text-sm font-medium ${
                item.active ? 'text-blue-950 bg-white mb-3' : 'text-white hover:bg-blue-600 hover:text-blue-600'
              } rounded-lg group`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>


        <div className="mt-8">
          <h3 className="flex items-center px-3 py-2.5 text-sm font-medium text-blue-950 bg-white rounded-lg group uppercase tracking-wider">
            <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-3  text-blue-950 group-hover:text-blue-600" />
            Settings
          </h3>
          <nav className="mt-2 space-y-1 mt-3">
            {settingsItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className=" flex items-center px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-600 hover:text-blue-600 rounded-lg group"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-3 text-white group-hover:text-blue-600" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}




