// "use client";
// import { useRef, useState } from "react";


// export const  DragAndDrop = () => {
//   const [dragActive, setDragActive] = useState<boolean>(false);
//   const inputRef = useRef<any>(null);
//   const [files, setFiles] = useState<any>([]);

//   function handleChange(e: any) {
//     e.preventDefault();
//     console.log("File has been added");
//     if (e.target.files && e.target.files[0]) {
//       console.log(e.target.files);
//       for (let i = 0; i < e.target.files["length"]; i++) {
//         setFiles((prevState: any) => [...prevState, e.target.files[i]]);
//       }
//     }
//   }

//   function handleSubmitFile(e: any) {
//     if (files.length === 0) {
//       // no file has been submitted
//     } else {
//       // write submit logic here
//     }
//   }

//   function handleDrop(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
//         setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
//       }
//     }
//   }

//   function handleDragLeave(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   }

//   function handleDragOver(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function handleDragEnter(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function removeFile(fileName: any, idx: any) {
//     const newArr = [...files];
//     newArr.splice(idx, 1);
//     setFiles([]);
//     setFiles(newArr);
//   }

//   function openFileExplorer() {
//     inputRef.current.value = "";
//     inputRef.current.click();
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         className={`${
//           dragActive ? "bg-blue-400" : "bg-blue-100"
//         }  p-4 w-1/3 rounded-lg  min-h-[10rem] text-center flex flex-col items-center justify-center`}
//         onDragEnter={handleDragEnter}
//         onSubmit={(e) => e.preventDefault()}
//         onDrop={handleDrop}
//         onDragLeave={handleDragLeave}
//         onDragOver={handleDragOver}
//       >
//         {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
//         <input
//           placeholder="fileInput"
//           className="hidden"
//           ref={inputRef}
//           type="file"
//           multiple={true}
//           onChange={handleChange}
//           accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
//         />

//         <p>
//           Drag & Drop files or{" "}
//           <span
//             className="font-bold text-blue-600 cursor-pointer"
//             onClick={openFileExplorer}
//           >
//             <u>Select files</u>
//           </span>{" "}
//           to upload
//         </p>

//         <div className="flex flex-col items-center p-3">
//           {files.map((file: any, idx: any) => (
//             <div key={idx} className="flex flex-row space-x-5">
//               <span>{file.name}</span>
//               <span
//                 className="text-red-500 cursor-pointer"
//                 onClick={() => removeFile(file.name, idx)}
//               >
//                 remove
//               </span>
//             </div>
//           ))}
//         </div>

//         <button
//           className="bg-black rounded-lg p-2 mt-3 w-auto"
//           onClick={handleSubmitFile}
//         >
//           <span className="p-2 text-white">Submit</span>
//         </button>
//       </form>
//     </div>
//   );
// }

import { useRef, useEffect, useState } from "react";
import { FaUpload, FaRegFileImage, FaRegFile } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import Swal from "sweetalert2";

