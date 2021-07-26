import axios from 'axios'
import { AppUrl } from '../../blog/utility'
import VideoIcon from '../../../../../public/assets/video-icon.jpg'

export const getCategories = async () => {
    let categoriesResponse;
    try {
        categoriesResponse = await axios.get(`${AppUrl}api/categories`);
    } catch (e) {
        console.log('Fetch categories response error', e)
    }
    console.log('Fetch categories response', categoriesResponse)
    return categoriesResponse;
}

export const handleNewCategorySubmit = async (newCategory, setIsLoading) => {
    const formData = new FormData();
    formData.append('name', newCategory);
    let newCategoryResponse;
    setIsLoading(true)
    try {
        newCategoryResponse = await axios.post(`${AppUrl}api/categories/save`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
    } catch (e) {
        setIsLoading(false)
        console.log('New category response error: ', e)
    }
    console.log('New category response: ', newCategoryResponse)
}

//updates the order of photos or videos in a gallery after
//dragging and dropping
export const updateOrder = async (items, galleryType) => {
    const updateOrderUrl = `${AppUrl}api/configurations/update`;
    const order = items.map(item => item.id);
    const configFormData = new FormData();
    configFormData.append(galleryType, JSON.stringify(order));
    let resUpdateOrder;
    try {
        resUpdateOrder = await axios.post(updateOrderUrl, configFormData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
    } catch (e) {
        console.log('Update photo order response error: ', e)

    }
    console.log('Update photo order response: ', resUpdateOrder)
}

export const getPhotos = async (setItems, setIsLoading) => {
    const fetchPhotosUrl = `${AppUrl}api/photos`;
    let resFetchPhotos;
    setIsLoading(true);
    try {
        resFetchPhotos = await axios.get(fetchPhotosUrl);

    } catch (e) {
        console.log('Fetch photos response error', e);

        setIsLoading(false)
    }

    console.log('Fetch photos response', resFetchPhotos);

    const fetchConfigUrl = `${AppUrl}api/configurations`;
    let resFetchConfigurations;
    try {
        resFetchConfigurations = await axios.get(fetchConfigUrl);

    } catch (e) {
        console.log('Fetch configuration response error', e);

        setIsLoading(false)
    }

    console.log('Fetch config response', resFetchConfigurations);

    setIsLoading(false)
    const formattedPhotos = resFetchPhotos.data.map(item => {
        return {
            ...item,
            src: item.src,
            height: 1,
            width: 1.5,
            id: item.id,
        }
    });

    if (resFetchConfigurations.data !== 'no_config') {
        const order = JSON.parse(resFetchConfigurations.data.photo_gallery_order);
        const orderedFormattedPhotos = [];
        order.forEach(number => {
            formattedPhotos.forEach(photo => {
                if (photo.id === number) {
                    orderedFormattedPhotos.push(photo);
                }
            })
        });
        setItems(orderedFormattedPhotos)
    } else {
        setItems(formattedPhotos)
    }
}

export const getVideos = async (setItems, setIsLoading) => {
    const fetchVideosUrl = `${AppUrl}api/videos`;
    setIsLoading(true);
    let resFetchVideos;
    try {
        resFetchVideos = await axios.get(fetchVideosUrl);
    } catch (e) {
        console.log('Fetch videos response error', e);
        setIsLoading(false)
    }

    console.log('Fetch videos response', resFetchVideos);

    const fetchConfigUrl = `${AppUrl}api/configurations`;
    let resFetchConfigurations;
    try {
        resFetchConfigurations = await axios.get(fetchConfigUrl);
    } catch (e) {
        console.log('Fetch configuration response error', e);
        setIsLoading(false)
    }
    console.log('Fetch config response', resFetchConfigurations);

    setIsLoading(false)
    const formattedVideos = resFetchVideos.data.map(item => {
        return {
            ...item,
            src: item.thumbnail || VideoIcon,
            height: 1,
            width: 1.5,
            commentCount: item.comment_count,
            id: item.id,
            videoUrl: item.src
        }
    });

    if (resFetchConfigurations.data !== 'no_config') {
        const order = JSON.parse(resFetchConfigurations.data.video_gallery_order);
        const orderedFormattedVideos = [];
        order.forEach(number => {
            formattedVideos.forEach(video => {
                if (video.id === number) {
                    orderedFormattedVideos.push(video);
                }
            })
        });
        setItems(orderedFormattedVideos)
    } else {
        setItems(formattedVideos)
    }
}

export const deleteVideo = async (id, setIsLoading) => {
    let deleteVideoResponse;
    setIsLoading(true);
    try {
        deleteVideoResponse = await axios.delete(`${AppUrl}api/videos/delete/${id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    } catch (e) {
        setIsLoading(false);
        console.log('Delete video response error', e)
    }
    setIsLoading(false);
    console.log('Delete video response', deleteVideoResponse)
}

export const deletePhoto = async (id, setIsLoading) => {
    let deletePhotoResponse;
    setIsLoading(true);
    try {
        deletePhotoResponse = await axios.delete(`${AppUrl}api/photos/delete/${id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    } catch (e) {
        setIsLoading(false);
        console.log('Delete photo response error', e)
    }
    setIsLoading(false);
    console.log('Delete photo response', deletePhotoResponse)
}

export const presignedUrlFileUpload = async (filename, directory, file, saveModelUrl, modelData) => {
    //step 1 get presigned url
    const presignedUrlEndpoint = `${AppUrl}api/upload/store`;
    const fileInfo = new FormData();
    fileInfo.append('filename', filename);
    fileInfo.append('directory', directory);

    const resPresignedUrl = await axios.post(presignedUrlEndpoint, fileInfo,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    console.log('Presigned url response', resPresignedUrl);

    //step 2 send file to presigned url
    const fileData = new FormData();
    const inputs = resPresignedUrl.data.inputs;
    Object.keys(inputs).forEach(key => {
        fileData.append(key, inputs[key]);
    });

    fileData.append('file', file);

    const fileUploadUrl =
        resPresignedUrl.data.attributes.action;

    const response = await axios.post(
        fileUploadUrl,
        fileData,
    );
    console.log('file upload response', response);

    //step 3 save key and any additional data in appropriate model
    const newModelFormData = new FormData();
    modelData.forEach(item => {
        newModelFormData.append(item.key, item.value)
    });

    const saveModelResponse = await axios.post(saveModelUrl, newModelFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log('Save model response',saveModelResponse)
    return {videoUrl:resPresignedUrl.data.url,videoId:saveModelResponse.data.id}


}

export const deleteCategory = async (id,setIsLoading) => {
    let deleteResponse;
    setIsLoading(true);
    try {
        deleteResponse = await axios.delete(`${AppUrl}api/categories/delete/${id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    } catch (e) {
        console.log('Delete Error Response', e)
        setIsLoading(false);
    }
    console.log('Delete Response', deleteResponse);
}