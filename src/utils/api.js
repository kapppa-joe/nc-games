import { default as axios } from "axios";

const api = axios.create({
  baseURL: "https://nc-board-gamers.herokuapp.com/api/",
});

export function getAllCategories() {
  return api.get(`/categories`).then((res) => res.data.categories);
}

export function getAllReviews(query = null) {
  let endPoint = `/reviews`;
  const params = query || { sort_by: "created_at", asc: "desc" };
  return api.get(endPoint, { params: params }).then((res) => res.data);
}

export function getReviewById(review_id) {
  return api.get(`/reviews/${review_id}`).then((res) => res.data.review);
}

export function getCommentsByReviewId(review_id) {
  return api
    .get(`/reviews/${review_id}/comments`)
    .then((res) => res.data.comments);
}

export function patchCommentVotes(comment_id, inc_votes) {
  return api
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then((res) => res.data.comment);
}

export function patchReviewVotes(review_id, inc_votes) {
  return api
    .patch(`/reviews/${review_id}`, { inc_votes })
    .then((res) => res.data.review);
}

export function postNewComment(review_id, username, comment_body) {
  return api
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: comment_body,
    })
    .then((res) => res.data.comment);
}

export function getUserByUsername(username) {
  return api.get(`/users/${username}`).then((res) => res.data.user);
}

export function getFeaturedReviews(username) {
  return api.get(`/reviews?limit=100&sort_by=created_at`).then((res) => {
    const allReviews = res.data.reviews;
    const newestReview = allReviews[0];
    const reviewOfTheMonth = allReviews[new Date().getMonth()];
    const myReview = username
      ? allReviews.find(
          (review) =>
            review.owner === username &&
            review.review_id !== reviewOfTheMonth.review_id
        )
      : null;
    return { newestReview, reviewOfTheMonth, myReview };
  });
}
