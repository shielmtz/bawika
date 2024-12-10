import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import pesertaService from "../service/pesertaService";
import Swal from "sweetalert2";
import eventService from "../service/eventService";
import Navbar from "../components/navbar";

const DaftarEvent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    tempatLahir: '',
    tanggal: '',
    alamat: '',
    no_handphone: '',
    email: '',
    event_id: id,
    imagePath: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const data = await eventService.getEventById(id);
        setEventData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEventById();
  }, [id]);
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        imagePath: file,
      });

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleConfirm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('ttl', `${formData.tempatLahir}, ${formData.tanggal}`);
    submitData.append('alamat', formData.alamat);
    submitData.append('email', formData.email);
    submitData.append('no_handphone', formData.no_handphone);
    submitData.append('event_id', formData.event_id);

    // Include uploaded file if it exists
    if (formData.imagePath) {
      submitData.append('image_path', formData.imagePath);
    }

    try {
      const response = await pesertaService.createPeserta(submitData);

      Swal.fire({
        icon: 'success',
        title: 'Pendaftaran Berhasil',
        text: 'Terima kasih telah melakukan pendaftaran.',
        confirmButtonText: 'Konfirmasi',
        confirmButtonColor: '#3B9E3F',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = `/event/${id}`;
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Mengirim Data',
        text: error.message || 'Terjadi kesalahan. Silakan coba lagi.',
      });
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container flex flex-col mx-auto my-10">
        <h2 className="text-4xl font-semibold text-center">Pendaftaran Lomba </h2>
        <div className="flex flex-row mt-16">
          {/* Poster Section */}
          <div className="flex flex-col px-8 basis-2/5">
            <div className="px-4">
              <img
                className="w-full rounded-xl h-fit"
                src={eventData?.imagePath}// Ubah dengan path poster yang sesuai
                alt="poster lomba"
              />
            </div>
          </div>
          {/* Form Section */}
          <div className="flex flex-col px-8 basis-3/5">
            <form onSubmit={handleConfirm} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="nama">Nama Peserta</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="ttl">Tempat Lahir</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="tempatLahir"
                  id="tempatLahir"
                  value={formData.tempatLahir}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="tanggal">Tanggal Lahir</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  type="date"
                  name="tanggal"
                  id="tanggal"
                  value={formData.tanggal}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="alamat">Alamat</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="alamat"
                  id="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="email">Email</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600" htmlFor="no_handphone">Nomor Telepon</label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="number"
                  name="no_handphone"
                  id="no_handphone"
                  value={formData.no_handphone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Upload File Section */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold text-zinc-600">
                  Upload Bukti Pembayaran
                  <span className="text-sm font-normal"> *harus terlihat jelas</span>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border rounded-md"
                  accept="image/*"
                  required
                />
                {imagePreview && <img src={imagePreview} alt="preview" className="mt-2 rounded-md" />}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#fee799] px-16 py-3 rounded-lg w-fit block font-semibold text-lg mt-6"
              >
                Daftar Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarEvent;
