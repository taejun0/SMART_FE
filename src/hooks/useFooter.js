import { useLocation, useNavigate } from 'react-router-dom';
import { FOOTER_CONSTANTS } from '@constants/footerConstants';

export const useFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const items = FOOTER_CONSTANTS.footerItems.map((item) => {
    const isActive = location.pathname === item.path;

    return {
      ...item,
      icon: isActive ? item.ac_icon : item.deac_icon,
      labelColor: isActive
        ? `${({ theme }) => theme.colors.green01}`
        : 'rgba(156, 156, 161, 0.70)',
      onClick: () => navigate(item.path),
    };
  });

  return items;
};
