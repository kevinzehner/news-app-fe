import axios from "axios";

export const fetchTopics = async () => {
  try {
    const response = await axios.get(
      "https://the-big-news-app.onrender.com/api/topics"
    );
    console.log("API Response - Topics:", response.data.topics.rows);
    return response.data.topics.rows;
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw error;
  }
};
