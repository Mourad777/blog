import React, { useState, createRef, useEffect, Fragment } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import {
    StyledBlueButton, StyledFormTextInput, StyledRedButton, StyledSubmitButton,
} from '../../blog/StyledComponents';
import axios from 'axios';
import { AppUrl } from '../../blog/utility';
import { Checkbox, Segment, Dropdown } from 'semantic-ui-react'
import { countries } from "../../blog/countries";
import TagInput from "../../blog/TagInput";
import EXIF from "exif-js";
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
} from 'semantic-ui-calendar-react';

const processCategories = (categories) => {
    const processedCategories = categories.map(cat => {
        return { key: cat.name, value: cat.name, text: cat.name, _id: cat.id }
    });
    return processedCategories;
}

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items, handleImageDetails }) => (
    <Gallery photos={items} renderImage={props => (
        <SortablePhoto handleImageDetails={handleImageDetails} {...props} />
    )} />
));

const updateOrder = async (items) => {
    const updateOrderUrl = `${AppUrl}api/configurations/update`;
    const order = items.map(item => item.id);
    const configFormData = new FormData();
    console.log('order to upload', order);
    configFormData.append('photo_gallery_order', JSON.stringify(order));
    console.log('order', order)
    const resUpdateOrder = await axios.post(updateOrderUrl, configFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    console.log('update order response: ', resUpdateOrder.data);
}

const getPhotos = async (setItems) => {
    const fetchPhotosUrl = `${AppUrl}api/photos`;
    const resFetchPhotos = await axios.get(fetchPhotosUrl);
    console.log('Fetch photos response', resFetchPhotos);

    const fetchConfigUrl = `${AppUrl}api/configurations`;
    const resFetchConfigurations = await axios.get(fetchConfigUrl);
    console.log('Fetch config response', resFetchConfigurations);
    const formattedPhotos = resFetchPhotos.data.map(item => {
        return {
            ...item,
            src: item.src,
            height: 1,
            width: 1.5,
            id: item.id,
        }
    });

    console.log('formattedPhotos', formattedPhotos)
    if (resFetchConfigurations.data !== 'no_config') {
        const order = JSON.parse(resFetchConfigurations.data.photo_gallery_order);
        console.log('saved order: ', order);
        const orderedFormattedPhotos = [];
        order.forEach(number => {
            formattedPhotos.forEach(photo => {
                if (photo.id === number) {
                    orderedFormattedPhotos.push(photo);
                }
            })
        });
        console.log('orderedFormattedPhotos', orderedFormattedPhotos);
        setItems(orderedFormattedPhotos)
    } else {
        console.log('default order')
        setItems(formattedPhotos)
    }
}

function PhotoGallery() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(false);

    const [title, setTitle] = useState('');
    const [photographer, setPhotographer] = useState('');

    const [camera, setCamera] = useState('');
    const [lens, setLens] = useState('');
    const [focalLength, setFocalLength] = useState('');
    const [iso, setIso] = useState('');
    const [shutterSpeed, setShutterSpeed] = useState('');
    const [aperture, setAperture] = useState('');

    const [description, setDescription] = useState('');
    const [dateTaken, setDateTaken] = useState('');
    const [tags, setTags] = useState([]);
    const [country, setCountry] = useState('');

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [newCategory, setNewCategory] = useState([]);

    const fileInputRef = createRef();

    const onSortEnd = async ({ oldIndex, newIndex }) => {
        const reArrangedPhotos = arrayMove(items, oldIndex, newIndex);
        console.log('reArrangedPhotos', reArrangedPhotos)
        setItems(reArrangedPhotos);
        //update order
        updateOrder(reArrangedPhotos)
    };

    useEffect(() => {

        const getCategories = async () => {
            const categoriesResponse = await axios.get(`${AppUrl}api/categories`);
            const processedCategories = processCategories(categoriesResponse.data);
            setCategories(processedCategories);
        }
        getCategories()
        //fetch photos

        getPhotos(setItems)
    }, []);

    const handleDate = (event, { name, value }) => {
        console.log('name', name)
        console.log('value', value)

        setDateTaken(value);
    }

    const handleImageUpload = async e => {
        e.preventDefault()
        const newPhotoFormData = new FormData();
        const file = e.target.files[0];
        console.log('e.target.files[0]', file);


        EXIF.getData(file, async function () {
            const exifData = EXIF.pretty(this);
            console.log('this', this)
            if (this.exifdata) {
                const {
                    Make,
                    Model,
                    undefined: Lens,
                    FocalLength={},
                    FNumber={},
                    ExposureTime={},
                    ISOSpeedRatings,
                    DateTime,
                } = this.exifdata
                console.log('this.exifdata',this.exifdata)
                //   console.log(EXIF.getTag(this, "Orientation"));
                newPhotoFormData.append('image', file);
                newPhotoFormData.append('camera', Make + ' ' + Model);
                newPhotoFormData.append('lens', Lens);
                newPhotoFormData.append('focal_length', `${FocalLength.numerator / FocalLength.denominator}mm`);
                newPhotoFormData.append('aperture', 'f' + FNumber.numerator / FNumber.denominator);
                newPhotoFormData.append('shutter_speed', `${ExposureTime.numerator}/${ExposureTime.denominator}s`);
                newPhotoFormData.append('iso', ISOSpeedRatings);
                newPhotoFormData.append('date_taken', DateTime);

                for (var pair of newPhotoFormData.entries()) {
                    console.log('abc', pair[0] + ', ' + pair[1]);
                }

                const savePhotoUrl = `${AppUrl}api/photos/save`;
                setIsLoading(true)
                const resUploadPhoto = await axios.post(savePhotoUrl, newPhotoFormData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                setIsLoading(false)
                console.log('upload photo response: ', resUploadPhoto.data);
                console.log('cur items', items);
                const newArray = [{ src: resUploadPhoto.data.src, height: 1, width: 1.5, id: resUploadPhoto.data.id }, ...items]
                console.log('new array', newArray);
                setItems(newArray);
                //update order 

                updateOrder(newArray)

            } else {
                newPhotoFormData.append('image', file);
                console.log("No EXIF data found in image '" + file.name + "'.");

                for (var pair of newPhotoFormData.entries()) {
                    console.log('abc', pair[0] + ', ' + pair[1]);
                }

                const savePhotoUrl = `${AppUrl}api/photos/save`;
                setIsLoading(true)
                const resUploadPhoto = await axios.post(savePhotoUrl, newPhotoFormData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    });
                setIsLoading(false)
                console.log('upload photo response: ', resUploadPhoto.data);
                console.log('cur items', items);
                const newArray = [{ src: resUploadPhoto.data.src, height: 1, width: 1.5, id: resUploadPhoto.data.id }, ...items]
                console.log('new array', newArray);
                setItems(newArray);
                //update order 

                updateOrder(newArray)
            }
        });

    };

    const handleImageDetails = (photo) => {
        console.log('set photo: ', photo)
        setCamera(photo.camera)
        setLens(photo.lens)
        setFocalLength(photo.focal_length)
        setShutterSpeed(photo.shutter_speed)
        setIso(photo.iso)
        setAperture(photo.aperture)

        setTitle(photo.title)
        setPhotographer(photo.photographer)
        setDescription(photo.description)
        setDateTaken(photo.date_taken)

        setTags(Array.isArray(JSON.parse(photo.tags)) ? JSON.parse(photo.tags) : [])
        setSelectedCategories(photo.categories.map(cat=>cat.name));
        setCountry(photo.country)

        setSelectedPhoto(photo)
    }

    const submitImageDetails = async (photo) => {
        console.log('set photo: ', photo);
        const selectedCategoriesIds = categories.filter(cat=>selectedCategories.includes(cat.text)).map(cat=>cat._id); 
        const formData = new FormData();
        formData.append('title', title||'');
        formData.append('photographer', photographer||'');
        formData.append('description', description||'');
        formData.append('camera', camera||'');
        formData.append('lens', lens||'');
        formData.append('focal_length', focalLength||'');
        formData.append('shutter_speed', shutterSpeed||'');
        formData.append('iso', iso||'');
        formData.append('aperture', aperture||'');
        formData.append('tags', JSON.stringify(tags));
        formData.append('country', country||'');
        formData.append('date_taken', dateTaken||'');
        formData.append('selected_categories',JSON.stringify(selectedCategoriesIds))

        const updatePhotoDetailsResponse = await axios.post(`${AppUrl}api/photos/update/${selectedPhoto.id}`, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

        console.log('updatePhotoDetailsResponse',updatePhotoDetailsResponse)
        setSelectedPhoto(null);
        getPhotos(setItems)
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

    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            <h1 style={{ textAlign: 'center' }}>Photo Gallery</h1>
            {selectedPhoto ?
                <div style={{ maxWidth: 500, margin: 'auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 20 }}>
                        <img style={{ maxWidth: 500, width: '100%' }} src={selectedPhoto.src} />
                    </div>
                    <div>
                        <label style={{ fontSize: '1.2em' }}>Title</label>
                        <StyledFormTextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Photographer</label>
                        <StyledFormTextInput value={photographer} onChange={(e) => setPhotographer(e.target.value)} placeholder='Photographer' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Description</label>
                        <StyledFormTextInput value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Date Taken</label>
                        <DateInput
                            name="date"
                            placeholder="Date Taken"
                            value={dateTaken}
                            iconPosition="left"
                            onChange={handleDate}
                            dateFormat="YYYY-MM-DD"
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Camera</label>
                        <StyledFormTextInput value={camera} onChange={(e) => setCamera(e.target.value)} placeholder='Camera' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Lens</label>
                        <StyledFormTextInput value={lens} onChange={(e) => setLens(e.target.value)} placeholder='Lens' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Focal Length</label>
                        <StyledFormTextInput value={focalLength} onChange={(e) => setFocalLength(e.target.value)} placeholder='Focal Length' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Shutter Speed</label>
                        <StyledFormTextInput value={shutterSpeed} onChange={(e) => setShutterSpeed(e.target.value)} placeholder='Shutter Speed' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Aperture</label>
                        <StyledFormTextInput value={aperture} onChange={(e) => setAperture(e.target.value)} placeholder='Aperture' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Iso</label>
                        <StyledFormTextInput value={iso} onChange={(e) => setIso(e.target.value)} placeholder='Iso' />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Tags</label>
                        <TagInput values={tags} onChange={(value) => setTags(value)} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <label style={{ fontSize: '1.2em' }}>Create a new category</label>
                        <StyledFormTextInput value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder='New Category' />
                        <div style={{ marginTop: 10 }}>
                            <StyledBlueButton onClick={handleNewCategorySubmit} icon="image"
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
                        <StyledSubmitButton onClick={() => submitImageDetails()} icon="image">
                            Update
                        </StyledSubmitButton>
                        <StyledRedButton style={{ maxWidth: 100, }} onClick={() => setSelectedPhoto(null)}
                        >
                            Cancel
                        </StyledRedButton>
                    </div>
                </div>
                : (
                    <Fragment>
                        <div style={{ marginTop: 20 }}>
                            <StyledBlueButton onClick={() => fileInputRef.current.click()} icon="image">
                                Upload Photo
                            </StyledBlueButton>
                            <input
                                ref={fileInputRef}
                                type="file"
                                hidden
                                onChange={handleImageUpload}
                            />
                        </div>
                        <SortableGallery handleImageDetails={handleImageDetails} items={items} onSortEnd={onSortEnd} axis={"xy"} />
                    </Fragment>
                )}
        </div>
    );
}

export default PhotoGallery;