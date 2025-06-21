import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';

const UserResourcesContext = createContext();

export const useUserResources = () => {
    const context = useContext(UserResourcesContext);
    if (!context) {
        throw new Error('useUserResources must be used within a UserResourcesProvider');
    }
    return context;
};

export const UserResourcesProvider = ({ children }) => {
    const { user } = useUser();
    const [userResources, setUserResources] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Load user resources from localStorage
    useEffect(() => {
        if (user) {
            const saved = localStorage.getItem(`userResources_${user.email}`);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    setUserResources(parsed);
                    console.log('Loaded user resources:', parsed);
                } catch (error) {
                    console.error('Error parsing user resources:', error);
                    setUserResources([]);
                }
            }
        } else {
            setUserResources([]);
        }
    }, [user]);

    // Save user resources to localStorage whenever it changes
    useEffect(() => {
        if (user && userResources.length >= 0) {
            localStorage.setItem(`userResources_${user.email}`, JSON.stringify(userResources));
        }
    }, [userResources, user]);

    // Add new resource
    const addResource = async (resourceData) => {
        if (!user) {
            throw new Error('User must be logged in to upload resources');
        }

        setIsLoading(true);
        
        try {
            // Simulate upload delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const newResource = {
                ...resourceData,
                id: Date.now(),
                uploadDate: new Date().toISOString(),
                creatorId: user.id,
                creatorEmail: user.email,
                status: 'published'
            };

            setUserResources(prev => [newResource, ...prev]);
            console.log('Added new resource:', newResource);
            return newResource;
        } catch (error) {
            console.error('Error adding resource:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    // Update resource
    const updateResource = async (resourceId, updates) => {
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setUserResources(prev => 
                prev.map(resource => 
                    resource.id === resourceId 
                        ? { ...resource, ...updates, lastModified: new Date().toISOString() }
                        : resource
                )
            );
            
            return true;
        } catch (error) {
            console.error('Error updating resource:', error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // Delete resource
    const deleteResource = async (resourceId) => {
        setIsLoading(true);
        
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            
            setUserResources(prev => prev.filter(resource => resource.id !== resourceId));
            console.log('Deleted resource:', resourceId);
            return true;
        } catch (error) {
            console.error('Error deleting resource:', error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // Get resources by category
    const getResourcesByCategory = (category) => {
        return userResources.filter(resource => 
            resource.category.toLowerCase() === category.toLowerCase()
        );
    };

    // Get resources by status
    const getResourcesByStatus = (status) => {
        return userResources.filter(resource => resource.status === status);
    };

    // Get total downloads (simulate)
    const getTotalDownloads = () => {
        return userResources.reduce((total, resource) => {
            return total + (resource.downloads || Math.floor(Math.random() * 100));
        }, 0);
    };

    // Get total earnings (simulate)
    const getTotalEarnings = () => {
        return userResources.reduce((total, resource) => {
            const price = resource.price === 'Free' ? 0 : 
                         resource.price === 'Premium' ? 29 :
                         parseFloat(resource.price.replace('$', '')) || 0;
            const downloads = resource.downloads || Math.floor(Math.random() * 50);
            return total + (price * downloads);
        }, 0);
    };

    const contextValue = {
        userResources,
        isLoading,
        addResource,
        updateResource,
        deleteResource,
        getResourcesByCategory,
        getResourcesByStatus,
        getTotalDownloads,
        getTotalEarnings
    };

    return (
        <UserResourcesContext.Provider value={contextValue}>
            {children}
        </UserResourcesContext.Provider>
    );
};

export default UserResourcesContext;
