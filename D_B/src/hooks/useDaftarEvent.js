import { useState } from "react";

const useDaftarEvent = () => {
  const [imagePreview, setImagePreview] = useState();
  const [pasFoto, setPasFoto] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    ttl: "",
    asal_sekolah: "",
    alamat: "",
    nomor: "",
    email: "",
    jenis_lomba: "",
  });

  const handleFileChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setPasFoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return { formData, imagePreview, handleInput, handleFileChange, formSubmit };
};

export default useDaftarEvent;
