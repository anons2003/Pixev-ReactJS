import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';

const SubscriptionContext = createContext();

export const useSubscription = () => {
    const context = useContext(SubscriptionContext);
    if (!context) {
        throw new Error('useSubscription must be used within a SubscriptionProvider');
    }
    return context;
};

// Subscription plans
export const SUBSCRIPTION_PLANS = {
    FREE: {
        id: 'free',
        name: 'Free Plan',
        price: 0,
        monthlyPrice: 0,
        features: [
            'Download free resources',
            'Basic community access',
            'Standard support',
            'Limited downloads per day (5)'
        ],
        limits: {
            dailyDownloads: 5,
            premiumAccess: false,
            commercialLicense: false
        }
    },
    PREMIUM_MONTHLY: {
        id: 'premium_monthly',
        name: 'Premium Monthly',
        price: 19,
        monthlyPrice: 19,
        features: [
            'Unlimited downloads',
            'Access to premium resources',
            'Commercial license included',
            'Priority support',
            'Early access to new resources'
        ],
        limits: {
            dailyDownloads: Infinity,
            premiumAccess: true,
            commercialLicense: true
        }
    },
    PREMIUM_YEARLY: {
        id: 'premium_yearly',
        name: 'Premium Yearly',
        price: 199,
        monthlyPrice: 16.58,
        yearlyDiscount: '13% OFF',
        features: [
            'Unlimited downloads',
            'Access to premium resources',
            'Commercial license included',
            'Priority support',
            'Early access to new resources',
            '2 months free (vs monthly)'
        ],
        limits: {
            dailyDownloads: Infinity,
            premiumAccess: true,
            commercialLicense: true
        }
    }
};

