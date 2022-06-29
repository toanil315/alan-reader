import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { ALAN_KEY } from "./util/util";
import IntroCard from "./components/IntroCard/IntroCard";
import NewsCard from "./components/NewsCard/NewsCard";

function App() {
  const [articles, setArticles] = useState([]);
  const [isShowingArticles, setIsShowingArticles] = useState(false);

  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
          setIsShowingArticles(true);
        }
        if(command === "goBack") {
          setIsShowingArticles(false)
        }
      },
    });
  }, []);

  const renderNews = () => {
    return articles?.map((news, index) => {
      return <NewsCard key={index} {...news} index={index} />;
    });
  };

  return (
    <div className="App">
      <div>
        <img
          style={{ width: "35%", display: "block", margin: "0 auto" }}
          src="https://i0.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2020/09/Futuristic-image-1-Copy.png?fit=3184%2C1878&ssl=1"
          alt="alan image"
        />
      </div>
      {isShowingArticles ? (
        <div
          style={{
            maxWidth: "1170px",
            padding: "0 15px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              marginLeft: "-15px",
              flexFlow: 'row wrap'
            }}
          >
            {renderNews()}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IntroCard
            title="Lastest News"
            command={"Give me the latest news"}
            bgColor="#00838F"
          />
          <IntroCard
            title="News by Categories"
            description="Categories: Business, Entertainment, General, Health, Science, Sports, Technology"
            command={"Give me the latest Technology news"}
            bgColor="#1565C0"
          />
        </div>
      )}
    </div>
  );
}

export default App;
