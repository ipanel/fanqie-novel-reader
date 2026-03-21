import { Shield } from 'lucide-react';
import { IconButton } from './IconButton';
import { useProxy } from '../../hooks/useProxy';

export const PROXY_BUTTON_TITLE = '代理請求';

function ProxyButton({ title = PROXY_BUTTON_TITLE }) {
  const [enabled, toggle] = useProxy();

  return (
    <IconButton
      type="button"
      title={enabled ? `${title} (已開啟)` : `${title} (已關閉)`}
      onClick={toggle}
      style={enabled ? { color: 'var(--accent-color)' } : undefined}
    >
      <Shield size={20} strokeWidth={2.5} />
    </IconButton>
  );
}

export default ProxyButton;
