import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
    const themes = ['forest', 'dark', 'light'] as const;
    const [currentTheme, setCurrentTheme] = React.useState<typeof themes[number]>('forest');

    const switchTheme = (theme: typeof themes[number]) => {
        document.documentElement.setAttribute('data-theme', theme);
        setCurrentTheme(theme);
    };

    return (
        <div className="theme-switcher">
            {themes.map((theme) => (
                <button
                    key={theme}
                    className={`theme-button ${currentTheme === theme ? 'active' : ''}`}
                    onClick={() => switchTheme(theme)}
                >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher; 