export function DragAndDrop({
	ownerLicense,
	onUpload,
	onDelete,
	count,
	formats
}) {
	const dropContainer = useRef(null);
	const [dragging, setDragging] = useState(false);
	const fileRef = useRef(null);

	function handleDrop(e, type) {
		let files;
		if (type === "inputFile") {
			files = [...e.target.files];
		} else {
			e.preventDefault();
			e.stopPropagation();
			setDragging(false);
			files = [...e.dataTransfer.files];
		}

		const allFilesValid = files.every((file) => {
			return formats.some((format) => file.type.endsWith(`/${format}`));
		});

		if (ownerLicense.length >= count) {
			showAlert(
				"warning",
				"Maximum Files",
				`Only ${count} files can be uploaded`
			);
			return;
		}
		if (!allFilesValid) {
			showAlert(
				"warning",
				"Invalid Media",
				`Invalid file format. Please only upload ${formats
					.join(", ")
					.toUpperCase()}`
			);
			return;
		}
		if (count && count < files.length) {
			showAlert(
				"error",
				"Error",
				`Only ${count} file${count !== 1 ? "s" : ""} can be uploaded at a time`
			);
			return;
		}

		if (files && files.length) {
			const nFiles = files.map(async (file) => {
				const base64String = await convertFileBase64(file);
				return {
					name: file.name,
					photo: base64String,
					type: file.type,
					size: file.size
				};
			});

			Promise.all(nFiles).then((newFiles) => {
				onUpload(newFiles);
				TopNotification.fire({
					icon: "success",
					title: "Image(s) uploaded"
				});
			});
		}
	}

	async function convertFileBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				resolve(reader.result);
			};
			reader.onerror = (error) => {
				reject(error);
			};
		});
	}

	useEffect(() => {
		function handleDragOver(e) {
			e.preventDefault();
			e.stopPropagation();
			setDragging(true);
		}
		function handleDragLeave(e) {
			e.preventDefault();
			e.stopPropagation();
			setDragging(false);
		}
		dropContainer.current.addEventListener("dragover", handleDragOver);
		dropContainer.current.addEventListener("drop", handleDrop);
		dropContainer.current.addEventListener("dragleave", handleDragLeave);

		return () => {
			if (dropContainer.current) {
				dropContainer.current.removeEventListener("dragover", handleDragOver);
				dropContainer.current.removeEventListener("drop", handleDrop);
				dropContainer.current.removeEventListener("dragleave", handleDragLeave);
			}
		};
	}, [ownerLicense]);

	const TopNotification = Swal.mixin({
		toast: true,
		position: "bottom-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer);
			toast.addEventListener("mouseleave", Swal.resumeTimer);
		}
	});

	function showAlert(icon, title, text) {
		Swal.fire({
			icon: icon,
			title: title,
			text: text,
			showConfirmButton: false,
			width: 500,
			timer: 1500
		});
	}

	function showImage(image) {
		Swal.fire({
			imageUrl: image,
			showCloseButton: true,
			showConfirmButton: false,
			width: 450
		});
	}

	return (
		<>
			{/* Container Drop */}
			<div
				className={`${dragging
						? "border border-[#2B92EC] bg-[#EDF2FF]"
						: "border-dashed border-[#e0e0e0]"
					} flex items-center justify-center mx-auto text-center border-2 rounded-md mt-4 py-5`}
				ref={dropContainer}
			>
				<div className="flex-1 flex flex-col">
					<div className="mx-auto text-gray-400 mb-2">
						<FaUpload size={18} />
					</div>
					<div className="text-[12px] font-normal text-gray-500">
						<input
							className="opacity-0 hidden"
							type="file"
							multiple
							accept="image/*"
							ref={fileRef}
							onChange={(e) => handleDrop(e, "inputFile")}
						/>
						<span
							className="text-[#4070f4] cursor-pointer"
							onClick={() => {
								fileRef.current.click();
							}}
						>
							Click para cargar un archivo
						</span>{" "}
						o arrastra y suelta
					</div>
					<div className="text-[10px] font-normal text-gray-500">
						Solo arhcivos PNG, JPG or JPEG
					</div>
				</div>
			</div>

			{ownerLicense.length > 0 && (
				<div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-4">
					{ownerLicense.map((img, index) => (
						<div className="w-full px-3 py-3.5 rounded-md bg-slate-200 space-y-3">
							<div className="flex justify-between">
								<div className="w-[70%] flex justify-start items-center space-x-2">
									<div
										className="text-[#5E62FF] text-[37px] cursor-pointer"
										onClick={() => showImage(img.photo)}
									>
										{img.type.match(/image.*/i) ? (
											<FaRegFileImage />
										) : (
											<FaRegFile />
										)}
									</div>
									<div className=" space-y-1">
										<div className="text-xs font-medium text-gray-500">
											{img.name}
										</div>
										<div className="text-[10px] font-medium text-gray-400">{`${Math.floor(
											img.size / 1024
										)} KB`}</div>
									</div>
								</div>
								<div className="flex-1 flex justify-end">
									<div className="space-y-1">
										<div
											className="text-gray-500 text-[17px] cursor-pointer"
											onClick={() => onDelete(index)}
										>
											<BsX className="ml-auto" />
										</div>
										<div className="text-[10px] font-medium text-gray-400">
											Done
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
}
