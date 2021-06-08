const prod = {
    API_URL: 'https://swapi.dev/api',
    BASE_URL: process.env.PUBLIC_URL
}

const dev = {
    API_URL: 'https://swapi.dev/api',
    BASE_URL: '/swlibrary/'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;