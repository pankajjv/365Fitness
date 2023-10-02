export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '367a1fbc2amsh5215a4ad5f99fe6p10bb01jsn4ea52486518a'
    }
    
  };
export const youtubeSearchOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '367a1fbc2amsh5215a4ad5f99fe6p10bb01jsn4ea52486518a'
    }
    
  };


export const fetchData =async(url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}