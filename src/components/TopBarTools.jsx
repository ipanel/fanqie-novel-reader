import React from 'react';
import { List, Minus, Plus, Sun, Moon, RefreshCw, Languages } from 'lucide-react';
import HomeButton from './HomeButton';
import { IconButton, IconLink } from './IconButton';
import { FONT_SIZE_MIN, FONT_SIZE_MAX, TEXT_BRIGHTNESS_MIN, TEXT_BRIGHTNESS_MAX } from '../utils/constants';
import { buildCatalogUrl } from '../utils/navigation';

function TopBarTools({ 
  chapterData, 
  fontSize, 
  onFontSizeChange, 
  textBrightness, 
  onTextBrightnessChange, 
  useTraditionalChinese, 
  onTraditionalChineseToggle, 
  onRefresh 
}) {
  return (
    <>
      <HomeButton />
      {onFontSizeChange && (
        <>
          <IconButton
            type="button"
            title="減小字號"
            disabled={fontSize <= FONT_SIZE_MIN}
            onClick={() => onFontSizeChange(-1)}
          >
            <Minus size={20} strokeWidth={2.5} />
          </IconButton>
          <IconButton
            type="button"
            title="增大字號"
            disabled={fontSize >= FONT_SIZE_MAX}
            onClick={() => onFontSizeChange(1)}
          >
            <Plus size={20} strokeWidth={2.5} />
          </IconButton>
        </>
      )}
      {onTraditionalChineseToggle && (
        <IconButton
          type="button"
          title={useTraditionalChinese ? '切換為簡體中文' : '切換為繁體中文'}
          onClick={onTraditionalChineseToggle}
          style={useTraditionalChinese ? { color: 'var(--accent-color)' } : undefined}
        >
          <Languages size={20} strokeWidth={2.5} />
        </IconButton>
      )}
      {onTextBrightnessChange && (
        <>
          <IconButton
            type="button"
            title="變暗"
            disabled={textBrightness <= TEXT_BRIGHTNESS_MIN}
            onClick={() => onTextBrightnessChange(-1)}
          >
            <Moon size={20} strokeWidth={2.5} />
          </IconButton>
          <IconButton
            type="button"
            title="變亮"
            disabled={textBrightness >= TEXT_BRIGHTNESS_MAX}
            onClick={() => onTextBrightnessChange(1)}
          >
            <Sun size={20} strokeWidth={2.5} />
          </IconButton>
        </>
      )}
      {onRefresh && (
        <IconButton type="button" title="重新載入章節" onClick={onRefresh}>
          <RefreshCw size={20} strokeWidth={2.5} />
        </IconButton>
      )}
      {chapterData?.novel_data?.book_id && (
        <IconLink to={buildCatalogUrl(chapterData.novel_data.book_id)} title="目錄">
          <List size={20} strokeWidth={2.5} />
        </IconLink>
      )}
    </>
  );
}

export default TopBarTools;
