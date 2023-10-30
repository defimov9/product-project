import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque laboriosam
                fugiat adipisci reiciendis voluptatem iste voluptatibus, tempore suscipit id natus
                exercitationem, voluptates magnam! Nemo ipsum pariatur alias nihil tenetur?
            </Modal>
        </div>
    );
};

export default Navbar;
