// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = {

    userSide: [
      {
        title: 'overview',
        path: '/dashboard/overview',
        icon: getIcon('ic:round-dashboard'),
      },
      {
        title: 'tasks',
        path: '/dashboard/tasks',
        icon: getIcon('fluent:tasks-app-28-filled'),
      },
      {
        title: 'community',
        path: '/dashboard/community',
        icon: getIcon('jam:messages-f'),
      },
      {
        title: 'announcements',
        path: '/dashboard/announcements',
        icon: getIcon('fluent:megaphone-loud-24-filled'),
      },


    ],
    companySide: [
      {
        title: 'business',
        path: '/business/app',
        icon: getIcon('ic:round-dashboard'),
      },
      {
        title: 'analytics',
        path: '/business/analytics',
        icon: getIcon('mdi:compass'),
      },
      {
        title: 'messages',
        path: '/business/messages',
        icon: getIcon('ic:baseline-message'),
      },
      {
        title: 'schedule',
        path: '/business/schedule',
        icon: getIcon('ic:baseline-person'),
      },
      {
        title: 'billing',
        path: '/business/billing',
        icon: getIcon('eva:lock-fill'),
      },


    ],

}

export default navConfig;
