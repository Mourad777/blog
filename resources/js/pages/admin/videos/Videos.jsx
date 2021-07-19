import React, { useState, createRef, useEffect, Fragment } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Video";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import {
    StyledBlueButton, 
    StyledFormTextInput, 
    StyledRedButton, 
    StyledSubmitButton,
    StyledThumbnailPreview,
} from '../../blog/StyledComponents';
import axios from 'axios';
import { AppUrl } from '../../blog/utility';
import { Checkbox, Segment, Dropdown } from 'semantic-ui-react'
import { countries } from "../util/countries-iso";
import TagInput from "../../../components/TagInput/TagInput";
import ReactPlayer from 'react-player'
import VideoIcon from '../../../../../public/assets/video-icon.jpg'

const processCategories = (categories) => {
    const processedCategories = categories.map(cat => {
        return { key: cat.name, value: cat.name, text: cat.name, _id: cat.id }
    });
    return processedCategories;
}
//photo image
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items, handleVideoDetails, handleDeleteVideo }) => (
    <Gallery photos={items} renderImage={props => (
        <SortablePhoto handleVideoDetails={handleVideoDetails} handleDeleteVideo={handleDeleteVideo} {...props} />
    )} />
));

const updateOrder = async (items) => {
    const updateOrderUrl = `${AppUrl}api/configurations/update`;
    const order = items.map(item => item.id);
    const configFormData = new FormData();
    configFormData.append('video_gallery_order', JSON.stringify(order));
    console.log('order', order)
    const resUpdateOrder = await axios.post(updateOrderUrl, configFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    console.log('update order response: ', resUpdateOrder.data);
}

const getVideos = async (setItems) => {
    const fetchVideosUrl = `${AppUrl}api/videos`;
    const resFetchVideos = await axios.get(fetchVideosUrl);
    console.log('Fetch videos response', resFetchVideos);

    const fetchConfigUrl = `${AppUrl}api/configurations`;
    const resFetchConfigurations = await axios.get(fetchConfigUrl);
    console.log('Fetch config response', resFetchConfigurations);
    const formattedVideos = resFetchVideos.data.map(item => {
        return {
            ...item,
            src: item.thumbnail || VideoIcon,
            height: 1,
            width: 1.5,
            commentCount:item.comments,
            id: item.id,
            videoUrl: item.src
        }
    });

    console.log('formattedVideos', formattedVideos)
    if (resFetchConfigurations.data !== 'no_config') {
        const order = JSON.parse(resFetchConfigurations.data.video_gallery_order);
        console.log('saved order: ', order);
        const orderedFormattedVideos = [];
        order.forEach(number => {
            formattedVideos.forEach(video => {
                if (video.id === number) {
                    orderedFormattedVideos.push(video);
                }
            })
        });
        console.log('orderedFormattedVideos', orderedFormattedVideos);
        setItems(orderedFormattedVideos)
    } else {
        console.log('default order')
        setItems(formattedVideos)
    }
}

function VideoGallery() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(false);

    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const [description, setDescription] = useState('');
    // const [dateTaken, setDateTaken] = useState('');
    const [tags, setTags] = useState([]);
    const [country, setCountry] = useState('');

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [newCategory, setNewCategory] = useState([]);

    const videoFileInputRef = createRef();
    const thumbnailInputRef = createRef();

    const onSortEnd = async ({ oldIndex, newIndex }) => {
        const reArrangeVideos = arrayMove(items, oldIndex, newIndex);
        console.log('reArrangeVideos', reArrangeVideos)
        setItems(reArrangeVideos);
        //update order
        updateOrder(reArrangeVideos)
    };

    useEffect(() => {

        const getCategories = async () => {
            const categoriesResponse = await axios.get(`${AppUrl}api/categories`);
            const processedCategories = processCategories(categoriesResponse.data);
            setCategories(processedCategories);
        }
        getCategories()

        getVideos(setItems)
    }, []);

    // const handleDate = (event, { name, value }) => {
    //     console.log('name', name)
    //     console.log('value', value)

    //     setDateTaken(value);
    // }

    const handleVideoUpload = async e => {
        e.preventDefault()
        const newVideoFormData = new FormData();
        const file = e.target.files[0];
        console.log('e.target.files[0]', file);



        newVideoFormData.append('video', file);

        const saveVideoUrl = `${AppUrl}api/videos/save`;
        setIsLoading(true)
        const resUploadVideo = await axios.post(saveVideoUrl, newVideoFormData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
        setIsLoading(false)
        console.log('upload video response: ', resUploadVideo.data);
        console.log('cur items', items);
        const newArray = [{ src: resUploadVideo.data.thumbnail || VideoIcon, height: 1, width: 1.5, id: resUploadVideo.data.id }, ...items]
        console.log('new array', newArray);
        setItems(newArray);
        //update order 

        updateOrder(newArray)



    };

    const handleVideoDetails = (video) => {
        console.log('set video: ', video)

        setTitle(video.title)
        setThumbnail(video.thumbnail)
        setDescription(video.description)
        // setDateTaken(video.date_taken)

        setTags(Array.isArray(video.tags) ? JSON.parse(video.tags) : [])
        setSelectedCategories((video.categories||[]).map(cat => cat.name));
        setCountry(video.country)

        setSelectedVideo(video)
    }

    const submitVideoDetails = async (video) => {
        console.log('set video: ', video);
        const selectedCategoriesIds = categories.filter(cat => selectedCategories.includes(cat.text)).map(cat => cat._id);
        const formData = new FormData();
        if(!!thumbnail){
            if (thumbnail instanceof File) {
                //this will be an updated image
                formData.append('thumbnail', thumbnail);
            } else {
                //this will be the unchanged image
                formData.append('thumbnail', 'sameThumbnail');
            }
        }
        formData.append('title', title || '');
        formData.append('description', description || '');

        formData.append('tags', JSON.stringify(tags));
        formData.append('country', country || '');
        // formData.append('date_taken', dateTaken || '');
        formData.append('selected_categories', JSON.stringify(selectedCategoriesIds))

        const updateVideoDetailsResponse = await axios.post(`${AppUrl}api/videos/update/${selectedVideo.id}`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

        setSelectedVideo(null);
        getVideos(setItems)
    }

    const handleSelectedCategories = (e, { label, checked }) => {
        if (checked) {
            setSelectedCategories([...selectedCategories, label]);
        } else {
            setSelectedCategories(selectedCategories.filter(el => el !== label));
        }
    };

    const handleNewCategorySubmit = async () => {
        const formData = new FormData();
        formData.append('name', newCategory);
        await axios.post(`${AppUrl}api/categories/save`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));

        const categoriesResponse = await axios.get(`${AppUrl}api/categories`);
        const processedCategories = processCategories(categoriesResponse.data);
        setCategories(processedCategories)
        setNewCategory('')
    }

    const handleDeleteVideo = async (id) => {
        console.log('delete image', id)
        await axios.delete(`${AppUrl}api/videos/delete/${id}`, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));
        
        // //update order 

        
        const newArray = items.filter(p=>p.id !== id);
        console.log('new array--------------------------',newArray)
        updateOrder(newArray)
        setItems(newArray);
        // console.log('curr array',items,'updated array',items.filter(p=>p.id !== id))
    }
    console.log('selec video', selectedVideo)
    const handleThumbnailChange = e => {
        e.preventDefault()
        setThumbnail(e.target.files[0]);
    };
    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            <h1 style={{ textAlign: 'center' }}>Video Gallery</h1>
            {selectedVideo ?
                <div style={{ maxWidth: 500, margin: 'auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        {/* <img style={{ maxWidth: 500, width: '100%' }} src={selectedVideo.src} /> */}
                        <ReactPlayer
                            controls
                            width="100%"
                            height="100%" url={selectedVideo.videoUrl} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <StyledThumbnailPreview file={thumbnail instanceof File ? URL.createObjectURL(thumbnail) : thumbnail} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <StyledBlueButton onClick={() => thumbnailInputRef.current.click()} icon="image">
                            Upload Thumbnail
                        </StyledBlueButton>
                        <StyledRedButton onClick={() => setThumbnail(null)}
                        >
                            <i className="trash icon"></i>
                        </StyledRedButton>
                        <input
                            ref={thumbnailInputRef}
                            type="file"
                            hidden
                            onChange={handleThumbnailChange}
                        />
                    </div>
                    <div>
                        <label style={{ fontSize: '1.2em' }}>Title</label>
                        <StyledFormTextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Description</label>
                        <StyledFormTextInput value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Tags</label>
                        <TagInput values={tags} onChange={(value) => setTags(value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Create a new category</label>
                        <StyledFormTextInput value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder='New Category' />
                        <div style={{ marginTop: 10 }}>
                            <StyledBlueButton disabled={!newCategory} onClick={handleNewCategorySubmit} icon="image"
                            >
                                Create Category
                            </StyledBlueButton>
                        </div>
                    </div>
                    <Segment basic>
                        <p>Categories: {selectedCategories.length > 0 ? selectedCategories.join(", ") : "empty"}</p>

                        <Dropdown item simple text="Select categories">
                            <Dropdown.Menu>
                                {categories.map(cat => {

                                    return (
                                        <Dropdown.Item key={cat._id}>
                                            <Checkbox label={cat.text} checked={selectedCategories.includes(cat.text)} onChange={handleSelectedCategories} />
                                        </Dropdown.Item>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Segment>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Country</label>
                        <Dropdown
                            clearable
                            placeholder='Select Country'
                            fluid
                            search
                            selection
                            options={countries}
                            onChange={(e, { value }) => setCountry(value)}
                            value={country}
                        >

                        </Dropdown>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <StyledSubmitButton onClick={() => submitVideoDetails()} icon="image">
                            Update
                        </StyledSubmitButton>
                        <StyledRedButton style={{ maxWidth: 100, }} onClick={() => setSelectedVideo(null)}
                        >
                            Cancel
                        </StyledRedButton>
                    </div>
                </div>
                : (
                    <Fragment>
                        <div style={{ marginTop: 20 }}>
                            <StyledBlueButton onClick={() => videoFileInputRef.current.click()} icon="image">
                                Upload Video
                            </StyledBlueButton>
                            <input
                                ref={videoFileInputRef}
                                type="file"
                                hidden
                                onChange={handleVideoUpload}
                            />
                        </div>
                        <SortableGallery handleVideoDetails={handleVideoDetails} handleDeleteVideo={handleDeleteVideo} items={items} onSortEnd={onSortEnd} axis={"xy"} />
                    </Fragment>
                )}
        </div>
    );
}

export default VideoGallery;