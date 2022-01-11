import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ImageUploading from "react-images-uploading";

function ModifyProfile(props) {
    const history = useHistory();
    let maxNumber = 60;
    let imgUrl;
    const [images, setImages] = useState();
    const [fileName, setFileName] = useState();

    const onChangeSingle = (imageList) => {
        imgUrl = imageList[0].data_url.split(',')[1];
        setImages(imgUrl);
        setFileName(imageList[0].file.name);
        // toast.success('Uploaded successfully')
    };
    return (
        <>
            <div className="p-4">
                <img src="./icons/arrow-left.png"
                    className="cursor-pointer mb-3"
                    width="18px" height="18px"
                    onClick={() => history.goBack()}
                />
                <div className="d-flex justify-content-between align-items-center ">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item breadcrumb-text"><a>Home</a></li>
                            <li className="breadcrumb-item breadcrumb-text"><a>My Account</a></li>
                        </ol>
                    </nav>
                </div>

                <div className="row border-bottom mb-3">
                    <div className="col-sm-12 col-md-3 col-lg-3"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                        <div className="kv-avatar">
                            <img src="./icons/profile.png"
                                className="cursor-pointer"
                                width="78px"
                                height="78px" />
                            <label
                                for="upload-photo"
                                style={{ marginLeft: "-17px", position: "relative", paddingTop: "56px", top: "32px" }}>
                                <i className="far fa-edit"></i></label>
                            <input
                                type="file"
                                name="photo"
                                id="upload-photo" />
                        </div>
                        <div className="user-email-text pb-2">
                            Change profile
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3"></div>
                </div>

                <div className="mb-4">
                    <label className="profile-info mb-3">Personal Info</label>
                    <div className="form-group mb-3">
                        <div className="input-group border formborder-color rounded">
                            <input type="text" className="form-control border-0" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group border formborder-color rounded">
                            <input type="text" className="form-control border-0" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group border formborder-color rounded">
                            <input type="text" className="form-control border-0" placeholder="Mobile number" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group border formborder-color rounded">
                            <input type="text" className="form-control border-0" placeholder="Email" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="profile-info mb-3">Other Info</label>
                    <div className="form-group mb-3">
                        <div className="formborder-color">
                            <select className="form-control">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group border formborder-color rounded">
                            <input type="date" className="form-control border-0" placeholder="Last Name" />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="profile-info mb-3">Emergency Contact details</label>
                    <div className="form-group mb-3">
                        <div className="formborder-color">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="formborder-color">
                            <input type="number" className="form-control" placeholder="Mobile number" />
                        </div>
                    </div>
                </div>

                <div className="mb-5">
                    <label className="profile-info mb-3">Upload documents</label>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-3">
                                <div className="formborder-color">
                                    <input type="text" className="form-control" placeholder="Passport Id" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group d-flex align-items-center">
                                <ImageUploading
                                    accept="image/*"
                                    // value={images}
                                    onChange={onChangeSingle}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                >
                                    {({
                                        imageList,
                                        onImageUpload,
                                        // onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps
                                    }) => (
                                        <div className="upload__image-wrapper">
                                            <div
                                                className="btn btn-outline-primary"
                                                style={isDragging ? { color: "red" } : null}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                            >
                                                Click or Drop here
                                            </div>
                                            &nbsp;
                                        </div>
                                    )}
                                </ImageUploading>
                                {fileName}
                            </div>

                        </div>
                    </div>
                </div>

                <button className="btn custom-buttons mb-2">Save</button>
            </div>
        </>
    )
}


export default ModifyProfile;