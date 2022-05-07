
const configApi = {
    baseUrl: `https://api.themoviedb.org/3/`,
    apiKey: `76b561a98e4fd02b1859301babad1833`,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/w1280/${imgPath}`,
    w780image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default configApi;