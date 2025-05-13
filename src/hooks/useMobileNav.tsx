import { useCallback, useState } from 'react';

const useMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open);
    if (isOpen) {
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((label: string) => {
    setActiveSubmenu((current) => (current === label ? null : label));
  }, []);

  return {
    isOpen,
    activeSubmenu,
    toggleMenu,
    closeMenu,
    toggleSubmenu,
  };
};

export default useMobileNav;
