export const browseResourcesData = [
    {
        id: 'all',
        name: 'All Categories',
        path: '/explore-one',
        icon: 'uil-apps',
        description: 'Browse all available resources',
        color: 'primary',
        category: 'all',
        itemCount: 2500,
        isPopular: true
    },
    {
        id: 'templates',
        name: 'Web Templates',
        path: '/explore-two',
        icon: 'uil-window-section',
        description: 'Professional website templates',
        color: 'info',
        category: 'templates',
        itemCount: 850,
        isPopular: true
    },
    {
        id: 'graphics',
        name: 'Graphics & Design',
        path: '/explore-three',
        icon: 'uil-palette',
        description: 'Logos, icons, illustrations',
        color: 'warning',
        category: 'graphics',
        itemCount: 1200,
        isPopular: false
    },
    {
        id: 'photos',
        name: 'Stock Photos',
        path: '/explore-four',
        icon: 'uil-camera',
        description: 'High-quality stock images',
        color: 'success',
        category: 'photos',
        itemCount: 650,
        isPopular: true
    },
    {
        id: 'trending',
        name: 'Trending Assets',
        path: '/auction',
        icon: 'uil-fire',
        description: 'Popular and trending resources',
        color: 'danger',
        category: 'trending',
        itemCount: 150,
        isPopular: true
    }
];

export const getCategoryByPath = (path) => {
    return browseResourcesData.find(item => item.path === path);
};

export const getCategoryById = (id) => {
    return browseResourcesData.find(item => item.id === id);
};

export const getCategoryByCategory = (category) => {
    return browseResourcesData.find(item => item.category === category);
};

export const getAllCategories = () => {
    return browseResourcesData;
};

export const getPopularCategories = () => {
    return browseResourcesData.filter(item => item.isPopular);
};

export const getTotalItemCount = () => {
    return browseResourcesData.reduce((total, item) => total + item.itemCount, 0);
};

export const getCategoryStats = (categoryId) => {
    const category = getCategoryById(categoryId);
    return category ? {
        itemCount: category.itemCount,
        isPopular: category.isPopular,
        description: category.description
    } : null;
};
