module.exports = [
    {
        id: 'home',
        name: 'Home',
        url: '/'
    },
    {
        id: 'about',
        name: 'About',
        url: '/about'
    },
    {
        id: 'services',
        name: 'Services',
        url: '/services'
    },
    {
        id: 'events',
        name: 'Events',
        url: '/events'
    },
    {
        id: 'menu',
        name: 'Menu',
        url: '/menu'
    },
    {
        id: 'pages',
        name: 'Pages',
        url: '/',
        children: [
            {
                id: 'booking',
                name: 'Booking',
                url: '/booking'
            },
            {
                id: 'blog',
                name: 'Our Blog',
                url: '/blog'
            },
            {
                id: 'team',
                name: 'Our Team',
                url: '/team'
            },
            {
                id: 'testimonial',
                name: 'Testimonial',
                url: '/testimonial'
            },
            {
                id: '404',
                name: '404 Page',
                url: '/404'
            }
        ]
    },
    {
        id: 'contact',
        name: 'Contact',
        url: '/contact'
    }
]