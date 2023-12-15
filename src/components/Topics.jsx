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
    <section className="topics-container">
      <h2 className="topics-header">All Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li className="topic-element" key={topic.slug}>
            <Link className="topic-links" to={`/topics/${topic.slug}`}>
              <p>{topic.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopicArticles;
