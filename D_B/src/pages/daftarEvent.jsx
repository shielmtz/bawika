import { Link } from "react-router-dom";
import poster from "../assets/poster.jpeg";
import useDaftarEvent from "../hooks/useDaftarEvent";
import { MdOutlineFileUpload } from "react-icons/md";

const DaftarEvent = () => {
  const { formData, imagePreview, handleInput, handleFileChange, formSubmit } =
    useDaftarEvent();
  return (
    <>
      <div className="container flex flex-col mx-auto my-16">
        <h2 className="text-4xl font-semibold text-center">
          Pendaftaran Lomba
        </h2>
        <div className="flex flex-row mt-16">
          <div className="flex flex-col px-8 basis-2/5">
            <div className="px-4">
              <img
                className="w-full rounded-xl h-fit"
                src={poster}
                alt="poster lomba"
              />
            </div>
          </div>
          <div className="flex flex-col px-8 basis-3/5">
            <form onSubmit={formSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="nama"
                >
                  Nama Peserta
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="nama"
                  id="nama"
                  value={formData.nama}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="ttl"
                >
                  Tempat Tanggal Lahir
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="ttl"
                  id="ttl"
                  value={formData.ttl}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="asalSekolah"
                >
                  Asal Sekolah
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="asal_sekolah"
                  id="asalSekolah"
                  value={formData.asal_sekolah}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="alamat"
                >
                  Alamat
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="alamat"
                  id="alamat"
                  value={formData.alamat}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="nomor"
                >
                  Nomor
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="nomor"
                  id="nomor"
                  value={formData.nomor}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="jenisLomba"
                >
                  Jenis Lomba
                </label>
                <input
                  className="px-4 py-2 bg-white border rounded-md outline-none"
                  placeholder="Tulis disini"
                  type="text"
                  name="jenis_lomba"
                  id="jenisLomba"
                  value={formData.jenis_lomba}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-lg font-semibold text-zinc-600"
                  htmlFor="jenisLomba"
                >
                  Upload Pas Foto 4x6{" "}
                  <span className="text-sm font-normal">
                    *terlihat muka jelas
                  </span>
                </label>
                <div
                  className="flex items-center w-1/2 p-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="rounded-md"
                    />
                  ) : (
                    <div className="flex flex-col mx-auto my-4">
                      <div className="px-4 py-1 mx-auto bg-blue-200 rounded-full">
                        <MdOutlineFileUpload className="" />
                      </div>
                      <p>Click here to upload or drop media here</p>
                    </div>
                  )}
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>

              <Link
                className="bg-[#fee799] px-16 py-3 rounded-lg w-fit block font-semibold text-lg mt-6"
                type="submit"
                to="/payment"
              >
                Selesaikan Pembayaran
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DaftarEvent;