export const SubscriptionProvider = ({ children }) => {
    const { user } = useUser();
    const [userSubscription, setUserSubscription] = useState(null);
    const [downloadHistory, setDownloadHistory] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);

    // Load subscription data from localStorage
    useEffect(() => {
        if (user) {
            const savedSubscription = localStorage.getItem(`subscription_${user.email}`);
            const savedDownloads = localStorage.getItem(`downloads_${user.email}`);
            
            if (savedSubscription) {
                try {
                    const parsed = JSON.parse(savedSubscription);
                    setUserSubscription(parsed);
                } catch (error) {
                    console.error('Error parsing subscription data:', error);
                    setUserSubscription(getDefaultSubscription());
                }
            } else {
                setUserSubscription(getDefaultSubscription());
            }

            if (savedDownloads) {
                try {
                    const parsed = JSON.parse(savedDownloads);
                    setDownloadHistory(parsed);
                } catch (error) {
                    console.error('Error parsing download history:', error);
                    setDownloadHistory([]);
                }
            }
        } else {
            setUserSubscription(null);
            setDownloadHistory([]);
        }
    }, [user]);

    // Save subscription data to localStorage
    useEffect(() => {
        if (user && userSubscription) {
            localStorage.setItem(`subscription_${user.email}`, JSON.stringify(userSubscription));
        }
    }, [userSubscription, user]);

    // Save download history to localStorage
    useEffect(() => {
        if (user && downloadHistory.length >= 0) {
            localStorage.setItem(`downloads_${user.email}`, JSON.stringify(downloadHistory));
        }
    }, [downloadHistory, user]);

    const getDefaultSubscription = () => ({
        plan: SUBSCRIPTION_PLANS.FREE,
        startDate: new Date().toISOString(),
        endDate: null,
        status: 'active',
        autoRenew: false
    });

    // Subscribe to a plan
    const subscribeToPlan = async (planId, paymentMethod = 'demo') => {
        if (!user) {
            throw new Error('User must be logged in to subscribe');
        }

        setIsProcessing(true);

        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            const plan = SUBSCRIPTION_PLANS[planId.toUpperCase()];
            if (!plan) {
                throw new Error('Invalid plan');
            }

            const startDate = new Date();
            const endDate = new Date();
            
            if (plan.id.includes('monthly')) {
                endDate.setMonth(endDate.getMonth() + 1);
            } else if (plan.id.includes('yearly')) {
                endDate.setFullYear(endDate.getFullYear() + 1);
            }

            const newSubscription = {
                plan: plan,
                startDate: startDate.toISOString(),
                endDate: plan.id === 'free' ? null : endDate.toISOString(),
                status: 'active',
                autoRenew: true,
                paymentMethod: paymentMethod,
                transactionId: `txn_${Date.now()}`
            };

            setUserSubscription(newSubscription);
            
            // Add subscription event to download history
            addDownloadRecord({
                type: 'subscription',
                plan: plan.name,
                amount: plan.price,
                date: new Date().toISOString()
            });

            console.log('Subscription successful:', newSubscription);
            return newSubscription;

        } catch (error) {
            console.error('Subscription failed:', error);
            throw error;
        } finally {
            setIsProcessing(false);
        }
    };

    // Cancel subscription
    const cancelSubscription = async () => {
        if (!userSubscription || userSubscription.plan.id === 'free') {
            return false;
        }

        setIsProcessing(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            setUserSubscription(prev => ({
                ...prev,
                status: 'cancelled',
                autoRenew: false,
                cancelledDate: new Date().toISOString()
            }));

            return true;
        } catch (error) {
            console.error('Cancellation failed:', error);
            return false;
        } finally {
            setIsProcessing(false);
        }
    };

    // Check if user can download premium content
    const canAccessPremium = () => {
        if (!userSubscription) return false;
        
        const now = new Date();
        const endDate = userSubscription.endDate ? new Date(userSubscription.endDate) : null;
        
        return userSubscription.status === 'active' && 
               userSubscription.plan.limits.premiumAccess &&
               (!endDate || now < endDate);
    };

    // Check daily download limit
    const getRemainingDownloads = () => {
        if (!userSubscription) return 0;
        
        const today = new Date().toDateString();
        const todayDownloads = downloadHistory.filter(download => 
            download.type === 'download' && 
            new Date(download.date).toDateString() === today
        ).length;

        const limit = userSubscription.plan.limits.dailyDownloads;
        return limit === Infinity ? Infinity : Math.max(0, limit - todayDownloads);
    };

    // Check if user has already downloaded a resource
    const hasDownloaded = (resourceId) => {
        if (!user) return false;
        
        return downloadHistory.some(download => 
            download.type === 'download' && 
            download.resourceId === resourceId
        );
    };

    // Check if user can download a specific resource
    const canDownload = (isPremiumResource = false) => {
        if (!user) return false;
        
        // Check if it's a premium resource and user has premium access
        if (isPremiumResource && !canAccessPremium()) {
            return false;
        }
        
        // Check download limits
        const remainingDownloads = getRemainingDownloads();
        return remainingDownloads > 0;
    };

    // Download a resource
    const downloadResource = async (resource) => {
        if (!user) {
            throw new Error('User must be logged in to download');
        }

        // Check if user can access premium content
        const isPremium = resource.value === 'Premium' || resource.price === 'Premium';
        if (isPremium && !canAccessPremium()) {
            throw new Error('Premium subscription required for this resource');
        }

        // Check daily download limit
        const remainingDownloads = getRemainingDownloads();
        if (remainingDownloads <= 0) {
            throw new Error('Daily download limit reached. Upgrade to Premium for unlimited downloads.');
        }

        setIsProcessing(true);

        try {
            // Simulate download process
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Add to download history
            const downloadRecord = {
                type: 'download',
                resourceId: resource.id,
                resourceName: resource.name || resource.title,
                resourcePrice: resource.value || resource.price,
                date: new Date().toISOString(),
                fileSize: resource.fileSize || 'Unknown',
                category: resource.category
            };

            addDownloadRecord(downloadRecord);

            // In a real app, this would trigger actual file download
            console.log('Download successful:', downloadRecord);
            
            return downloadRecord;

        } catch (error) {
            console.error('Download failed:', error);
            throw error;
        } finally {
            setIsProcessing(false);
        }
    };

    // Add record to download history
    const addDownloadRecord = (record) => {
        setDownloadHistory(prev => [record, ...prev]);
    };

    // Get subscription status info
    const getSubscriptionInfo = () => {
        if (!userSubscription) return null;

        const now = new Date();
        const endDate = userSubscription.endDate ? new Date(userSubscription.endDate) : null;
        const daysLeft = endDate ? Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)) : null;

        return {
            ...userSubscription,
            daysLeft,
            isActive: userSubscription.status === 'active' && (!endDate || now < endDate),
            remainingDownloads: getRemainingDownloads()
        };
    };

    const contextValue = {
        userSubscription,
        downloadHistory,
        isProcessing,
        subscribeToPlan,
        cancelSubscription,
        canAccessPremium,
        canDownload,
        hasDownloaded,
        downloadResource,
        getRemainingDownloads,
        getSubscriptionInfo,
        SUBSCRIPTION_PLANS
    };

    return (
        <SubscriptionContext.Provider value={contextValue}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export default SubscriptionContext;
