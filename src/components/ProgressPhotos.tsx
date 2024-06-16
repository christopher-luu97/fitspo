import React, { useState } from "react";

const ProgressPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPhotos([...photos, ...Array.from(event.target.files)]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Progress Photos</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="mt-2 p-2 border rounded w-full"
      />
      <div className="mt-4 grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={URL.createObjectURL(photo)}
            alt={`Progress Photo ${index + 1}`}
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressPhotos;
