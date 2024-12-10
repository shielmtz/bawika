import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import matter from "gray-matter";
import Rekomendasi from "../components/rekomendasi";

const SingleDongeng = () => {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const markdownFilePath = `/post/${slug}.md`;

    fetch(markdownFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Dongeng tidak ditemukan");
        }

        if (response.headers.get("Content-Type").includes("text/html")) {
          throw new Error("Dongeng tidak ditemukan");
        }

        return response.text();
      })
      .then((text) => {
        const { data, content } = matter(text);
        setMetadata(data);

        const md = new MarkdownIt();
        setContent(md.render(content));
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, [slug]);

  if (error) {
    return (
      <>
        <Navbar />
        <div className="mt-16 text-center">
          <h1 className="mb-6 text-3xl font-bold text-stone-300">
            Dongeng Tidak Ditemukan
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container px-10 mx-auto my-16">
        <h1 className="text-5xl text-center">{metadata.title}</h1>
        <div className="mx-16 my-16">
          {metadata.iframe && (
            <iframe
              src={metadata.iframe}
              title={metadata.title}
              width="100%"
              height="500"
              allowFullScreen
            />
          )}
        </div>
        <div
          className="w-full max-w-full px-0 prose prose-xl text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Rekomendasi />
      </div>
    </>
  );
};

export default SingleDongeng;
