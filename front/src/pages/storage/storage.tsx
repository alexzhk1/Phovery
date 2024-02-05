import { DragAndDrop } from "../../components/draganddrop/dragAndDrop";
import { PayChart } from "../../components/pieChart/pieChart";
import { useState } from "react";
import "./storage.css"

export const Storage = () => {

    const images = [
        "images/abejita.webp",
        "images/ave_vere.webp",
        "images/caracol.webp",
        "images/gato_blamco.webp"
    ];

    const data = [
        { id: 0, value: 10, color: "#FDFF00", label: 'Imagenes' },
        { id: 1, value: 15, color: "#38E54D", label: 'Videos' },
        { id: 2, value: 20, color: "#BD61FF", label: 'Otros' },
        { id: 3, value: 55, color: "#8E7B60", label: 'Disponible' },
    ];

    const [toDrop, setToDrop] = useState([]);

    function uploadFiles(f) {
        setToDrop([...toDrop, ...f]);
    }

    function deleteFile(indexImg) {
        const updatedList = toDrop.filter((_, index) => index !== indexImg);
        setToDrop(updatedList);
    }

    return (

        <div className="storage-container">  
            <div className="chart-description-container">
                <div>
                    <p style={{paddingBottom: "10px", fontSize: "1.2rem"}}>
                        Almacenamiento total:
                    </p>
                    <div className="pie-container">
                        <PayChart data={data}></PayChart>
                    </div>
                </div>
                <div >
                    <p style={{paddingBottom: "10px", fontSize: "1.2rem"}}>
                        Archivos que utlizan mas espacio:
                    </p>
                    <div className="description-images-container">
                        <div className="images-container">
                            <img className="images" src={images[0]}></img>
                            <img className="images" src={images[1]}></img>
                            <img className="images" src={images[2]}></img>
                            <img className="images" src={images[3]}></img>
                        </div>
                        <div className="description">
                            <span>
                                <p>{data[0].label} - Espacio utlizado:  </p> <p>100 MB de 1 TB</p>
                            </span>
                            <span>
                                <p>{data[1].label} - Espacio utlizado:  </p> <p>150 MB de 1 TB</p>
                            </span>
                            <span>
                                <p>{data[2].label} - Espacio utlizado:  </p> <p>200 MB de 1 TB</p>
                            </span>
                            <span>
                                <p>Espacio Disponible:  </p>  <p>550 MB de 1 TB</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="drag-container">
                <div className="bg-white shadow rounded-lg w-full px-5 pt-3 pb-5">
                    <div className="pb-[8px] border-b border-[#e0e0e0] border-bottom">
                        <h2 className="text-black text-[17px] font-[600]">
                            Selecciona tus archivos o arrastralos para subirlos
                        </h2>
                    </div>
                    <DragAndDrop
                        toDrop={toDrop}
                        onUpload={uploadFiles}
                        onDelete={deleteFile}
                        count={2}
                        formats={["jpg", "jpeg", "png"]}
                    />
                </div>
            </div>
        </div>
    );
}

