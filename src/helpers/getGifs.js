export const getGifs = async (urlSearch, apiKey, category) => {
    const url = `${urlSearch}api_key=${apiKey}&q=${encodeURI(category)}`;
    const resp = fetch(url);
    const { data } = await (await resp).json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs
};