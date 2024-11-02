export const centerVariants = {
    closed: {
        opacity: 1,
    },
    opened: {
        opacity: 0,
    }
}

export const bottomVariants = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: -45,
        translateY: '2px',
        backgroundColor: 'var(--white)'
    }
}

export const topVariants = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: 45,
        backgroundColor: 'var(--white)'
    }
}