import React from 'react';
import './FontSwitcher.css';

const FontSwitcher: React.FC = () => {
    const fonts = [
        { id: 'justus', name: 'Justus Pro' },
        { id: 'roboto-slab', name: 'Roboto Slab' },
        { id: 'archivo', name: 'Archivo Narrow' },
        { id: 'inter', name: 'Inter' }
    ] as const;
    
    const [currentFont, setCurrentFont] = React.useState<typeof fonts[number]['id']>('justus');

    const switchFont = (font: typeof fonts[number]['id']) => {
        document.documentElement.setAttribute('data-font', font);
        setCurrentFont(font);
    };

    return (
        <div className="font-switcher">
            {fonts.map((font) => (
                <button
                    key={font.id}
                    className={`font-button ${currentFont === font.id ? 'active' : ''}`}
                    onClick={() => switchFont(font.id)}
                    style={{ fontFamily: font.id === 'justus' ? 'justus-pro' : font.name }}
                >
                    {font.name}
                </button>
            ))}
        </div>
    );
};

export default FontSwitcher; 