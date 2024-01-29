import { DragAndDrop } from "../../components/draganddrop/dragAndDrop";
import { useState } from "react";
import "./storage.css"

export const Storage = () => {

    const [ownerLicense, setOwnerLicense] = useState([]);

    function uploadFiles(f) {
        setOwnerLicense([...ownerLicense, ...f]);
    }

    function deleteFile(indexImg) {
        const updatedList = ownerLicense.filter((ele, index) => index !== indexImg);
        setOwnerLicense(updatedList);
    }

    return (
        <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
            <div className="pb-[8px] border-b border-[#e0e0e0] border-bottom">
                <h2 className="text-black text-[17px] font-[600]">
                    Selecciona tus archivos o arrastralos para subirlos
                </h2>
            </div>
            <DragAndDrop
                ownerLicense={ownerLicense}
                onUpload={uploadFiles}
                onDelete={deleteFile}
                count={2}
                formats={["jpg", "jpeg", "png"]}
            />
        </div>
    );
}
