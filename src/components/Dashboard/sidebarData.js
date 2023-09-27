import React from 'react';

// Define the SidebarData array
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <i className="fas fa-user" />,
    cName: 'nav-item'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <i className="fas fa-chart-bar" />,
    cName: 'nav-item'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <i className="fab fa-dochub" />,
    cName: 'nav-item'
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <i className="fas fa-cog" />,
    cName: 'nav-item'
  },
  {
    title: 'Help',
    path: '/help',
    icon: <i className="fas fa-question-circle" />,
    cName: 'nav-item'
  },
  {
    title: 'logout',
    path: '/logout',
    icon: <i className="fas fa-sign-out-alt" />,
    cName: 'nav-item'
  }
];
export default SidebarData;