import { useState, useEffect } from 'react';
import { browseResourcesData, getCategoryByPath } from '../data/browseResourcesData';

export const useNavbarLogic = (currentPath) => {
    const [manu, setManu] = useState(currentPath);
    const [submenu, setSubManu] = useState('');
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Smart menu auto-open logic
    useEffect(() => {
        setManu(currentPath);
        
        // Smart auto-open logic for Browse Resources menu
        const isBrowseResourcesPage = browseResourcesData.some(item => item.path === currentPath);
        if (isBrowseResourcesPage) {
            setSubManu('/browse-resources');
            return;
        }
        
        // Auto open other menu dropdowns based on current page
        const menuMappings = {
            '/more-menu': ['/contact', '/helpcenter-faqs', '/terms', '/privacy'],
            '/my-account-menu': ['/activity', '/wallet', '/upload-work'],
            '/community-menu': ['/creators', '/collections']
        };

        for (const [menuKey, pages] of Object.entries(menuMappings)) {
            if (pages.includes(currentPath)) {
                setSubManu(menuKey);
                return;
            }
        }
        
        // Close submenu if not on relevant page
        setSubManu('');
    }, [currentPath]);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get current category info
    const currentCategory = getCategoryByPath(currentPath);
    
    // Check if current page is in Browse Resources
    const isBrowseResourcesActive = browseResourcesData.some(item => item.path === manu);
    
    // Helper functions
    const toggleSubmenu = (menuKey) => {
        setSubManu(submenu === menuKey ? '' : menuKey);
    };

    const closeAllMenus = () => {
        setToggle(false);
        setSearch(false);
        setUserDropdown(false);
        setSubManu('');
    };

    const isPageInCategory = (pages) => {
        return pages.includes(manu);
    };

    return {
        manu,
        setManu,
        submenu,
        setSubManu,
        toggle,
        setToggle,
        search,
        setSearch,
        userDropdown,
        setUserDropdown,
        scrolling,
        currentCategory,
        isBrowseResourcesActive,
        toggleSubmenu,
        closeAllMenus,
        isPageInCategory
    };
};

export default useNavbarLogic;
