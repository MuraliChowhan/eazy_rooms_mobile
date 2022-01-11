import './kycform.css';
import { useHistory } from "react-router-dom";
import ImageUploading from "react-images-uploading";

function UploadImage() {
    const history = useHistory();
    return (
        <>
            <div className="p-4">
                <div className="d-flex justify-content-center mb-3">
                    <img src="./icons/small_logo.png" alt="small_logo" style={{ marginTop: "0px" }} />
                </div>

                <div className="emergency-detalis pb-2">
                    Please upload following documents
                </div>
                <div style={{ fontSize: "15px", fontWeight: "600" }}>Important</div>
                <ul className="mb-4">
                    <li className="file-format-text">
                        Doc format should ne pdf
                    </li>
                    <li className="file-format-text">
                        File size shoudn't be more than 50KB
                    </li>
                    <li className="file-format-text">
                        File size shoudn't be more than 50KB
                    </li>
                </ul>

                <div className="formborder-color mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select document type</option>
                        <option value="1">B121251</option>
                        <option value="2">N121251</option>
                        <option value="3">R121251</option>
                    </select>
                </div>
                <div className="mb-4">
                    <div className="text-center" style={{ borderStyle: "dashed", padding: "30px", borderRadius: "5px" }}>
                        {/* <img
                        src="./icons/small_logo.png"
                        alt="upload-logo"
                        className="mb-2"
                    /> */}
                        <i className="fas fa-image fa-2x text-primary"></i>
                        {/* <p className="mb-0 text-primary" style={{ fontSize: "14px" }}>Drop your image here or <span style={{ color: "#1F3BDB", fontWeight: "bold" }}>Browse</span></p> */}
                        <ImageUploading
                            accept="image/*"
                            // value={singleImages}
                            // onChange={onChangeSingle}
                            // maxNumber={maxNumber}
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
                                        Click, Drop or Browse here
                                    </div>
                                    &nbsp;
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
                <button className="btn custom-buttons mb-2"
                    onClick={(e) => {
                        history.push({
                            pathname: `/congratulations`,
                            state: {
                                data: "OTP"
                            }
                        }
                        )
                    }}
                >UPLOAD</button>
            </div>
        </>
    );
}

export default UploadImage;