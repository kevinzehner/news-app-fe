import React, { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api-fetch-topics";
import { getArticlesByTopic } from "../utils/api-fetch-articles-topic";
import { Link } from "react-router-dom";

const TopicArticles = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const topicsData = await fetchTopics();
        setTopics(topicsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div>
      <h2>All Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <p>{topic.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicArticles;
