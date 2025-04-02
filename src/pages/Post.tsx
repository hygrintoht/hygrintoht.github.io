import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "../components/Layout";

export default function Post() {
  const { postId } = useParams();
  const [content, setContent] = useState<string>("Loading...");

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch((/*err*/) => {
        //console.error("Error loading post:", err); 
        setContent("# Not Found");
        });
  }, [postId]);

  return (
    <Layout>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Layout>
  );
}