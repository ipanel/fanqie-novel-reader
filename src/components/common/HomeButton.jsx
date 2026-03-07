import { LayoutDashboard } from 'lucide-react';
import { IconLink } from './IconButton';

function HomeButton({ title = '返回首頁' }) {
  return (
    <IconLink to="/" title={title}>
      <LayoutDashboard size={20} strokeWidth={2.5} />
    </IconLink>
  );
}

export default HomeButton;
