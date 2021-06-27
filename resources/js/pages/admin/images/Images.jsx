import React, { useState, createRef, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import {
    StyledBlueButton,
} from '../../blog/StyledComponents';
import axios from 'axios';
import { AppUrl } from '../../blog/utility';

const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
    <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

const updateOrder = async (items) => {
    const updateOrderUrl = `${AppUrl}api/configurations/update`;
    const order = items.map(item => item.id);
    const configFormData = new FormData();
    console.log('order to upload', order);
    configFormData.append('photo_gallery_order', JSON.stringify(order));
    console.log('order',order)
    const resUpdateOrder = await axios.post(updateOrderUrl, configFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    console.log('update order response: ', resUpdateOrder.data);
}

function PhotoGallery() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = createRef();

    const onSortEnd = async ({ oldIndex, newIndex }) => {
        const reArrangedPhotos = arrayMove(items, oldIndex, newIndex);
        console.log('reArrangedPhotos', reArrangedPhotos)
        setItems(reArrangedPhotos);
        //update order

        updateOrder(reArrangedPhotos)


    };

    useEffect(() => {
        //fetch photos
        const getPhotos = async () => {
            const fetchPhotosUrl = `${AppUrl}api/photos`;
            const resFetchPhotos = await axios.get(fetchPhotosUrl);
            console.log('Fetch photos response', resFetchPhotos);

            const fetchConfigUrl = `${AppUrl}api/configurations`;
            const resFetchConfigurations = await axios.get(fetchConfigUrl);
            console.log('Fetch config response', resFetchConfigurations);
            const formattedPhotos = resFetchPhotos.data.map(item=>{
                return {
                    src:item.src,
                    height:1,
                    width:1.5,
                    id:item.id,
                }
            });

            console.log('formattedPhotos',formattedPhotos)
            if(resFetchConfigurations.data !== 'no_config'){
                const order = JSON.parse(resFetchConfigurations.data.photo_gallery_order);
                console.log('saved order: ',order);
                const orderedFormattedPhotos = [];
                order.forEach(number=>{
                    formattedPhotos.forEach(photo=>{
                        if(photo.id === number){
                            orderedFormattedPhotos.push(photo);
                        }
                    })
                });
                console.log('orderedFormattedPhotos',orderedFormattedPhotos);
                setItems(orderedFormattedPhotos)
            } else {
                console.log('default order')
                setItems(formattedPhotos)
            }


           
        }
        getPhotos()
    }, [])

    const handleImageUpload = async e => {
        e.preventDefault()
        const newPhotoFormData = new FormData();
        newPhotoFormData.append('image', e.target.files[0]);

        const savePhotoUrl = `${AppUrl}api/photos/save`;
        setIsLoading(true)
        const resUploadPhoto = await axios.post(savePhotoUrl, newPhotoFormData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
        setIsLoading(false)
        console.log('upload photo response: ', resUploadPhoto.data);
        console.log('cur items', items);
        const newArray = [{ src: resUploadPhoto.data.src, height: 1, width: 1.5,id:resUploadPhoto.data.id }, ...items]
        console.log('new array', newArray);
        setItems(newArray);
        //update order 
        
        updateOrder(newArray)
    };

    return (
        <div>
            {isLoading && <h1>Loading</h1>}
            <h1 style={{ textAlign: 'center' }}>Photo Gallery</h1>
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
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    );
}

export default PhotoGallery;