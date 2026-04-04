import { create } from 'zustand';


const UseBlognews = create((set) => ({
    isBlogtoggle: false,
    toggleblog: () => set((state) => ({ isBlogtoggle: !state.isBlogtoggle })),
    openblog: () => set({ isBlogtoggle: true }),
    closeblog: () => set({ isBlogtoggle: false }),
    
    // Blog Posts State
    posts: [
        {
            id: 1,
            author: "Dr. Clara Smith",
            content: "Welcome to our new community blog! We'll be sharing the latest health tips and institutional updates here. Stay tuned for more!",
            timestamp: "2 hours ago",
            likes: 12,
            type: "update"
        },
        {
            id: 2,
            author: "Admin Team",
            content: "Reminder: Flu shots are still available in the clinic. Book yours today to stay protected this season.",
            timestamp: "5 hours ago",
            likes: 8,
            type: "alert"
        }
    ],

    addPost: (newPost) => set((state) => ({
        posts: [
            {
                id: Date.now(),
                author: "You",
                content: newPost,
                timestamp: "Just now",
                likes: 0,
                type: "update"
            },
            ...state.posts
        ]
    })),
}))

export default UseBlognews;