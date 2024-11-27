import React from 'react'

const EmailIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlSpace='preserve'
            width={200}
            height={200}
            viewBox='0 0 512 512'
            className={className}
        >
            <path d='M440.917 67.925H71.083C31.827 67.925 0 99.752 0 139.008v233.984c0 39.256 31.827 71.083 71.083 71.083h369.834c39.255 0 71.083-31.827 71.083-71.083V139.008c0-39.256-31.828-71.083-71.083-71.083zM178.166 321.72l-99.54 84.92c-7.021 5.992-17.576 5.159-23.567-1.869-5.992-7.021-5.159-17.576 1.87-23.567l99.54-84.92c7.02-5.992 17.574-5.159 23.566 1.87 5.992 7.02 5.159 17.575-1.869 23.566zM256 289.436c-13.314-.033-26.22-4.457-36.31-13.183l.008.008-.032-.024c.008.008.017.008.024.016L66.962 143.694c-6.98-6.058-7.723-16.612-1.674-23.583 6.057-6.98 16.612-7.723 23.582-1.674l152.771 132.592c3.265 2.906 8.645 5.004 14.359 4.971 5.706.017 10.995-2.024 14.44-5.028l.074-.065 152.615-132.469c6.971-6.049 17.526-5.306 23.583 1.674 6.048 6.97 5.306 17.525-1.674 23.583l-152.77 132.599c-10.057 8.635-22.946 13.125-36.268 13.142zm200.948 115.335c-5.992 7.028-16.547 7.861-23.566 1.869l-99.54-84.92c-7.028-5.992-7.861-16.546-1.869-23.566 5.991-7.029 16.546-7.861 23.566-1.87l99.54 84.92c7.028 5.991 7.861 16.546 1.869 23.567z' />
        </svg>
    )
}

export default EmailIcon
