import { useParams } from "react-router-dom";

function JournalDetails() {
  const { id } = useParams();
  console.log(id);

  const articles = {
    1: {
      title: "Minimal Desk Setup Ideas",
      content:
        "A clean workspace improves focus and productivity. Keep only the essentials on your desk, organize cables neatly, and use ergonomic accessories. Adding a small plant or soft lighting can make your workspace more inviting.",
    },

    2: {
      title: "Essentials For Everyday Living",
      content:
        "Everyday essentials should combine comfort, functionality, and style. Invest in quality products that simplify daily life, from practical accessories to home organization solutions.",
    },

    3: {
      title: "Trends We Love This Season",
      content:
        "This season focuses on minimalism, earthy colors, comfortable fashion, and smart technology. Blending style with functionality creates a balanced and modern lifestyle.",
    },
  };

  const article = articles[id];

if (!article) {
  return <h1>Article Not Found</h1>;
}

  return (
    <div
      style={{
        padding: "80px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>{article.title}</h1>

      <p
        style={{
          marginTop: "30px",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        {article.content}
      </p>
    </div>
  );
}

export default JournalDetails;