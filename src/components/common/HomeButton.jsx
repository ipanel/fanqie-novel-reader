import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { IconButton } from './IconButton';

function HomeButton({ title = '返回首頁' }) {
  const navigate = useNavigate();
  return (
    <IconButton type="button" title={title} onClick={() => navigate('/')}>
      <Home size={20} strokeWidth={2.5} />
    </IconButton>
  );
}

export default HomeButton;
