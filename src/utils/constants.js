const prod = {
    API_URL: 'https://swapi.dev/api',
    BASE_URL: '/swlibrary'
}

const dev = {
    API_URL: 'https://swapi.dev/api',
    BASE_URL: '/'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;