export const renderItem = (item) => {
    if (item.type === 'image') {
        return renderImage(item);
    }
    if (item.type === 'audio') {
        return renderAudio(item);
    }
    if (item.type === 'video') {
        return renderVideo(item);
    }
};

const renderImage = (item) => {
    return (`
        <div class="item">
            <p class="item__title">${item.name}</p>
            <div class="item__image">
                <img src="${item.src}" alt="${item.name}">
            </div>    
        </div>
    `)
};

const renderAudio = (item) => {
    return (`
        <div class="item">
            <p class="item__title">${item.name}</p>
            <div class="item__audio">
                <audio controls src="${item.src}"></audio>
            </div>    
        </div>
    `)
};

const renderVideo = (item) => {
    return (`
        <div class="item">
            <p class="item__title">${item.name}</p>
            <div class="item__video">
                <video controls src="${item.src}"></video>
            </div>    
        </div>
    `)
};

export const renderContainer = (content) => {
    return (`
        <div class="items-container">
            ${content}    
        </div>
    `)
};