import React, { createRef, useState, useEffect } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import {
    StyledFormTextInput,
    StyledBlueButton,
    StyledRedButton,
    StyledSubmitButton,
    StyledThumbnailPreview,
    StyledCheckbox
} from '../../blog/StyledComponents';
import { Checkbox, Segment, Dropdown } from 'semantic-ui-react'

// import { Checkbox, Form, Select } from 'semantic-ui-react'
import axios from 'axios'
import './editor.css'
import { useParams, useHistory } from 'react-router';
import { AppUrl } from '../../blog/utility';
import { countries } from '../util/countries-iso';
import TagInput from '../../../components/TagInput/TagInput';

const processCategories = (categories) => {
    const processedCategories = categories.map(cat => {
        return { key: cat.name, value: cat.name, text: cat.name, _id: cat.id }
    });
    return processedCategories;
}

const fontStyles =
    "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago;Merriweather=merriweather; Montserrat=montserrat; Quicksand=quicksand; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

// const categories = [
//     { key: 'accomodation', value: 'accomodation', text: 'Accomodation' },
//     { key: 'food', value: 'food', text: 'Food' },
//     { key: 'southAmerica', value: 'southAmerica', text: 'South America' }
// ]

async function upload_handler(blobInfo, success, failure, progress) {
    const formData = new FormData();
    formData.append('image', blobInfo.blob());
    const res = await axios.post(`${AppUrl}api/tinymce/upload`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    console.log('res.data', res.data)
    success(res.data.location)
    return res.data.location;
};

const CreatePost = ({ isEditing }) => {
    const params = useParams();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [file, setFile] = useState('');
    const [country, setCountry] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    // const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [tags, setTags] = useState([]);
    const [initialContent, setInitialContent] = useState('Write something...');
    const [isCommentsDisabled, setIsCommentsDisabled] = useState(false);

    const fileInputRef = createRef();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleEditorContent = (e) => {
        setContent(e.target.getContent())
    }

    const handleFileChange = e => {
        e.preventDefault()
        setFile(e.target.files[0]);
    };

    const handleCountry = (e, { value }) => {
        e.preventDefault();
        setCountry(value);
    };

    const handleAuthor = e => {
        e.preventDefault()
        setAuthor(e.target.value);
    };

    const handleNewCategoryField = (e) => {
        setNewCategory(e.target.value);
    }

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

    const handleTags = async (value) => {
       
        setTags(value);
    }


    const handleForm = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        if (file && !isEditing) {
            formData.append('image', file);
        }
        if (file && isEditing) {
            if (file instanceof File) {
                //this will be an updated image
                formData.append('image', file);
            } else {
                //this will be the unchanged image
                formData.append('image', 'sameImage');
            }
        }

        const selectedCategoriesIds = categories.filter(cat=>selectedCategories.includes(cat.text)).map(cat=>cat._id); 
        formData.append('title', title||'');
        formData.append('author', author||'');
        formData.append('content', content || 'Write something...');
        formData.append('selected_categories', JSON.stringify(selectedCategoriesIds));
        formData.append('tags', JSON.stringify(tags));
        formData.append('country', country||'');
        formData.append('is_published', 0);
        let url = `${AppUrl}api/posts/save`;
        if (isEditing) url = `${AppUrl}api/posts/update/${params.id}`;
        await axios.post(url, formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(res => console.log('res', res.data)).catch(e => console.log('error', e));

        history.push('/admin/posts');
    }


    useEffect(() => {
        let processedCategories;
        const getCategories = async () => {
            const categoriesResponse = await axios.get(`${AppUrl}api/categories`);
            processedCategories = processCategories(categoriesResponse.data);
            setCategories(processedCategories);
        }
        getCategories()
        if (isEditing) {
            const getPost = async () => {
                const id = params.id;
                const postResponse = await axios.get(`${AppUrl}api/posts/edit/${id}`);
                const post = postResponse.data;
                console.log('Post response',postResponse)
                setTitle(post.title);
                setAuthor(post.author);

                setSelectedCategories(post.categories.map(cat=>cat.name));

                setCountry(post.country);
                if (post.tags) setTags(JSON.parse(post.tags));
                setInitialContent(post.content);
                setContent(post.content);
                setFile(post.aws_url);
            }
            getPost()
        }
    }, [])
    const handleSelectedCategories = (e, { label, checked }) => {
        if (checked) {
          setSelectedCategories([...selectedCategories, label]);
        } else {
          setSelectedCategories(selectedCategories.filter(el => el !== label));
        }
      };

    return (
        <div style={{ margin: 'auto', maxWidth: 800 }}>
            <h1>{isEditing ? 'Edit Post' : 'New Post'}</h1>

            <div>
                <label style={{fontSize:'1.2em'}}>Title</label>
                <StyledFormTextInput value={title} onChange={handleTitle} placeholder='Title' />
            </div>
            <div style={{ marginTop: 20 }}>
                <label style={{fontSize:'1.2em'}}>Author</label>
                <StyledFormTextInput value={author} onChange={handleAuthor} placeholder='Author' />
            </div>
            <div style={{ marginTop: 20 }}>
                <StyledThumbnailPreview file={file instanceof File ? URL.createObjectURL(file) : file} />
            </div>
            <div style={{ marginTop: 20 }}>
                <StyledBlueButton onClick={() => fileInputRef.current.click()} icon="image"
                >
                    Upload Thumbnail
                    </StyledBlueButton>
                <StyledRedButton onClick={() => setFile(null)}
                >
                    <i className="trash icon"></i>
                </StyledRedButton>
                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </div>
            <div style={{ marginTop: 20 }}>
                <label style={{fontSize:'1.2em'}}>Country</label>
                <Dropdown
                    clearable
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={countries}
                    onChange={handleCountry}
                    value={country}
                >

                </Dropdown>
            </div>
            <div style={{ marginTop: 20 }}>
                <label style={{fontSize:'1.2em'}}>Create a new category</label>
                <StyledFormTextInput value={newCategory} onChange={handleNewCategoryField} placeholder='New Category' />
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
                        {categories.map(cat =>{ 
                            
                            return(
                            <Dropdown.Item key={cat._id}>
                                <Checkbox label={cat.text} checked={selectedCategories.includes(cat.text)} onChange={handleSelectedCategories} />
                            </Dropdown.Item>
                        )})}
                    </Dropdown.Menu>
                </Dropdown>
            </Segment>
            {/* <div style={{ marginTop: 20 }}>
                <label style={{fontSize:'1.2em'}}>Select from an existing category</label>
                <Dropdown
                    clearable
                    placeholder='Select a Category'
                    fluid
                    search
                    selection
                    options={categories}
                    onChange={handleCategory}
                    value={(category || {}).value}
                />
            </div> */}
            <div style={{ marginTop: 20 }}>
                <label style={{fontSize:'1.2em'}}>Tags</label>
                <TagInput values={tags} onChange={handleTags} />
            </div>

            <div style={{ marginTop: 20 }}>
                <Editor
                    initialValue={initialContent}
                    apiKey="lmbdxengrz1nuue2c1bunerjwmcqgvzoptjjdr3w0o1imj5n"
                    
                    
                    init={{
                        
                        plugins: 'link image code autoresize',
                        toolbar: 'insert undo redo | bold italic | alignleft aligncenter alignright | code',
                        images_upload_handler: upload_handler,
                        content_style:
                            `@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
                             @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
                             @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
                             img {
                                 max-width:100%;
                                 object-fit:cover;
                             }
                            `,
                        font_formats: fontStyles,

                    }}
                    
                    onChange={handleEditorContent}
                />
            </div>
            {/* <Checkbox label='Published' /> */}



            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <StyledSubmitButton onClick={handleForm} >{isEditing ? 'Update' : 'Post'}</StyledSubmitButton>
            </div>


        </div>
    )
}

export default CreatePost
