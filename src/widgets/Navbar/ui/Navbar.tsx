import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                    {t('Main page')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('About page')}
                </AppLink>

            </div>
        </div>
    );
};
