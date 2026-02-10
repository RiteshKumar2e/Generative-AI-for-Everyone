export const logActivity = (type, action) => {
    const saved = localStorage.getItem('app_activity_history');
    let history = [];
    try {
        history = saved ? JSON.parse(saved) : [];
    } catch (e) {
        history = [];
    }

    const newActivity = {
        id: Date.now(),
        type,
        action,
        user: localStorage.getItem('userName') || 'User',
        time: 'Just now',
        status: 'success'
    };

    localStorage.setItem('app_activity_history', JSON.stringify([newActivity, ...history]));
};
