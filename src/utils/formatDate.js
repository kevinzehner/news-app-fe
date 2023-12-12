import { format } from "date-fns";

export const formatDate = (articleDate) => {
  const formattedDate = format(new Date(articleDate), "d MMMM yyyy");
  return formattedDate;
};
